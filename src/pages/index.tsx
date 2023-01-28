import { Cart, Footer, Navbar, Products } from "../components/index";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Products />

      <Footer />
    </main>
  );
}
