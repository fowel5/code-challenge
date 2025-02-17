"use client";
import styled from "styled-components";

export const CardWrapper = styled.div`
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  background-color: rgba(13, 17, 23, 0.75);
`;

export const CardButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const TextField = styled.p`
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
`;
