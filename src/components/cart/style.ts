import styled from "styled-components";

export const CartItems = styled.div`
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

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const Qtd = styled.span`
  font-size: 10px;
  font-weight: 400;
  position: absolute;
  bottom: 1.5rem;
  left: 0rem;
`;

export const Substraction = styled.div`
  border-right: 0.2px solid #bfbfbf;
  padding-right: 0.3rem;
  height: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AddUp = styled.div`
  border-left: 0.2px solid #bfbfbf;
  padding-left: 0.3rem;
  height: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 60px,
  border: 0.3px solid #BFBFBF,
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13),
  border-radius: 4px,
  outline: none,
  display: flex,
  justify-content: space-evenly,
  align-items: center,
  position: relative,
  height: 22px,
`;
