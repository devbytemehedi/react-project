const getStoredItems = () => {
  try {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  } catch (error) {
    console.error("Error retrieving stored items:", error);
    return [];
  }
};

const saveToLocalStorage = (items) => {
  const itemsStringified = JSON.stringify(items);
  localStorage.setItem("items", itemsStringified);
};

const addToLocalStorage = (item) => {
  const items = getStoredItems();
  items.push(item);
  saveToLocalStorage(items);
};

const removeFromLocalStorage = (productName) => {
  const storedItems = getStoredItems();
  const remaining = storedItems.filter((name) => name !== productName);
  saveToLocalStorage(remaining);
};
export {addToLocalStorage, getStoredItems, removeFromLocalStorage};
