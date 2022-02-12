import { createContext } from "react";
import { faker } from "@faker-js/faker";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(30)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));

  return <Cart.Provider>{children}</Cart.Provider>;
};

export default Context;
