import React from "react";
import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Status } from "./components/useOnlineStatus";

enum TestIds {
  OnlineButton = "online-btn",
  OfflineButton = "offline-btn",
  StatusText = "status-text",
}

describe("App", () => {
  let result: RenderResult;

  beforeEach(() => {
    result = render(<App />);
  });

  it.each`
    id                       | status
    ${TestIds.OnlineButton}  | ${Status.Online}
    ${TestIds.OfflineButton} | ${Status.Offline}
  `("triggers the button and updates the state", ({ id, status }) => {
    const { getByTestId } = result;

    const btn = getByTestId(id);
    const statusText = getByTestId(TestIds.StatusText);

    userEvent.click(btn);

    expect(statusText).toHaveTextContent(status);
  });
});
