import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Loader } from 'modules/components/Loader/Loader';
import { useGetTokenQuery } from 'services';
import { path } from 'modules/router/path';
import { useAppSelector } from 'store';
import { authSelector } from 'store/selectors';

export const Signin = () => {
  const navigate = useNavigate();
  const { isLoading, isSuccess } = useGetTokenQuery(null);
  const { accessToken } = useAppSelector(authSelector);

  useEffect(() => {
    if (isSuccess && accessToken) navigate(path.home);
  }, [isSuccess, accessToken]);

  if (isLoading) return <Loader />;

  return <></>;
};

export default Signin;
