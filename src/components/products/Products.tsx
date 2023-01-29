import React, { useEffect, useState } from "react";
import axios from "axios";

import { Section, Div } from "./style";
import Card from "../../components/Card/Card";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products",
          {
            params: {
              page: 1,
              rows: 8,
              sortBy: "id",
              orderBy: "DESC",
            },
          }
        );
        if (response) {
          const { products } = response.data;
          const items = products.map((item: any) => {
            return item;
          });

          setProducts(items);
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Div>
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              id={product.id}
              name={product.name}
              brand={product.brand}
              description={"Redesigned from scratch and completely revised"}
              photo={product.photo}
              price={product.price.replace(".00", "")}
            />
          );
        })}
      </Div>
    </Section>
  );
}
