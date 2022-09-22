import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar from "../components/SearchBar";

const mockedSubmitFunc = jest.fn((e) => e.preventDefault());

test('search initializes with "react"', () => {
  render(<SearchBar topic="react" handleSubmit={mockedSubmitFunc} />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toHaveValue("react");
});

test("test form submit", () => {
  render(<SearchBar topic="react" handleSubmit={mockedSubmitFunc} />);
  const inputElement = screen.getByRole("textbox");
  userEvent.type(inputElement, "react{enter}");
  expect(mockedSubmitFunc).toHaveBeenCalled();
});
