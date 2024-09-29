import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./FormProduct.module.css";
import { useShoppingList } from "../contexts/ShoppingListContext";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function FormProduct() {
  const { shoppingList } = useShoppingList();
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    size: "",
    price: 0
  });
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const action = params.get("action");
  const submitLabel = action == "add" ? "Adicionar" : "Editar";
  const id = params.get("id");

  useEffect(() => {
    if (action == "edit") {
      // fetch no BD
    }
  }, []);

  const handleSubmit = () => {};

  return (
    <>
      <Header shoppingList={shoppingList} />
      <form className={styles.form} id="formulario">
        <div className={styles.formGroup}>
          <label htmlFor="title">Nome:</label>
          <input type="text" name="title" id="title" value={product.nome} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="size">Tamanho:</label>
          <input type="text" name="size" id="size" value={product.size} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Preço:</label>
          <input
            type="text"
            name="price"
            id="price"
            value={product.price}
            placeholder="0.00"
          />
        </div>

        <button className={styles.submitButton} onClick={handleSubmit}>
          {submitLabel}
        </button>
      </form>
      <Footer />
    </>
  );
}
