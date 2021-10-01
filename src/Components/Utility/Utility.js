const db = {};
const addToDb = (item) => {
  const db = getDb();
  if (item in db) {
    db[item] = db[item] + 1;
  } else {
    db[item] = 1;
  }

  saveToDb(db);
};
const dbRemove = (item) => {
  const db = getDb();
  delete db[item];
  saveToDb(db);
};
const getDb = () => {
  let savedDb = localStorage.getItem("cart");
  savedDb = JSON.parse(savedDb);
  return savedDb;
};
const saveToDb = (item) => {
  const itemJson = JSON.stringify(item);
  localStorage.setItem("cart", itemJson);
};
