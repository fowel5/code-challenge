import { DocumentNode } from "graphql";
import createApolloClient from "~/lib/apolloClient";
import { RepoSearchResult } from "~/types/SearchResult";

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
