import { useEffect, useState } from "react";

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

  return (
    <>
      <div>
        {products.map((product, key) => {
          return (
            <div>
              <li>{product.id}</li>
              <li>{product.title}</li>
              <li>{product.size}</li>
              <li>{product.price}</li>
            </div>
          );
        })}
      </div>
    </>
  );
}
