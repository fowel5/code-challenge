import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./page";

jest.mock("next/navigation", () => {
  return {
    useRouter: jest.fn(() => ({
      push: jest.fn(),
    })),
  };
});

it("renders a searchbar", async () => {
  render(await Page());
  expect(screen.getByTestId("searchbar")).toBeInTheDocument();
});
