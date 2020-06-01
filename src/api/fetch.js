export const fetchJsonData = async ({ url = '', method, data }) => {
  const resObj = { error: null, data: null };
  try {
    const serverRes = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    resObj.data = await serverRes.json();
  } catch (error) {
    resObj.error = error;
  }

  return resObj;
};
