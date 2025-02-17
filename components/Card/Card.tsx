"use client";
import * as S from "./Card.styled";
import { useRouter } from "next/navigation";

type CardProps = {
  name: string;
  description: string;
  owner: string;
};

export function Card({ name, description, owner }: CardProps) {
  const { push } = useRouter();

  return (
    <S.CardWrapper>
      <S.TextField>{name}</S.TextField>
      <S.TextField>{description}</S.TextField>
      <S.TextField>By {owner}</S.TextField>
      <S.CardButton
        onClick={() => push(`/repository?name=${name}&owner=${owner}`)}
      >
        Go To Issues
      </S.CardButton>
    </S.CardWrapper>
  );
}
