import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 101px;
  align-items: center;
  justify-content: center;
  background: #0f52ba;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

const Div = styled.div`
  color: #ffffff;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
`;

const Span = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  padding-top: 0.5rem;
`;

const Button = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-weight: 700;
  cursor: pointer;
`;

const Strong = styled.strong`
  padding-left: 10px;
  font-size: 20px;
`;

export { Nav, Container, Div, H1, Span, Button, Strong };
