import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Spinner, Row, Col, Button } from 'react-bootstrap';
import { UIInput } from '@/components/input';
import { PasswordInput } from '@/components/password-input';
import { useLoginMutation, LoginInputType } from '@/queries/use-login';
import { UILink } from '@/components/link';

function LoginPage() {
  const { mutate: login, isLoading } = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>();

  function onSubmit({ username, password }: LoginInputType) {
    login({
      username,
      password,
    });
  }
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="border p-3 rounded-3" lg={3} xl={3} md={3} sm={6}>
          <form className="w-75 mx-auto mb-3" onSubmit={handleSubmit(onSubmit)}>
            <UIInput
              labelKey="Kullanici Adi"
              labelClassName="font-weight-bold"
              type="text"
              className="mb-4"
              variant="solid"
              {...register('username', {
                required: 'Bu Alan Zorunludur.',
              })}
              errorKey={errors.username?.message}
            />
            <PasswordInput
              labelKey="Şifre"
              labelClassName="font-weight-bold"
              className="mb-5"
              errorKey={errors.password?.message}
              {...register('password', {
                required: 'Bu Alan Zorunludur.',
              })}
            />
            <div>
              <Button type="submit" className="w-100">
                {isLoading && <Spinner animation="border" />}
                Giriş Yap
              </Button>
            </div>
          </form>

          <div className="w-75 mx-auto d-flex justify-content-end">
            <UILink className="text-underline" to="/register">
              Kayit Ol
            </UILink>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const PureLoginPage = React.memo(LoginPage);

export { PureLoginPage as LoginPage };
