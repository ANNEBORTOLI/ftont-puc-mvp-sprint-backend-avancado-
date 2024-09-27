import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";

import styles from "./ProductCard.module.css";

export function ProductCard({ item, onAddItem }) {
  return (
    <div className={styles.cardWrapper}>
      <Link to={{ pathname: `/product/ ${item.id}` }} state={{ item: item }}>
        <img src={item.image} alt={item.title} />
      </Link>
      <div className={styles.cardTitle}>
        <p>{item.title}</p>
      </div>

      <div className={styles.cardBotton}>
        <span className={styles.price}>R$ {item.price}</span>
        <Link className={styles.btnAdd} onClick={() => onAddItem(item)}>
          ADICIONAR <ShoppingCart size={18} />
        </Link>
      </div>
    </div>
  );
}
