"use client";
import styled, { css } from "styled-components";

const getCommonPageWrapperCSS = () => css`
  width: 100vw;
  max-width: 100%;
  background-color: rgba(13, 17, 23, 0.5);
`;

export const PageWrapper = styled.div`
  ${getCommonPageWrapperCSS}
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchPageWrapper = styled.div`
  ${getCommonPageWrapperCSS}
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;
