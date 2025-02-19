"use client";
import styled, { css } from "styled-components";

export const PaginationBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationLink = styled.a<{ isdisabled: string }>`
  color: #0366d6;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin: 0 4px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #0366d6;
    color: #ffffff;
  }

  ${({ isdisabled }) =>
    isdisabled === "true" &&
    css`
      color: #6a737d;
      pointer-events: none;
      cursor: default;
      border-color: #e1e4e8;
    `}
`;

export const ActualPage = styled.span`
  padding: 8px 16px;
  border: 1px solid #0366d6;
  border-radius: 6px;
  background-color: #0366d6;
  color: #ffffff;
  margin: 0 4px;
`;
