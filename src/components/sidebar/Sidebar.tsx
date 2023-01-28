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

export interface SidebarProps {
  setCartClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setCartClick }: SidebarProps) => {
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
          }}
        >
          <CartItems>
            <img src="cat.jpg" width={46} height={57} />
            <Title>titulo</Title>
            <div
              style={{
                width: "60px",
                border: "0.3px solid #BFBFBF",
                boxShadow: "-5px 0px 6px rgba(0, 0, 0, 0.13)",
                borderRadius: "4px",
                outline: "none",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                position: "relative",
                height: "22px",
              }}
            >
              <Qtd>Qtd</Qtd>
              <Substraction>-</Substraction>
              <span style={{ fontWeight: "700", fontSize: "8px" }}>1</span>
              <AddUp> {""} +</AddUp>
            </div>
            <Price>R$ 798</Price>
          </CartItems>
        </div>
      </div>

      <Footer>
        <Paragraph>
          Total: <span style={{ paddingLeft: "13rem" }}>RS$798</span>
        </Paragraph>
        <Button>Finalizar compra</Button>
      </Footer>
    </Container>
  );
};

export default Sidebar;
