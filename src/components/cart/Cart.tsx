import React from "react";
import { CartItems } from "./style";
import { IoCloseCircle } from "react-icons/io5";
import { Product, addItem, clearItem, removeItem } from "@/store/sliceCart";
import { Qtd, Substraction, AddUp, Price, Title, Container } from "./style";
import { useDispatch, useSelector } from "react-redux";

export default function Cart({
  brand,
  name,
  price,
  photo,
  quantity,
  description,
  id,
}: Product) {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  return (
    <CartItems>
      <img src={photo} width={46} height={57} />
      <Title>{name}</Title>
      <Container
        style={{
          width: "60px",
          border: "0.3px solid #BFBFBF",
          boxShadow: "-5px 0px 6px rgba(0, 0, 0, 0.13)",
          borderRadius: "4px",
          outline: "none",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          position: "relative",
          height: "22px",
        }}
      >
        <IoCloseCircle
          style={{
            width: "25px",
            height: "25px",
            fill: "black",
            cursor: "pointer",
            position: "absolute",
            bottom: "2.1rem",
            left: "9.7rem",
          }}
          onClick={() =>
            dispatch(
              clearItem({
                brand,
                name,
                price,
                photo,
                quantity,
                description,
                id,
              })
            )
          }
        />
        <Qtd>Qtd</Qtd>
        <Substraction
          onClick={() =>
            dispatch(
              removeItem({
                brand,
                name,
                price,
                photo,
                quantity,
                description,
                id,
              })
            )
          }
        >
          -
        </Substraction>
        <span style={{ fontWeight: "700", fontSize: "8px" }}>{quantity}</span>
        <AddUp
          onClick={() =>
            dispatch(
              addItem({
                brand,
                name,
                price,
                photo,
                quantity,
                description,
                id,
              })
            )
          }
        >
          +
        </AddUp>
      </Container>
      <Price>R$ {price}</Price>
    </CartItems>
  );
}
