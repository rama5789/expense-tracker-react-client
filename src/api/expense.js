import { fetchJsonData } from './fetch';

const baseUrl = process.env.REACT_APP_EXPENSE_API_SERVER_URL;
/* const apiV1Url = baseUrl + '/api/v1';
const expenseUrl = apiV1Url + '/expenses'; */

export const create = (createParams) => {
  /* const url = expenseUrl;
  return fetchJsonData({ url, method: 'POST', data: createParams }); */

  const url = baseUrl + '?operation=createExpense';
  return fetchJsonData({ url, method: 'POST', data: createParams });
};

export const findAll = () => {
  /* const url = expenseUrl + '/all';
  return fetchJsonData({ url }); */

  const url = baseUrl + '?operation=findAllExpenses';
  return fetchJsonData({ url });
};

export const findById = (id) => {
  /* const url = expenseUrl + '/' + id;
  return fetchJsonData({ url }); */

  const url = baseUrl + `?operation=findExpenseById&id=${id}`;
  return fetchJsonData({ url });
};

export const updateById = (id, updateParams) => {
  /* const url = expenseUrl + '/' + id;
  return fetchJsonData({ url, method: 'PUT', data: updateParams }); */

  const url = baseUrl + `?operation=updateExpenseById&id=${id}`;
  return fetchJsonData({ url, method: 'POST', data: updateParams });
};

export const deleteById = (id) => {
  /* const url = expenseUrl + '/' + id;
  return fetchJsonData({ url, method: 'DELETE' }); */

  const url = baseUrl + `?operation=deleteExpenseById&id=${id}`;
  return fetchJsonData({ url });
};
