/**
 * Date Utils
 */

export const getDateObj = (date = new Date()) => {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return { dd, mm, yyyy };
};

export const currentDate = () => {
  const { dd, mm, yyyy } = getDateObj();
  return yyyy + '-' + mm + '-' + dd;
};

/**
 * Array Utils
 */

export const compareValues = (key, order = 'asc') => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
};
