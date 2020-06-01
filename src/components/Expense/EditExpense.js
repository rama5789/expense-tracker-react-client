import React, { useEffect, useState, useContext } from 'react';

import { ExpenseContext } from '../contexts';
import { ExpenseAPI } from '../../api';
import { currentDate } from '../../shared/util';
import AddEditForm from './AddEditForm';

const EditExpense = ({ history, match }) => {
  const expenseId = match.params.id;

  // const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(1);

  const [, expenses, setExpenses] = useContext(ExpenseContext);

  useEffect(() => {
    const loadExpense = async () => {
      console.log('\nEditExpense.loadExpense() -->');

      // setLoading(true);
      const resData = await ExpenseAPI.findById(expenseId);
      console.log('findById__resData: ', resData);

      const updateStates = () => {
        if (resData.data && resData.data.status && resData.data.data) {
          const fetchedExpense = resData.data.data;
          console.log('fetchedExpense: ', fetchedExpense);
          const { date, description, type, amount } = fetchedExpense;

          // setLoading(false);
          setDate(date ? date : currentDate());
          setDescription(description ? description : '');
          setType(type ? type : '');
          setAmount(amount ? amount : 1);
          return;
        }
      };

      updateStates();
    };

    if (expenseId.length !== 0) {
      loadExpense();
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const editExpense = async () => {
      console.log('\nEditExpense.editExpense() -->');

      // setLoading(true);
      const editParams = { date, description, type, amount };
      const resData = await ExpenseAPI.updateById(expenseId, editParams);
      console.log('updateById__resData: ', resData);

      const updateStates = () => {
        if (resData.data && resData.data.status && resData.data.data) {
          const updatedExpense = resData.data.data;
          console.log('updatedExpense: ', updatedExpense);

          const filteredExpenses = expenses.filter(
            (expense) => expense.id !== updatedExpense.id
          );

          // setLoading(false);
          setExpenses([
            ...filteredExpenses,
            { ...updatedExpense, key: updatedExpense.id },
          ]);
          // setDate('');
          // setDescription('');
          // setType('');
          // setAmount('');

          // redirect to ExpenseList component
          history.push('/expenses');
        }
      };
      updateStates();
    };

    editExpense();
  };

  const formProps = {
    formTitle: 'Edit Expense Form',
    submitHandler,
    description,
    setDescription,
    date,
    setDate,
    type,
    setType,
    amount,
    setAmount,
  };

  return <AddEditForm {...formProps} />;
};

export default EditExpense;
