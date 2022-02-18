import * as React from 'react';
import { Button, Spinner, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UIInput } from '@/components/input';
import { PasswordInput } from '@/components/password-input';
import { IRegisterRequest } from '@/utils/api-models';
import { useRegisterMutation } from '@/queries/use-register';
import { UILink } from '@/components/link';
/*
  RegisterComponent Helpers
*/

function RegisterPage() {
  const { mutate: registerMutate, isLoading } = useRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterRequest>();

  function onSubmit(s: any) {
    registerMutate({
      firstName: s.firstName,
      lastName: s.lastName,
      username: s.username,
      password: s.password,
    });
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="border p-3 rounded-3" lg={3} xl={3} md={3} sm={6}>
          <form className="w-75 mx-auto mb-3" onSubmit={handleSubmit(onSubmit)}>
            <UIInput
              labelKey="Isim"
              labelClassName="font-weight-bold"
              type="text"
              className="mb-4"
              variant="solid"
              {...register('firstName', {
                required: 'Bu Alan Zorunludur.',
              })}
              errorKey={errors.firstName?.message}
            />
            <UIInput
              labelKey="Soyisim"
              labelClassName="font-weight-bold"
              type="text"
              className="mb-4"
              variant="solid"
              {...register('lastName', {
                required: 'Bu Alan Zorunludur.',
              })}
              errorKey={errors.lastName?.message}
            />
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
              className="mb-4"
              errorKey={errors.password?.message}
              {...register('password', {
                required: 'Bu Alan Zorunludur.',
              })}
            />
            <div>
              <Button type="submit" className="w-100">
                {isLoading ? <Spinner animation="border" /> : 'Kayit Ol'}
              </Button>
            </div>
          </form>
          <div className="w-75 mx-auto d-flex justify-content-end">
            <UILink className="text-underline" to="/login">
              Giris Yap
            </UILink>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const PureRegisterPage = React.memo(RegisterPage);

export { PureRegisterPage as RegisterPage };
