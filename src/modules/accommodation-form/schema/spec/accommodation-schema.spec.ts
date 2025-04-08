import { describe, expect, it } from "vitest";
import accommodationSchema from "../accommodation";
import mockAccommodation from "src/tests/mock-data/mock-accommodation";

describe("Accommodation schema", () => {
  it("should accept valid accommodation data", async () => {
    const accommodation = mockAccommodation;

    await expect(accommodationSchema.validate(accommodation)).resolves.toEqual(
      accommodation,
    );
  });

  it("fails if name contains numbers", async () => {
    const accommodation = { ...mockAccommodation, name: "Test123" };

    await expect(accommodationSchema.validate(accommodation)).rejects.toThrow(
      "Name must not contain numbers",
    );
  });

  it("allows description to be empty", async () => {
    const accommodation = { ...mockAccommodation, description: "" };

    await expect(accommodationSchema.validate(accommodation)).resolves.toEqual(
      accommodation,
    );
  });
});
