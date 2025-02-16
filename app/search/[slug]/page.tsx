import { PageWrapper } from "~/components/PageWrapper/PageWrapper.styled";
import createApolloClient from "~/lib/apolloClient";
import { createRepositorySearchQuery } from "~/lib/graphql.utils";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const slugToSearch = (await params).slug;
  const resolvedSearchParams = await searchParams;
  const endCursor = resolvedSearchParams.endCursor || "";
  const page = resolvedSearchParams.page || 1;

  const searchQuery = createRepositorySearchQuery({ slugToSearch, endCursor });

  const apolloClient = createApolloClient();
  const { data } = await apolloClient.query({ query: searchQuery });

  return <PageWrapper>{slugToSearch}</PageWrapper>;
}
