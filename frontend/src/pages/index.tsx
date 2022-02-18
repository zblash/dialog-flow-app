import * as React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

const Page404 = React.lazy(() => import('./404-component').then(module => ({ default: module.Page404 })));
const HomePage = React.lazy(() => import('./home').then(module => ({ default: module.HomePage })));
const LoginPage = React.lazy(() => import('./login').then(module => ({ default: module.LoginPage })));
const RegisterPage = React.lazy(() => import('./register').then(module => ({ default: module.RegisterPage })));

interface IRoute {
  path: string;
  basePath: string;
  component: React.ComponentClass | React.FunctionComponent;
  isPrivate?: boolean;
}

export const RoutesList: IRoute[] = [
  { path: '/', basePath: '/', component: HomePage, isPrivate: true },
  { path: '/login', basePath: '/login', component: LoginPage, isPrivate: false },
  { path: '/register', basePath: '/register', component: RegisterPage, isPrivate: false },
];

const Routes = React.memo(() => {
  return (
    <div>
      <Switch>
        {RoutesList.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <React.Suspense fallback={'Loading'}>
                <route.component />
              </React.Suspense>
            }
          />
        ))}
        <Route
          path="*"
          element={
            <React.Suspense fallback={'Loading'}>
              <Page404 />
            </React.Suspense>
          }
        />
      </Switch>
    </div>
  );
});

export default Routes;
