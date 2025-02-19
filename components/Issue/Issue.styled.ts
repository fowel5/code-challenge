"use client";

import styled from "styled-components";

export const IssueWrapper = styled.div`
  display: block;
  align-items: flex-start;
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 10px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f6f8fa;
  }
`;

export const IssueState = styled.div<{ state: "OPEN" | "CLOSED" }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
  margin-top: 4px;
  margin-bottom: 8px;

  background-color: ${({ state }) =>
    state === "OPEN" ? "#28a745" : "#d73a49;"};
`;

export const IssueContent = styled.div`
  flex-grow: 1;
`;

export const IssueTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const IssueMeta = styled.div`
  padding: 4px 0;
`;

export const IssueText = styled.span``;

export const IssueCommentsCounter = styled.div`
  font-size: 12px;
  color: #6a737d;
`;

export const CommentsDropdown = styled.div<{ isdropdownshown: string }>`
  display: ${({ isdropdownshown }) =>
    isdropdownshown === "true" ? "block" : "none"};
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #e1e4e8;
  background-color: #fafbfc;
`;

export const CommentTextWrapper = styled.div`
  margin-bottom: 10px;
  padding: 8px;
  background-color: #ffffff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
`;
