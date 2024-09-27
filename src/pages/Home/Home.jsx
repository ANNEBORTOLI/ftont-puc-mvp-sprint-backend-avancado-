import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { SliderCarousel } from "./SliderCarousel";
import { ProductCard } from "./ProductCard";
import { Footer } from "../../components/Footer";
import { useShoppingList } from "../../contexts/ShoppingListContext";

import styles from "./Home.module.css";
import "../../global.css";

import Garrafas from "../../assets/garrafas.png";
import Socios from "../../assets/socios.png";

import products from "../../products.json";

export function Home() {
  const productsList = products.products;

  const { shoppingList, handleAddItemToShoppingList } = useShoppingList();

  return (
    <>
      <Header shoppingList={shoppingList} />
      <main className={styles.wrapper}>
        <SliderCarousel />
        <h2>Nossos Produtos</h2>
        {/* PRODUCT CARTS */}
        <div className={styles.productsContainer}>
          {productsList.map((item, i) => {
            return (
              <ProductCard
                key={i}
                item={item}
                onAddItem={handleAddItemToShoppingList}
              />
            );
          })}
        </div>
        {/* INFO CARDS */}
        <div className={styles.infoCardContainer}>
          <img src={Garrafas} alt="Imagem das garrafas de Kombucha" />
          <div className={styles.infoCardTexts}>
            <p>Produzidas em Cachoeiras de Macacu desde 2016.</p>
            <Link to={"/about"}>SAIBA MAIS</Link>
          </div>
        </div>
        <div className={styles.infoCardContainer}>
          <div className={styles.infoCardTexts}>
            <p>Sócios Fundadores.</p>
            <span>Bruno Kemp e Leo de Mattos</span>
            <Link to={"/about"}>SAIBA MAIS</Link>
          </div>
          <img
            src={Socios}
            alt="Imagem dos sócios Bruno Kemp e Leo de Mattos"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
