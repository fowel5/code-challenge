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
  wordToSearch,
  endCursor,
}: {
  repoToSearch: string;
  wordToSearch: string;
  endCursor: string;
}) {
  return gql`
    query {
      search(
        query: "repo:${repoToSearch} is:issue sort:updated-desc ${wordToSearch} in:title,body"
        type: ISSUE
        first: 10
        after: "${endCursor}"
      ) {
        edges {
          node {
            ... on Issue {
              title
              url
              state
              createdAt
              updatedAt
              comments(
                orderBy: { field: UPDATED_AT, direction: DESC }
                first: 10
              ) {
                edges {
                  node {
                    bodyHTML
                  }
                }
              }
              author {
                login
              }
            }
          }
        }
      }
    }
  `;
}

export function createPageInfoQueryToSearchIssues({
  repoToSearch,
  wordToSearch,
  size,
}: {
  repoToSearch: string;
  wordToSearch: string;
  size: number;
}) {
  console.log(size);
  return gql`
    query {
      search(query: "repo:${repoToSearch} is:issue sort:updated-desc ${wordToSearch} in:title,body" type: ISSUE first: ${size}) {
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  `;
}
