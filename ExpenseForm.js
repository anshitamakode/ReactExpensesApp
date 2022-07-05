import React, {useState} from 'react';
import "./ExpenseForm.css";
const ExpenseForm = (props) => {

  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  //ANOTHER APPROACH
  const [inputValues, setInputValues] = useState({
    enteredTitle : '',
    enteredAmount : '',
    enteredDate : ''
  });

  const titleChangeHandler = (event) =>{
    //setEnteredTitle(event.target.value);

    //ANOTHER APPROACH
    // setInputValues({
    //   ...inputValues,
    //   enteredTitle : event.target.value
    // });

    //ANOTHER APPROACH
    //To ensure that update should be done on latest state snapshot, then pass an arrow function () => {} in setInputValues function
    //that arrow function automatically get called by React and return the latest previous state.
    setInputValues((prevState) => {
      return {
      ...prevState,
      enteredTitle : event.target.value
      }
    });
  };
  const amountChangeHandler = (event) =>{
    //setEnteredAmount(event.target.value);

    //ANOTHER APPROACH
    // setInputValues({
    //   ...inputValues,
    //   enteredAmount : event.target.value
    // });

    //ANOTHER APPROACH
    setInputValues((prevState) => {
      return {
      ...prevState,
      enteredAmount : event.target.value
      }
    });
  };
  const dateChangeHandler = (event) =>{
    //setEnteredDate(event.target.value);

    //ANOTHER APPROACH
    // setInputValues({
    //   ...inputValues,
    //   enteredDate : event.target.value
    // });

    //ANOTHER APPROACH
    setInputValues((prevState) => {
      return {
      ...prevState,
      enteredDate : event.target.value
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // to prevent reload of page on click of submit button

    //ANOTHER APPROACH
    // const expenseData = {
    //   title : enteredTitle,
    //   amount : enteredAmount,
    //   date : new Date(enteredDate)
    // };

    //ANOTHER APPROACH
    const expenseData = {
      title : inputValues.enteredTitle,
      amount : inputValues.enteredAmount,
      date : new Date(inputValues.enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    //For two way binding --> for emptying the elements after on click of submit
    setInputValues({
      enteredTitle : '',
      enteredAmount : '',
      enteredDate : ''
    });
  };
//In JSX value is used inside input for two way binding --> for emptying the elements after on click of submit
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputValues.enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={inputValues.enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2023-12-31" value={inputValues.enteredAmount} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
