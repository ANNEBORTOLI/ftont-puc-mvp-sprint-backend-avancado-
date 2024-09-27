import React, { createContext, useState, useContext } from "react";

const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);

  const handleAddItemToShoppingList = (item) => {
    setShoppingList((prevList) => {
      const existingItem = prevList.find((product) => product.id === item.id);
      if (existingItem) {
        alert(`${item.title} adicionado ao seu carrinho!`);
        return prevList.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        alert(`${item.title} adicionado ao seu carrinho!`);
        return [...prevList, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveItemFromShoppingList = (id) => {
    setShoppingList((prevList) => prevList.filter((item) => item.id !== id));
    alert(`Item removido do carrinho!`);
  };

  const handleIncrementItemQuantity = (id) => {
    setShoppingList((prevList) =>
      prevList.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrementItemFromShoppingList = (id) => {
    setShoppingList((prevList) =>
      prevList.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        handleAddItemToShoppingList,
        handleRemoveItemFromShoppingList,
        handleIncrementItemQuantity,
        handleDecrementItemFromShoppingList
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingList = () => useContext(ShoppingListContext);
