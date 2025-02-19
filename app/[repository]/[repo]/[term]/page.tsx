import { Issue } from "~/components/Issue/Issue";
import { IssuePageWrapper } from "~/components/PageWrapper/PageWrapper.styled";
import { fetchIssuesOfRepository } from "~/helpers/fetchRepositories";
import { createIssuesSearchQueryOnRepo } from "~/lib/graphql.utils";

export default async function Page({
  params,
}: {
  params: Promise<{ repo: string; term: string }>;
}) {
  const resolvedSearchParams = await params;
  const repo = decodeURIComponent(resolvedSearchParams.repo);
  const term = resolvedSearchParams.term;

  const query = createIssuesSearchQueryOnRepo({
    repoToSearch: repo,
    wordToSearch: term,
    endCursor: "",
  });

  const fetchedIssuesWithPageInfo = await fetchIssuesOfRepository(query);

  return (
    <IssuePageWrapper>
      {fetchedIssuesWithPageInfo.issues.map((issue, index) => (
        <Issue issue={issue} key={index} />
      ))}
    </IssuePageWrapper>
  );
}
