import { isDocumentNode } from "@apollo/client/utilities";
import { Issue } from "~/components/Issue/Issue";
import { IssuePageWrapper } from "~/components/PageWrapper/PageWrapper.styled";
import { PaginationBlock } from "~/components/PaginationBlock/PaginationBlock";
import {
  fetchIssuesOfRepository,
  fetchPageInfoOfIssuesOfRepository,
} from "~/helpers/fetchRepositories";
import {
  createIssuesSearchQueryOnRepo,
  createPageInfoQueryToSearchIssues,
} from "~/lib/graphql.utils";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ repo: string; term: string }>;
  searchParams: { [key: string]: number | undefined };
}) {
  const resolvedParams = await params;
  const repo = decodeURIComponent(resolvedParams.repo);
  const term = resolvedParams.term;

  const resolvedSearchParams = await searchParams;
  // somehow page could not infer the number type without the Number()
  const page = Number(resolvedSearchParams?.page || 1);

  const cursorQuery =
    page === 1
      ? ""
      : createPageInfoQueryToSearchIssues({
          repoToSearch: repo,
          wordToSearch: term,
          size: (page - 1) * 10,
        });

  const pageInfo = isDocumentNode(cursorQuery)
    ? await fetchPageInfoOfIssuesOfRepository(cursorQuery)
    : {
        endCursor: "",
        hasNextPage: true,
        hasPreviousPage: false,
      };

  const query = createIssuesSearchQueryOnRepo({
    repoToSearch: repo,
    wordToSearch: term,
    endCursor: pageInfo.endCursor || "",
  });

  const fetchedIssues = await fetchIssuesOfRepository(query);

  return (
    <IssuePageWrapper>
      {fetchedIssues.map((issue, index) => (
        <Issue issue={issue} key={index} />
      ))}
      <PaginationBlock pageNumber={page} pageInfo={pageInfo} />
    </IssuePageWrapper>
  );
}
