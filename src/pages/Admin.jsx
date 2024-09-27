import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useShoppingList } from "../contexts/ShoppingListContext";

export function Admin() {
  const { shoppingList } = useShoppingList();

  return (
    <>
      <Header shoppingList={shoppingList} />
      <Footer />
    </>
  );
}
