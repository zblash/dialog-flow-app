import { ILoginResponse, IRegisterRequest, IRegisterResponse } from './api-models';
import { ApiCallService, ApiCall } from './ApiCall';

class Endpoints {
  login: (s: { username: string; password: string }) => Promise<ILoginResponse> = ({ username, password }) => {
    ApiCallService.unRegisterAuthToken();

    return ApiCallService.request(
      new (ApiCall as any)().setUrl('/users/login', false).setData({ username, password }).post(),
    );
  };

  register: (s: IRegisterRequest) => Promise<IRegisterResponse> = ({ firstName, lastName, username, password }) => {
    return ApiCallService.request(
      new (ApiCall as any)()
        .setUrl('/users/register', false)
        .setData({ firstName, lastName, username, password })
        .post(),
    );
  };
}

const endPoints = new Endpoints();

export { endPoints };
