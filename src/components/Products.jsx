import {useEffect, useState} from "react";
import Product from "./Product";
import {
  addToLocalStorage,
  getStoredItems,
  removeFromLocalStorage,
} from "../utilities/localstorage";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/devbytemehedi/0a783b3e14c3b4a6c7b107bafcb364a9/raw/048ccc732aa4668e2549a9edf1d956e0cd6485b7/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    if (products.length) {
      const storedItemsNames = getStoredItems();
      const saveditems = [];
      for (const name of storedItemsNames) {
        const product = products.find((p) => p.name === name);
        if (product) {
          saveditems.push(product);
        }
      }
      setItems(saveditems);
    }
  }, [products]);

  const add = (product) => {
    const newItem = [...items, product];
    setItems(newItem);
    addToLocalStorage(product.name);
  };

  const remove = (product) => {
    const remainingItems = items.filter((item) => item.name !== product.name);
    setItems(remainingItems);
    removeFromLocalStorage(product.name);
  };
  return (
    <>
      <h2 className="text-center text-base text-accent pb-2">
        Products: {products.length}
      </h2>
      <p className="text-center text-sm text-warning">Cart: {items.length}</p>
      <div className="w-fit min-h-fit border border-solid border-success  p-5 m-5 flex flex-wrap gap-5 rounded-xl">
        {items.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <div className="container grid grid-cols-2 lg:grid-cols-4 gap-10 place-items-center mx-auto py-10">
        {products.map((product) => (
          <Product
            remove={remove}
            add={add}
            key={product.id}
            product={product}
          ></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
