import { describe, expect, it } from "vitest";

import type Action from "../action";
import ActionType from "../action-type";
import mockAccommodation from "src/tests/mock-data/mock-accommodation";
import reducer from "../reducer";
import initialState from "../initial-state";
import FormStep from "../../types/form-step";
import mockOwner from "src/tests/mock-data/mock-owner";
import SubmissionResult from "src/modules/submission-confirmation/types/submission-result";

describe("Accommodation form reducer", () => {
  it("stores accommodation and goes to the `Owner` step", () => {
    // prepare action
    const action: Action = {
      type: ActionType.AccommodationFormSubmitted,
      payload: mockAccommodation,
    };

    // call reducer
    const result = reducer(initialState, action);

    // check result
    expect(result.step).toBe(FormStep.Owner);
    expect(result.accommodation).toEqual(mockAccommodation);

    // expect other state properties to be unchanged
    expect(result.owner).toBeUndefined();
    expect(result.result).toBeUndefined();

    // match snapshot
    expect(result).toMatchSnapshot();
  });

  it("stores owner and goes to the `Summary` step", () => {
    // prepare action
    const action: Action = {
      type: ActionType.OwnerFormSubmitted,
      payload: mockOwner,
    };

    // call reducer
    const result = reducer(initialState, action);

    // check result
    expect(result.step).toBe(FormStep.Summary);
    expect(result.owner).toEqual(mockOwner);

    // expect other state properties to be unchanged
    expect(result.accommodation).toBeUndefined();
    expect(result.result).toBeUndefined();

    // match snapshot
    expect(result).toMatchSnapshot();
  });

  it("stores result and goes to the `Confirmation` step", () => {
    const mockResult = SubmissionResult.Success;

    // prepare action
    const action: Action = {
      type: ActionType.FormSummaryAccepted,
      payload: { result: mockResult },
    };

    // call reducer
    const result = reducer(initialState, action);

    // check result
    expect(result.step).toBe(FormStep.Confirmation);
    expect(result.result).toEqual(mockResult);

    // expect other state properties to be unchanged
    expect(result.accommodation).toBeUndefined();
    expect(result.owner).toBeUndefined();

    // match snapshot
    expect(result).toMatchSnapshot();
  });

  it("returns the initial state for an unknown action type", () => {
    // prepare action
    const action = {
      type: "UNKNOWN_ACTION",
    } as unknown as Action;

    // call reducer
    const result = reducer(initialState, action);

    // check result
    expect(result).toBe(initialState);

    // match snapshot
    expect(result).toMatchSnapshot();
  });
});
