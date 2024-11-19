function List() {
  const fruit = [
    { id: 1, name: "Banana", calories: 95 },
    { id: 2, name: "Apple", calories: 105 },
    { id: 3, name: "Orage", calories: 68 },
    { id: 4, name: "Grape", calories: 60 },
    { id: 5, name: "Mango", calories: 50 },
    { id: 6, name: "Pineapple", calories: 112 },
  ];
  const fruitItems = fruit.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return <ol>{fruitItems}</ol>;
}

export default List;
