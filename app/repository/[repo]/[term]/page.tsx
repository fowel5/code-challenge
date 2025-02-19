import { Issue } from "~/components/Issue/Issue";
import { IssuePageWrapper } from "~/components/PageWrapper/PageWrapper.styled";
import { PaginationBlock } from "~/components/PaginationBlock/PaginationBlock";
import {
  fetchIssuesOfRepository,
  fetchPageInfoAdvanced,
} from "~/helpers/fetchRepositories";
import { createIssuesSearchQueryOnRepo } from "~/lib/graphql.utils";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ repo: string; term: string }>;
  searchParams: Promise<{ [key: string]: number | undefined }>;
}) {
  const resolvedParams = await params;
  const repo = decodeURIComponent(resolvedParams.repo);
  const term = resolvedParams.term;

  const resolvedSearchParams = await searchParams;
  // somehow page could not infer the number type without the Number()
  const page = Number(resolvedSearchParams?.page || 1);

  // The max records on the search function is 100, so we have to iterate, fetching the last cursor
  // in 100er-chunks, in order to be able to visit over page n°11.
  const pageInfoAdvancedCursor =
    page === 1
      ? { endCursor: null, hasNextPage: true }
      : await fetchPageInfoAdvanced({
          repoToSearch: repo,
          wordToSearch: term,
          size: (page - 1) * 10,
        });

  const query = createIssuesSearchQueryOnRepo({
    repoToSearch: repo,
    wordToSearch: term,
    endCursor: pageInfoAdvancedCursor.endCursor || "",
  });

  const fetchedIssues = await fetchIssuesOfRepository(query);

  return (
    <IssuePageWrapper>
      {fetchedIssues.map((issue, index) => (
        <Issue issue={issue} key={index} />
      ))}
      <PaginationBlock pageNumber={page} pageInfo={pageInfoAdvancedCursor} />
    </IssuePageWrapper>
  );
}
