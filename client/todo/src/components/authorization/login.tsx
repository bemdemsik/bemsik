import { FC } from 'react';
import { Button, Form, Input, notification } from 'antd';
import { LoginDTO } from '../../api/dto/auth.dto';
import { AuthApi } from '../../api/auth';
import { setCookie } from 'nookies';

export const Login: FC = () => {
  const onSubmit = async (values: LoginDTO) => {
    try {
      const { refreshToken,accessToken } = await AuthApi.login(values);

      notification.success({
        message: "Успешно",
        description: "Переходим на главную страницу ...",
        duration: 5,
      });

      localStorage.setItem('accessToken', accessToken);

      setCookie(null, "_token", refreshToken, {
         path: '/'
      });
      window.location.href = '/todos'
    }catch (err){
      console.warn('LoginForm',err)
      notification.error({
        message: "Ошибка",
        description: "Неверный логин или пароль",
        duration: 5,
      });
    }
  }
  return(
    <div className={'container'}>
      <Form
      name = "basic"
      labelCol={{
        span: 8,
      }}
      onFinish={onSubmit}
      >
        <Form.Item
          label = "Email"
          name = "email"
          rules={[
            {
              required: true,
              message: "Укажите логин",
            },
          ]}
        >
          <Input />

        </Form.Item>
        <Form.Item
          label = "Password"
          name = "password"
          rules={[
            {
              required: true,
              message: "Укажите пароль",
            },
          ]}
        >
          <Input.Password />

        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Войти
          </Button>

        </Form.Item>
      </Form>
    </div>
  )
}