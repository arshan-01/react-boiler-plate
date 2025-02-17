import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, navigationRoutes } from './routes';

function DashboardRoutes() {
  return (
    <Routes>
      {/* Generate dynamic routes for dashboard */}
      {navigationRoutes.map(({ id, path, component: Component }) => (
        <Route key={id} path={path} element={<Component />} />
      ))}

      {/* Generate dynamic routes for authentication */}
      {/* {authRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))} */}
    </Routes>
  );
}

export default DashboardRoutes;
