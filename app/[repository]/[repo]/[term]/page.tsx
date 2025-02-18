import { PageWrapper } from "~/components/PageWrapper/PageWrapper.styled";
import SearchBar from "~/components/SearchBar/SearchBar";

export default async function Page({
  params,
}: {
  params: Promise<{ repo: string; term: string }>;
}) {
  const resolvedSearchParams = await params;
  const repo = decodeURIComponent(resolvedSearchParams.repo);
  const term = resolvedSearchParams.term;

  return <PageWrapper>{repo.concat(term)}</PageWrapper>;
}
