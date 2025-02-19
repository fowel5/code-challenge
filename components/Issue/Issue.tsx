"use client";
import { getFullDate } from "~/lib/pageHelpers";
import * as S from "./Issue.styled";
import { useState } from "react";

type IssueProps = {
  issue: Issue;
};

export function Issue({ issue }: IssueProps) {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  return (
    <S.IssueWrapper
      onClick={() => {
        setIsDropdownShown(!isDropdownShown);
      }}
    >
      <S.IssueState state={issue.state} />
      <S.IssueContent>
        <S.IssueTitle>{issue.title}</S.IssueTitle>
        <S.IssueMeta>
          <S.IssueText>
            {`Created at ${getFullDate(new Date(issue.createdAt))} `}
          </S.IssueText>
          <S.IssueText>
            {`Updated at ${getFullDate(new Date(issue.updatedAt))} `}
          </S.IssueText>
        </S.IssueMeta>
        <S.IssueCommentsCounter>
          <S.IssueText>💬 {issue.comments.edges.length} comments</S.IssueText>
        </S.IssueCommentsCounter>
      </S.IssueContent>
      <S.CommentsDropdown isdropdownshown={String(isDropdownShown)}>
        {issue.comments.edges.map((edge, index) => (
          <S.CommentTextWrapper
            key={index}
            dangerouslySetInnerHTML={{ __html: edge.node.bodyHTML }}
          />
        ))}
      </S.CommentsDropdown>
    </S.IssueWrapper>
  );
}
