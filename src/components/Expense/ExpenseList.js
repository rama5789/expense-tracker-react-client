import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ExpenseContext } from '../contexts';
import Loader from '../UI/Loader';
import { ExpenseAPI } from '../../api';
import { compareValues } from '../../shared/util';

import './ExpenseList.css';

const ExpenseList = () => {
  const [loading, expenses, setExpenses] = useContext(ExpenseContext);

  const removeExpense = async (expenseId) => {
    console.log('\nExpenseList.removeExpense() -->');

    const resData = await ExpenseAPI.deleteById(expenseId);
    console.log('deleteById__resData: ', resData);

    const updateStates = () => {
      if (resData.data && resData.data.status) {
        setExpenses((prevExps) =>
          prevExps.filter((expense) => expense.id !== expenseId)
        );
      }
    };

    updateStates();
    /* setTimeout(() => {
      updateStates();
    }, 2000); // load after 2 secs */
  };

  // default sort
  expenses.sort(compareValues('updatedAt', 'desc'));

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <table id="expenses" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={expense.key}>
                <td>{++index}</td>
                <td>
                  <Link to={'/expenses/' + expense.id}>{expense.id}</Link>
                </td>
                <td>{expense.date}</td>
                <td>{expense.description}</td>
                <td>{expense.type}</td>
                <td>{expense.amount}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      removeExpense(expense.id);
                    }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ExpenseList;
