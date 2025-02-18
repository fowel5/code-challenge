import { PageWrapper } from "~/components/PageWrapper/PageWrapper.styled";
import { SearchBar } from "~/components/SearchBar/SearchBar";

export default async function Page() {
  return (
    <PageWrapper>
      <SearchBar path="search" placeholderText="Buscar..." />
    </PageWrapper>
  );
}
