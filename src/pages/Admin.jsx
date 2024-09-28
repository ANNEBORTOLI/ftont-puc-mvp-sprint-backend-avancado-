import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Products } from "../components/Products";
import { useShoppingList } from "../contexts/ShoppingListContext";

export function Admin() {
  const { shoppingList } = useShoppingList();

  return (
    <>
      <Header shoppingList={shoppingList} />
      <Products />
      <Footer />
    </>
  );
}
