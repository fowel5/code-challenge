import { gql } from "@apollo/client";

export const mockQuery = gql`
  query {
    search(query: "react in:name", type: REPOSITORY, first: 10) {
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
export const mockRepo: Repository[] = [
  {
    name: "nextjs-starter",
    description: "A starter template for Next.js projects",
    owner: {
      login: "devUser123",
    },
  },
  {
    name: "apollo-client-example",
    description: "An example project using Apollo Client with GraphQL",
    owner: {
      login: "graphqlGuru",
    },
  },
  {
    name: "react-ui-library",
    description: "A reusable component library for React applications",
    owner: {
      login: "frontendWizard",
    },
  },
];
