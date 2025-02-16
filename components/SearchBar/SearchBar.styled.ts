"use client";

import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  background: #ffffff;
  padding: 5px 10px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
  width: 250px;
`;

export const SearchButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
`;
