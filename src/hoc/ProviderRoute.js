import React from 'react';
import { Route } from 'react-router-dom';

const ProviderRoute = ({ contextProvider, component, ...rest }) => {
  const Provider = contextProvider;
  const Component = component;

  return (
    <Route {...rest}>
      <Provider>
        <Component />
      </Provider>
    </Route>
  );
};

export default ProviderRoute;
