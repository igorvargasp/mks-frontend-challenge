import React from "react";
import { Container, Header, Footer, Button, Paragraph, Wrapper } from "./style";
import { IoCloseCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Product } from "@/store/sliceCart";
import Cart from "../cart/Cart";

export interface SidebarProps {
  setCartClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setCartClick }: SidebarProps) => {
  const cart = useSelector((state: any) => state.cart);

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

        <Wrapper
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
            <Cart
              key={index}
              id={item.id}
              name={item.name}
              brand={item.brand}
              description={item.description}
              photo={item.photo}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </Wrapper>
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
