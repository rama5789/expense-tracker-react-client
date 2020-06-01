import React from 'react';

import './AddEditForm.css';

const AddEditForm = (props) => {
  const {
    formTitle,
    submitHandler,
    description,
    setDescription,
    date,
    setDate,
    type,
    setType,
    amount,
    setAmount,
  } = props;

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <center>
          <h3>{formTitle}</h3>
        </center>
        <div className="row">
          <div className="col-25">
            <label htmlFor="description">Description</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              value={description}
              placeholder="Shopping"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="date">Date</label>
          </div>
          <div className="col-75">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="type">Type</label>
          </div>
          <div className="col-75">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required>
              <option value="EXPENSE">EXPENSE</option>
              <option value="INCOME">INCOME</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="amount">Amount</label>
          </div>
          <div className="col-75">
            <input
              type="number"
              min="1"
              value={amount}
              placeholder="100"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddEditForm;
