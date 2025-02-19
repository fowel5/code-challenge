import { PageWrapper } from "~/components/PageWrapper/PageWrapper.styled";
import SearchBar from "~/components/SearchBar/SearchBar";

export default async function Page({
  params,
}: {
  params: Promise<{ repo: string }>;
}) {
  const resolvedSearchParams = await params;
  const repo = decodeURIComponent(resolvedSearchParams.repo);

  return (
    <PageWrapper>
      <SearchBar
        path={`repository/${resolvedSearchParams.repo}`}
        placeholderText={`Buscar en ${repo}`}
      />
    </PageWrapper>
  );
}
