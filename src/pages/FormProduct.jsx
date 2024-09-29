import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./FormProduct.module.css";
import { useShoppingList } from "../contexts/ShoppingListContext";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function FormProduct() {
  const { shoppingList } = useShoppingList();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: "",
    title: "",
    size: "",
    price: ""
  });
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const action = params.get("action");
  const submitLabel = action == "edit" ? "Editar" : "Adicionar";
  const id = params.get("id");

  useEffect(() => {
    if (action == "edit") {
      let url = `http://localhost:5000/product?id=${id}`;
      fetch(url, {
        method: "GET"
      })
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.error("Erro: ", error);
        });
    }
  }, []);

  const isNumeric = (string) => string == Number.parseFloat(string);

  const validate = () => {
    return (
      document.getElementById("title").value != "" &&
      document.getElementById("size").value != "" &&
      document.getElementById("price").value != "" &&
      isNumeric(document.getElementById("price").value)
    );
  };

  const montaFormData = () => {
    let formData = new URLSearchParams();

    if (action == "edit") {
      formData.append("id", id);
    }

    formData.append("title", document.getElementById("title").value);
    formData.append("size", document.getElementById("size").value);
    formData.append("price", document.getElementById("price").value);
    formData.append("description", "");

    return formData;
  };

  const handleSubmit = () => {
    if (!validate()) {
      document.getElementById("mensagem").innerHTML =
        "Todos os campos são obrigatórios! Preço deve ser numérico!";
    } else {
      let formData = montaFormData();

      let url = "http://localhost:5000/product";
      let metodo = action == "edit" ? "PUT" : "POST";

      fetch(url, {
        method: metodo,
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          navigate("/admin");
        })
        .catch((error) => {
          console.error("Erro: ", error);
        });
    }
  };

  return (
    <>
      <Header shoppingList={shoppingList} />
      <form className={styles.form} id="formulario">
        <div className={styles.formGroup}>
          <label htmlFor="title">Nome:</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={product.title}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="size">Tamanho:</label>
          <input
            type="text"
            name="size"
            id="size"
            defaultValue={product.size}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Preço:</label>
          <input
            type="text"
            name="price"
            id="price"
            defaultValue={product.price}
            placeholder="0.00"
          />
        </div>

        <div className={styles.submitButton} onClick={handleSubmit}>
          {submitLabel}
        </div>
        <div className={styles.message} id="mensagem"></div>
      </form>
      <Footer />
    </>
  );
}
