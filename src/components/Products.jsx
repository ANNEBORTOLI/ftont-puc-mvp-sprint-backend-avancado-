import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash, PencilLine } from "@phosphor-icons/react";
import styles from "./Product.module.css";

export function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let url = "http://localhost:5000/products";
    fetch(url, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Erro: ", error);
      });
  }, []);

  const removeProduct = (id) => {
    if (confirm("Remover o produto?")) {
      let url = `http://localhost:5000/product?id=${id}`;

      fetch(url, {
        method: "DELETE"
      })
        .then((response) => response.json())
        .then((data) => {
          document.getElementById(`${id}`).remove();
        })
        .catch((error) => {
          console.error("Erro: ", error);
        });
    }
  };

  const redirectToAddProduct = () => {
    navigate("/addProduct?action=add");
  };

  const redirectToEditProduct = (id) => {
    navigate(`/editProduct?action=edit&id=${id}`);
  };

  return (
    <>
      <div className={styles.container}>
        <p className={styles.listTitle}>ADMINISTRAÇÃO DE PRODUTOS</p>
        <p className={styles.addProduct} onClick={() => redirectToAddProduct()}>
          + ADICIONAR
        </p>
        <table className={styles.table}>
          <thead className={styles.header}>
            <tr>
              <th className={styles.headerCell}>Id</th>
              <th className={styles.headerCell}>Nome</th>
              <th className={styles.headerCell}>Tamanho</th>
              <th className={styles.headerCell}>Preço</th>
              <th className={styles.headerCell}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr id={product.id} className={styles.dataRow}>
                <td className={styles.dataCell}>{product.id}</td>
                <td className={styles.dataCell}>{product.title}</td>
                <td className={styles.dataCell}>{product.size}</td>
                <td className={styles.dataCell}>{product.price}</td>
                <td className={styles.dataCell}>
                  <span onClick={() => redirectToEditProduct(product.id)}>
                    <PencilLine className={styles.icon} size={24} />
                  </span>
                  <span onClick={() => removeProduct(product.id)}>
                    <Trash className={styles.icon} size={24} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
