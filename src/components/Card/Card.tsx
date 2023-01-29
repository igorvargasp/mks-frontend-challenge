import React from "react";
import { Container, Div, Button, Title, Description, Price } from "./style";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/sliceCart";

export interface CardProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  brand,
  description,
  photo,
  price,
}) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <img
        src={photo}
        alt="cat"
        width={111}
        height={138}
        style={{ objectFit: "contain" }}
      />
      <Div>
        <Title>{name}</Title>
        <Price>R${price}</Price>
        <Description>{description}</Description>
      </Div>

      <Button
        onClick={() =>
          dispatch(
            addItem({
              id,
              name,
              brand,
              description,
              photo,
              price,
            })
          )
        }
      >
        <FiShoppingBag
          width={5.25}
          height={2.25}
          style={{ marginRight: "10px" }}
        />
        Comprar
      </Button>
    </Container>
  );
};

export default Card;
