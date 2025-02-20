import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./page";
import { fetchRepositories } from "~/fetch-helpers/fetchGraphQl";
import { mockQuery, mockRepo } from "~/test-utils/query.mock";
import { redirectToMainPage } from "~/utils/page.utils";

jest.mock("~/utils/page.utils");
jest.mock("~/fetch-helpers/fetchGraphQl", () => {
  return {
    fetchRepositories: jest.fn(),
  };
});
jest.mock("next/navigation", () => {
  return {
    useRouter: jest.fn(() => ({
      push: jest.fn(),
    })),
  };
});

const fetchRepositoriesMock = jest.mocked(fetchRepositories);
const redirectMock = jest.mocked(redirectToMainPage);

const mockedParams = Promise.resolve({
  slug: "react",
});

describe("The repo search site", () => {
  it("executes a redirect to the main page", async () => {
    fetchRepositoriesMock.mockResolvedValue([]);
    render(await Page({ params: mockedParams }));

    expect(fetchRepositoriesMock).toHaveBeenCalledWith(mockQuery);
    expect(redirectMock).toHaveBeenCalled();
  });

  it("renders the cards correctly", async () => {
    fetchRepositoriesMock.mockResolvedValue(mockRepo);

    render(await Page({ params: mockedParams }));
    expect(screen.getByText("nextjs-starter")).toBeInTheDocument();
    expect(screen.getByText("apollo-client-example")).toBeInTheDocument();
    expect(screen.getByText("react-ui-library")).toBeInTheDocument();
  });
});
