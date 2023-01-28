import styled from "styled-components";

const Container = styled.div`
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  padding-left: 2rem;
  color: white;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  color: white;
`;

const Button = styled.button`
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

const Paragraph = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: white;
  padding-left: 2rem;
`;

const CartItems = styled.div`
  margin-top: 1rem;

  width: 85%;
  height: 80px;
  background: #ffffff;
  box-shadow: -2px 2px 10px 0px #0000000d;
  border-radius: 8px;
  align-items: center;
  display: grid;
  grid-template-columns: 5rem 8rem 5.5rem 5rem;
  padding-left: 2rem;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const Qtd = styled.span`
  font-size: 10px;
  font-weight: 400;
  position: absolute;
  bottom: 1.5rem;
  left: 0rem;
`;

const Substraction = styled.div`
  border-right: 0.2px solid #bfbfbf;
  padding-right: 0.3rem;
  height: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const AddUp = styled.div`
  border-left: 0.2px solid #bfbfbf;
  padding-left: 0.3rem;
  height: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export {
  Container,
  Header,
  Footer,
  Button,
  Paragraph,
  CartItems,
  Title,
  Price,
  Qtd,
  Substraction,
  AddUp,
};
