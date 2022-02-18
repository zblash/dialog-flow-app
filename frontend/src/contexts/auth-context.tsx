import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RoutesList } from '@/pages';
import { TokenService } from '@/utils/token-service';
import { ApiCallService } from '@/utils/ApiCall';
import { IBaseUser } from '@/utils/api-models';

const AuthContext = React.createContext(
  {} as {
    user: IBaseUser | undefined;
    authenticate: (token: string) => void;
    logout: (redirectLocation?: string) => void;
    isAuthenticated: boolean;
    token: string | undefined;
  },
);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = React.useState<IBaseUser>();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = React.useCallback(
    (redirectLocation?: string) => {
      console.log('lelele');
      TokenService.removeToken();
      setUser(undefined);
      navigate(redirectLocation || '/login');
    },
    [navigate],
  );

  const registerUserWithToken = (token: string) => {
    const decodedUser = TokenService.decodeToken(token);
    setUser(decodedUser);
  };

  const authenticate = (token: string) => {
    ApiCallService.registerAuthToken(token);
    try {
      TokenService.saveToken(token);
      registerUserWithToken(token);
      navigate('/');
    } catch (error) {
      logout();
    }
  };

  React.useEffect(() => {
    const token = TokenService.getToken();
    const route = RoutesList.reverse().find(route => location.pathname === route.basePath);

    if (route && route.isPrivate) {
      if (!token || TokenService.isExpired(token)) {
        logout();
      } else {
        registerUserWithToken(token);
      }
    }
  }, [location.pathname, logout]);

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticate,
        logout,
        isAuthenticated: !!user,
        token: TokenService.getToken(),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
