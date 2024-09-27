import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Trash } from "@phosphor-icons/react";
import { useShoppingList } from "../contexts/ShoppingListContext";
import styles from "./Cart.module.css";

export function Cart() {
  const {
    shoppingList,
    handleRemoveItemFromShoppingList,
    handleDecrementItemFromShoppingList,
    handleIncrementItemQuantity
  } = useShoppingList();

  const handleIncrementItem = (id) => {
    handleIncrementItemQuantity(id);
  };

  const handleDecrementItem = (id) => {
    handleDecrementItemFromShoppingList(id);
  };

  const handleRemoveItem = (id) => {
    handleRemoveItemFromShoppingList(id);
  };

  return (
    <>
      <Header />
      <main className={styles.cartPageWrapper}>
        <div className={styles.pageTitle}>Seu Carrinho</div>
        <div className={styles.content}>
          <section className={styles.contentSection}>
            {shoppingList.length === 0 ? (
              <p className={styles.emptyCartMsg}>Seu carrinho está vazio.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th>-</th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingList.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className={styles.product}>
                          <img src={item.image} alt={item.title} />
                          <div className={styles.info}>
                            <div className={styles.name}>{item.title}</div>
                          </div>
                        </div>
                      </td>
                      <td>R$ {item.price}</td>
                      <td>
                        <div className={styles.qty}>
                          <button onClick={() => handleDecrementItem(item.id)}>
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleIncrementItem(item.id)}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>R$ {item.price * item.quantity}.00</td>
                      <td>
                        <button
                          className={styles.remove}
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash size={24} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
          <aside>
            <div className={styles.box}>
              <header>Resumo da compra</header>
              <div className={styles.info}>
                <div>
                  <span>Sub-total</span>
                  <span>
                    R${" "}
                    {shoppingList.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                    .00
                  </span>
                </div>
                <div>
                  <span>Frete</span>
                  <span>Gratuito</span>
                </div>
                <div>
                  <button>Adicionar cupom de desconto</button>
                </div>
              </div>
              <footer>
                <span>Total</span>
                <span>
                  R${" "}
                  {shoppingList.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                  .00
                </span>
              </footer>
            </div>
            <button>Finalizar Compra</button>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
