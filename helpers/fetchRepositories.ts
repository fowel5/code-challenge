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
): Promise<{ pageInfo: PageInfo; issues: Issue[] }> {
  try {
    const apolloClient = createApolloClient();
    const { data } = await apolloClient.query<IssueSearchResult>({
      query: searchQuery,
    });

    return {
      pageInfo: data.search.pageInfo,
      issues: data.search.edges.map((edge) => edge.node),
    };
  } catch (error) {
    return { pageInfo: { endCursor: null, hasNextPage: false }, issues: [] };
  }
}
