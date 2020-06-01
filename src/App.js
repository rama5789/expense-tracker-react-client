import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation';
import ExpenseProvider from './components/Expense/ExpenseProvider';
import AddExpense from './components/Expense/AddExpense';
import EditExpense from './components/Expense/EditExpense';
import ExpenseList from './components/Expense/ExpenseList';
import NotFoundPage from './components/pages/NotFoundPage';

const redirectToExpenses = () => <Redirect to="/expenses" />;

const App = () => (
  <>
    <ExpenseProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/add-expense" component={AddExpense} />
          <Route exact path="/expenses/:id" component={EditExpense} />
          <Route exact path="/expenses" component={ExpenseList} />
          <Route exact path="/" render={redirectToExpenses} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </ExpenseProvider>
  </>
);

console.log('process.env: ', process.env);

export default App;
