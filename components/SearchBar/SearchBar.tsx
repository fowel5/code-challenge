"use client";
import { useState } from "react";
import * as S from "./SearchBar.styled";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const [slug, setSlug] = useState("");
  const { push } = useRouter();

  return (
    <S.SearchBarContainer>
      <S.SearchInput
        value={slug}
        onChange={(newSlug) => setSlug(newSlug.target.value)}
        placeholder="Buscar..."
      ></S.SearchInput>
      <S.SearchButton onClick={() => push(`/search/${slug}`)}>
        Buscar
      </S.SearchButton>
    </S.SearchBarContainer>
  );
}

export default SearchBar;
