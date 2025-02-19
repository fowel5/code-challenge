"use client";
import styled, { css } from "styled-components";

const getCommonPageWrapperCSS = () => css`
  max-width: 100%;
  background-color: rgba(13, 17, 23, 0.5);
`;

export const PageWrapper = styled.div`
  ${getCommonPageWrapperCSS}
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchPageWrapper = styled.div`
  ${getCommonPageWrapperCSS}
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export const IssuePageWrapper = styled.div`
  ${getCommonPageWrapperCSS}
  padding: 20px;
`;
