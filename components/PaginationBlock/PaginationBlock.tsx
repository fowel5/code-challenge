import * as S from "./PaginationBlock.styled";
type PaginationBlockProps = {
  pageInfo: PageInfo;
  pageNumber: number;
};

export function PaginationBlock({
  pageInfo,
  pageNumber,
}: PaginationBlockProps) {
  const nextPageHref = `?page=${pageNumber + 1}`;
  const previousPageHref = `?page=${pageNumber - 1}`;

  return (
    <S.PaginationBlockWrapper>
      <S.PaginationLink
        href={previousPageHref}
        isdisabled={String(pageNumber === 1)}
      >
        Previous page
      </S.PaginationLink>
      <S.ActualPage>{pageNumber}</S.ActualPage>
      <S.PaginationLink
        href={nextPageHref}
        isdisabled={String(!pageInfo.hasNextPage)}
      >
        {" "}
        Next Page
      </S.PaginationLink>
    </S.PaginationBlockWrapper>
  );
}
