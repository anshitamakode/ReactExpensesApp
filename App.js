import NewComponentExpenses from "./component/NewComponentExpenses.js";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 750,
      date: new Date(2022, 1, 28),
    },
    { id: "e2", title: "Vegetables", amount: 400, date: new Date(2022, 1, 29) },
    {
      id: "e3",
      title: "Electronics",
      amount: 220,
      date: new Date(2022, 1, 30),
    },
    {
      id: "e4",
      title: "Dresses",
      amount: 450,
      date: new Date(2022, 1, 31),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewComponentExpenses items={expenses}/>
    </div>
  );
}

export default App;
