import React from "react";
import {
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
} from "./style";
import { IoCloseCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Product, addItem, clearItem, removeItem } from "@/store/sliceCart";
import { useDispatch } from "react-redux";

export interface SidebarProps {
  setCartClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setCartClick }: SidebarProps) => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <Header>
          <h1>
            Carrinho <br />
            de compras
          </h1>
          <IoCloseCircle
            style={{
              width: "40px",
              height: "40px",
              fill: "black",
              cursor: "pointer",
            }}
            onClick={() => setCartClick(false)}
          />
        </Header>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          {cart.items.map((item: Product, index: number) => (
            <CartItems>
              <img src={item.photo} width={46} height={57} />
              <Title>{item.name}</Title>
              <div
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
                  onClick={() => dispatch(clearItem(item))}
                />
                <Qtd>Qtd</Qtd>
                <Substraction onClick={() => dispatch(removeItem(item))}>
                  -
                </Substraction>
                <span style={{ fontWeight: "700", fontSize: "8px" }}>
                  {item.quantity}
                </span>
                <AddUp onClick={() => dispatch(addItem(item))}>+</AddUp>
              </div>
              <Price>R$ {item.price}</Price>
            </CartItems>
          ))}
        </div>
      </div>

      <Footer>
        <Paragraph>
          Total:{" "}
          <span style={{ paddingLeft: "13rem" }}>R$ {cart.totalAmount}</span>
        </Paragraph>
        <Button>Finalizar compra</Button>
      </Footer>
    </Container>
  );
};

export default Sidebar;
