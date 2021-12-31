import ExpenseItem from './components/ExpenseItem';
// import './App.css';

function App() {

  let expenseDate = new Date(2021,12,28);
  let expenseTitle = "school Fee"
  let expenseAmount = 300;
  return (
  <div>
    <h2>Let's start</h2>
    <ExpenseItem></ExpenseItem>
  </div>
  );
}

export default App;
