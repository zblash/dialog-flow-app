import { IRegisterRequest, IExceptionResponse, IRegisterResponse } from '@/utils/api-models';
import { endPoints } from '@/utils/endpoints';
import { useAlert } from '@/utils/hooks';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

async function register(input: IRegisterRequest) {
  return endPoints.register(input);
}

export const useRegisterMutation = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  return useMutation((input: IRegisterRequest) => register(input), {
    onSuccess: (data: IRegisterResponse) => {
      alert.show(`Kayıt Işlemi Başarılı`, {
        type: 'success',
      });
      navigate('/login');
    },
    onError: (error: IExceptionResponse) => {
      alert.show(`${error.message}`, {
        type: 'error',
      });
    },
  });
};
