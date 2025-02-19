import { DocumentNode } from "graphql";
import createApolloClient from "~/lib/apolloClient";

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
    console.log(error);
    return {
      endCursor: null,
      hasNextPage: false,
    };
  }
}
