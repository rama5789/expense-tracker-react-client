import React, { useState, useEffect } from 'react';

import { ExpenseContext } from '../contexts';
import { ExpenseAPI } from '../../api';

const ExpenseProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const loadExpenseList = async () => {
      console.log('\nExpenseProvider.loadExpenseList() -->');

      setLoading(true);
      const resData = await ExpenseAPI.findAll();
      console.log('findAll__resData: ', resData);

      const updateStates = () => {
        if (resData.error) {
          setLoading(false);
          return;
        }
        if (
          resData.data &&
          resData.data.status &&
          resData.data.data &&
          resData.data.data.length
        ) {
          console.log('resData.data.data: ', resData.data.data);
          const loadedExpenses = [];
          for (const expense of resData.data.data) {
            loadedExpenses.push({
              ...expense,
              key: expense.id,
            });
          }
          setLoading(false);
          setExpenses(loadedExpenses);
          return;
        } else {
          setLoading(false);
          return;
        }
      };

      updateStates();
      /* setTimeout(() => {
          updateStates();
        }, 2000); // load after 2 secs */
    };

    loadExpenseList();
  }, []);

  return (
    <ExpenseContext.Provider value={[loading, expenses, setExpenses]}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
