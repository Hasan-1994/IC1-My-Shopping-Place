import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./products/data.json";
import { useState } from "react";

function App() {
    const { products } = data;
    const [cardItem, setCartItem] = useState([]);
    const onAdd = (product) => {
        const exist = cardItem.find((x) => x.id === product.id);
        if (exist) {
            setCartItem(
                cardItem.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItem([...cardItem, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cardItem.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItem(cardItem.filter((x) => x.id !== product.id));
        } else {
            setCartItem(
                cardItem.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    return (
        <div className="App">
            <Header countCardItems={cardItem.length}></Header>
            <div className="row">
                <Main
                    onRemove={onRemove}
                    onAdd={onAdd}
                    products={products}
                ></Main>
                <Basket
                    onRemove={onRemove}
                    onAdd={onAdd}
                    cardItem={cardItem}
                ></Basket>
            </div>
        </div>
    );
}

export default App;
