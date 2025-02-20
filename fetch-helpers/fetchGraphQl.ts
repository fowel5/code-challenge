import { DocumentNode } from "graphql";
import createApolloClient from "~/lib/apolloClient";
import { createPageInfoQueryToSearchIssues } from "~/utils/graphql.utils";

export async function fetchRepositories(searchQuery: DocumentNode) {
  try {
    const apolloClient = createApolloClient();
    const { data } = await apolloClient.query<RepoSearchResult>({
      query: searchQuery,
    });

    return data.search.edges.map((edge) => edge.node);
  } catch (error) {
    return [];
  }
}

export async function fetchIssuesOfRepository(
  searchQuery: DocumentNode
): Promise<Issue[]> {
  try {
    const apolloClient = createApolloClient();
    const { data } = await apolloClient.query<IssueSearchResult>({
      query: searchQuery,
    });

    return data.search.edges.map((edge) => edge.node);
  } catch (error) {
    return [];
  }
}

export async function fetchPageInfoOfIssuesOfRepository(
  searchQuery: DocumentNode
): Promise<PageInfo> {
  try {
    const apolloClient = createApolloClient();
    const { data } = await apolloClient.query<PageInfoSearchResult>({
      query: searchQuery,
    });

    return data.search.pageInfo;
  } catch (error) {
    return {
      endCursor: null,
      hasNextPage: false,
    };
  }
}

export async function fetchPageInfoAdvanced({
  repoToSearch,
  wordToSearch,
  size,
}: {
  repoToSearch: string;
  wordToSearch: string;
  size: number;
}) {
  let counter = 0;
  let cursorReference = "";

  while (size > 100) {
    counter += 100;
    const query = createPageInfoQueryToSearchIssues({
      repoToSearch,
      wordToSearch,
      size: counter,
      cursor: cursorReference,
    });
    const innerPageInfo = await fetchPageInfoOfIssuesOfRepository(query);
    cursorReference = innerPageInfo.endCursor || "";
    size -= 100;
  }

  const lastQuery = createPageInfoQueryToSearchIssues({
    repoToSearch,
    wordToSearch,
    size,
    cursor: cursorReference,
  });

  return await fetchPageInfoOfIssuesOfRepository(lastQuery);
}
