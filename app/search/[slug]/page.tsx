import { Card } from "~/components/Card/Card";
import {
  PageWrapper,
  SearchPageWrapper,
} from "~/components/PageWrapper/PageWrapper.styled";
import { fetchRepositories } from "~/fetch-helpers/fetchGraphQl";
import { createRepositorySearchQuery } from "~/utils/graphql.utils";
import { redirectToMainPage } from "~/utils/page.utils";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slugToSearch = (await params).slug;
  const searchQuery = createRepositorySearchQuery({ slugToSearch });

  const repositories = await fetchRepositories(searchQuery);

  if (repositories.length === 0) {
    redirectToMainPage();
  }

  return (
    <SearchPageWrapper>
      {repositories.map((repo, index) => (
        <Card
          key={index}
          description={repo.description}
          name={repo.name}
          owner={repo.owner.login}
        />
      ))}
    </SearchPageWrapper>
  );
}
