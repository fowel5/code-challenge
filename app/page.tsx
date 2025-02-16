import { gql } from "@apollo/client";
import { PageWrapper } from "~/components/PageWrapper/PageWrapper.styled";
import { SearchBar } from "~/components/SearchBar/SearchBar";
import createApolloClient from "~/lib/apolloClient";

const queryExample = gql`
  query {
    search(type: REPOSITORY, query: "name:*react*", last: 100) {
      repos: edges {
        repo: node {
          ... on Repository {
            url

            allIssues: issues {
              totalCount
            }
            openIssues: issues(states: OPEN) {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export default async function Page() {
  // const apolloClient = createApolloClient();
  // const { data } = await apolloClient.query({ query: queryExample });

  return (
    <PageWrapper>
      <SearchBar />
    </PageWrapper>
  );
}
