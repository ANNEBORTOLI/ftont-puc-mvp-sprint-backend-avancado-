import { useEffect, useState } from "react";
import { Trash, PencilLine } from "@phosphor-icons/react";
import styles from "./Product.module.css";

export function Products() {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.header}>
            <tr>
              <th className={styles.headerCell}>Id</th>
              <th className={styles.headerCell}>Title</th>
              <th className={styles.headerCell}>Size</th>
              <th className={styles.headerCell}>Price</th>
              <th className={styles.headerCell}>Actions</th>
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
                  <span>
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
