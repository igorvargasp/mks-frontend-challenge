import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 285px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 2px 8px 0px #00000022;
  align-items: center;
  justify-content: space-between;
`;

export const Div = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 90%;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  outline: none;
  background: #0f52ba;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  border-radius: 0px 0px 8px 8px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: #2c2c2c;
`;

export const Description = styled.span`
  diplay: block;
  position: absolute;
  top: 40px;
  left: 1px;
  font-weight: 300;
  font-size: 10px;
  color: #2c2c2c;
`;

export const Price = styled.button`
  background: #373737;
  width: 40%;
  height: 26px;
  border: none;
  outline: none;
  color: white;
  padding: 0.5rem;
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;
