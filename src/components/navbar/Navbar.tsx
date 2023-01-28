import React, { useEffect, useState } from "react";

import { BsCart4 } from "react-icons/bs";
import { Nav, Container, Div, H1, Span, Button, Strong } from "./style";
import { Sidebar } from "../index";
import { useSelector } from "react-redux";

function Navbar() {
  const [cartClick, setCartClick] = useState<boolean>(false);
  const cart = useSelector((state: any) => state.cart);
  console.log(cart);

  useEffect(() => {
    console.log(cartClick);
  }, [cartClick]);

  return (
    <Nav>
      <Container>
        <Div>
          <H1>MKS</H1>
          <Span>Sistemas</Span>
        </Div>
        <Button onClick={() => setCartClick(true)}>
          <BsCart4 style={{ width: "20px", height: "20px" }} />
          <Strong>{cart.items.length}</Strong>
        </Button>
      </Container>
      {cartClick ? <Sidebar setCartClick={setCartClick} /> : null}
    </Nav>
  );
}

export default Navbar;
