import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 486px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  padding-left: 2rem;
  color: white;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  color: white;
`;

export const Button = styled.button`
  width: 100%;
  height: 97px;
  outline: none;
  border: none;
  background: black;
  font-weight: 700;
  font-size: 28px;
  color: white;
  cursor: pointer;
`;

export const Paragraph = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: white;
  padding-left: 2rem;
`;
