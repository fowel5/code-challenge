import { PageWrapper } from "~/components/PageWrapper/PageWrapper.styled";
import createApolloClient from "~/lib/apolloClient";
import { createIssuesSearchQueryOnRepo } from "~/lib/graphql.utils";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const endCursor = resolvedSearchParams.endCursor || "";
  const page = resolvedSearchParams.page || 1;
  const repoName = resolvedSearchParams.name;
  const owner = resolvedSearchParams.owner;

  if (!repoName || !owner) {
    return null;
  }

  const searchQuery = createIssuesSearchQueryOnRepo({
    repoToSearch: repoName,
    endCursor,
    owner,
  });

  const apolloClient = createApolloClient();
  const { data } = await apolloClient.query({ query: searchQuery });

  return <PageWrapper>{JSON.stringify(data)}</PageWrapper>;
}
