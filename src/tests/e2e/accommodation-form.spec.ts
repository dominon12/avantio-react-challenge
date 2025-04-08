import { expect, Page, test } from "@playwright/test";

import mockAccommodation from "../mock-data/mock-accommodation";
import mockOwner from "../mock-data/mock-owner";

let sharedPage: Page;

test.describe.serial("Accommodation form multi-step", async () => {
  test.beforeAll(async ({ browser }) => {
    // setup page sharing
    const context = await browser.newContext();
    sharedPage = await context.newPage();
    await sharedPage.goto("/");
  });

  test.afterAll(async () => {
    // cleanup
    await sharedPage.close();
  });

  test("Accommodation form should be able to fill in and submit", async () => {
    const page = sharedPage;

    await page.goto("/");

    // expect to spawn on the Accommodation Form step
    await expect(page.getByText("Accommodation")).toBeVisible();

    // expect submit button to be disabled
    const nextStepBtn = page.getByRole("button", { name: "Next" });
    await expect(nextStepBtn).toBeDisabled();

    // fill in the accommodation form
    await page.getByLabel("Name").fill(mockAccommodation.name);
    await page.getByLabel("Address").fill(mockAccommodation.address);
    await page.getByLabel("Type").selectOption(mockAccommodation.type);

    // expect submit button to still be disabled
    // note: as we trigger validation on blur,
    // button doesn't enable until we blur a field
    await expect(nextStepBtn).toBeDisabled();

    // blur the name field to trigger validation
    await page.getByLabel("Name").focus();
    await page.getByLabel("Name").blur();

    // expect submit button to be enabled
    await expect(nextStepBtn).toBeEnabled();

    // submit the form
    await nextStepBtn.click();
  });

  test("Owner form should be able to fill in and submit", async () => {
    const page = sharedPage;

    // expect to spawn on the Owner Form step
    await expect(page.getByText("Owner")).toBeVisible();

    // expect submit button to be disabled
    const nextStepBtn = page.getByRole("button", { name: "Next" });
    await expect(nextStepBtn).toBeDisabled();

    // fill in the owner form
    await page.getByLabel("Name").fill(mockOwner.name);
    await page.getByLabel("Email").fill(mockOwner.email);

    // expect submit button to still be disabled
    // note: validations occur on blur, still no blur event happened
    await expect(nextStepBtn).toBeDisabled();

    // blur the name field to trigger validation
    await page.getByLabel("Name").focus();
    await page.getByLabel("Name").blur();

    // expect submit button to become enabled
    await expect(nextStepBtn).toBeEnabled();

    // submit the form
    await nextStepBtn.click();
  });

  test("Confirmation step should show the correct data", async () => {
    const page = sharedPage;

    // expect to spawn on the Summary step
    await expect(page.getByText("Summary")).toBeVisible();

    // expect the accommodation data to be shown
    await expect(page.getByText(mockAccommodation.name)).toBeVisible();
    await expect(page.getByText(mockAccommodation.address)).toBeVisible();
    await expect(page.getByText(mockAccommodation.type)).toBeVisible();

    // expect the owner data to be shown
    await expect(page.getByText(mockOwner.name)).toBeVisible();
    await expect(page.getByText(mockOwner.email)).toBeVisible();

    // expect submit button to be enabled
    const submitBtn = page.getByRole("button", { name: "Submit" });
    await expect(submitBtn).toBeEnabled();

    // submit the form
    await submitBtn.click();
  });

  test("Feedback step should show success / error message", async () => {
    const page = sharedPage;

    // expect to spawn on the Feedback step
    await expect(page.getByTestId("feedback")).toBeVisible();

    // expect the feedback message to be shown
    const feedbackText = await page.getByTestId("feedback").innerText();
    expect(feedbackText.toLowerCase()).toMatch(/success|error/);
  });
});
