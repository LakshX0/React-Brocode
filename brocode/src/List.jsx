function List() {
  const fruit = ["Banana", "Apple", "Orage", "Grape", "Mango", "Pineapple"];
  const fruitItems = fruit.map((fruit) => <li>{fruit}</li>);

  return <ol>{fruitItems}</ol>;
}

export default List;
