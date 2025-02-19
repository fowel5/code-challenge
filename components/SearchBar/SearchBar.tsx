"use client";
import { useState } from "react";
import * as S from "./SearchBar.styled";
import { useRouter } from "next/navigation";

type SearchBarProps = {
  path: string;
  placeholderText: string;
};

export function SearchBar({ path, placeholderText }: SearchBarProps) {
  const [slug, setSlug] = useState("");
  const { push } = useRouter();

  return (
    <S.SearchBarContainer data-testid="searchbar">
      <S.SearchInput
        value={slug}
        onChange={(newSlug) => setSlug(newSlug.target.value)}
        placeholder={placeholderText}
      ></S.SearchInput>
      <S.SearchButton onClick={() => push(`/${path}/${slug}`)}>
        Buscar
      </S.SearchButton>
    </S.SearchBarContainer>
  );
}

export default SearchBar;
