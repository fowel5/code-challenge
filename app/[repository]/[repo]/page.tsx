import { PageWrapper } from "~/components/PageWrapper/PageWrapper.styled";

export default async function Page({
  params,
}: {
  params: Promise<{ repo: string }>;
}) {
  const resolvedSearchParams = await params;
  const repo = decodeURIComponent(resolvedSearchParams.repo);

  return <PageWrapper>{repo}</PageWrapper>;
}
