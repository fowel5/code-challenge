import { DocumentNode } from "graphql";
import createApolloClient from "~/lib/apolloClient";
import { SearchResult } from "~/types/SearchResult";

export async function fetchRepositories(searchQuery: DocumentNode) {
  try {
    const apolloClient = createApolloClient();
    const { data } = await apolloClient.query<SearchResult>({
      query: searchQuery,
    });

    return data.search.edges.map((edge) => edge.node);
  } catch (error) {
    return [];
  }
}
