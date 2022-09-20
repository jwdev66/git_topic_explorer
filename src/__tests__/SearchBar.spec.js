import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar from "../components/SearchBar";

const mockedSubmitFunc = jest.fn();

test('search initializes with "react"', () => {
  render(<SearchBar topic="react" handleSubmit={mockedSubmitFunc} />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toHaveValue("react");
});

test("button click submits form", () => {
  render(<SearchBar topic="react" handleSubmit={mockedSubmitFunc} />);
  const btnElement = screen.getByRole("button");
  userEvent.click(btnElement);
  expect(mockedSubmitFunc).toHaveBeenCalled();
});
