import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 101px;
  align-items: center;
  justify-content: center;
  background: #0f52ba;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const Div = styled.div`
  color: #ffffff;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  padding-top: 0.5rem;
`;

export const Button = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
`;

export const Strong = styled.strong`
  padding-left: 10px;
  font-size: 20px;
`;
