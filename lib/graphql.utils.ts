import { gql } from "@apollo/client";

export function createRepositorySearchQuery({
  slugToSearch,
}: {
  slugToSearch: string;
}) {
  return gql`
    query {
      search(query: "${slugToSearch} in:name", type: REPOSITORY, first: 10) {
        edges {
          node {
            ... on Repository {
              name
              description
              owner {
                login
              }
            }
          }
        }
      }
    }
  `;
}

export function createIssuesSearchQueryOnRepo({
  repoToSearch,
  owner,
  endCursor,
}: {
  owner: string;
  repoToSearch: string;
  endCursor: string;
}) {
  return gql`
    query {
      repository(owner: "${owner}", name: "${repoToSearch}") {
        issues(
          first: 20
          after: "${endCursor}"
          orderBy: { field: CREATED_AT, direction: DESC }
        ) {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              title
              url
              number
              createdAt
              updatedAt
              author {
                login
              }
              labels(first: 5) {
                nodes {
                  name
                }
              }
              comments {
                totalCount
              }
            }
          }
        }
      }
    }
  `;
}
