import { Navigate, useLocation } from 'react-router-dom';

import { path } from 'modules/router/path';
import { useAppSelector } from 'store';
import { authSelector } from 'store/selectors';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const location = useLocation();
  const { accessToken } = useAppSelector(authSelector);

  if (!accessToken) return <Navigate to={path.signin} state={{ from: location }} />;

  return children;
};
