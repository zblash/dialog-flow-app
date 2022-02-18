import { useMutation } from 'react-query';
import { useAuth } from '@/contexts/auth-context';
import { IExceptionResponse, ILoginResponse } from '@/utils/api-models';
import { useAlert } from '@/utils/hooks';
import { endPoints } from '@/utils/endpoints';

export interface LoginInputType {
  username: string;
  password: string;
}
async function login(input: LoginInputType) {
  return endPoints.login({
    username: input.username,
    password: input.password,
  });
}

export const useLoginMutation = () => {
  const { authenticate } = useAuth();
  const alert = useAlert();

  return useMutation((input: LoginInputType) => login(input), {
    onSuccess: (data: ILoginResponse) => {
      authenticate(data.token);
      alert.show(`'Başarıyla Giriş Yapıldı'`, {
        type: 'success',
      });
    },
    onError: (error: IExceptionResponse) => {
      alert.show(`${error.message}`, {
        type: 'error',
      });
    },
  });
};
