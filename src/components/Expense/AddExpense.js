import React, { useState, useContext } from 'react';

import { ExpenseContext } from '../contexts';
import { ExpenseAPI } from '../../api';
import { currentDate } from '../../shared/util';
import AddEditForm from './AddEditForm';

const AddExpense = ({ history }) => {
  // const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(currentDate());
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(1);

  const [, , setExpenses] = useContext(ExpenseContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const createNewExpense = async () => {
      console.log('\nAddExpense.createNewExpense() -->');

      // setLoading(true);
      const createParams = { date, description, type, amount };
      const resData = await ExpenseAPI.create(createParams);
      console.log('create__resData: ', resData);

      const updateStates = () => {
        if (resData.data && resData.data.status && resData.data.data) {
          const createdExpense = resData.data.data;
          console.log('createdExpense: ', createdExpense);

          // setLoading(false);
          setExpenses((prevExp) => [
            ...prevExp,
            { ...createdExpense, key: createdExpense.id },
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

    createNewExpense();
  };

  const formProps = {
    formTitle: 'Add Expense Form',
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

export default AddExpense;
