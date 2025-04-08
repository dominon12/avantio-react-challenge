import { describe, expect, it } from "vitest";

import ownerSchema from "../owner";
import mockOwner from "src/tests/mock-data/mock-owner";

describe("Owner schema", () => {
  it("should accept valid owner data", async () => {
    const owner = mockOwner;

    await expect(ownerSchema.validate(owner)).resolves.toEqual(owner);
  });

  it("fails if email doesn't contain '@' character", async () => {
    const owner = { ...mockOwner, email: "incorrect email" };

    await expect(ownerSchema.validate(owner)).rejects.toThrow(
      "Email must be a valid email",
    );
  });

  it("allows phone to be empty", async () => {
    const owner = { ...mockOwner, phone: undefined };

    await expect(ownerSchema.validate(owner)).resolves.toEqual(owner);
  });

  it("doesn't allow phone to contain more than 9 digits", async () => {
    const owner = { ...mockOwner, phone: 1234567890 };

    await expect(ownerSchema.validate(owner)).rejects.toThrow(
      "Phone can contain up to 9 digits",
    );
  });
});
