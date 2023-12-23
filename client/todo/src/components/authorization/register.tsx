import { FC } from 'react';
import { Button, Form, Input, notification } from 'antd';
import { RegisterDTO } from '../../api/dto/auth.dto';
import { AuthApi } from '../../api/auth';
import { setCookie } from 'nookies';

export const Register: FC = () => {
  const onSubmit = async (values: RegisterDTO) => {
    try {
      const { refreshToken } = await AuthApi.register(values);

      notification.success({
        message: "Успешно",
        description: "Переходим на главную страницу ...",
        duration: 5,
      });

      setCookie(null, "_token", refreshToken, {
        path: '/'
      });
      window.location.href = '/todos'
    }catch (err){
      console.warn('RegisterForm',err)
      notification.error({
        message: "Ошибка",
        description: "" + err,
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
          label = "Name"
          name = "name"
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
          label = "Email"
          name = "email"
          rules={[
            {
              required: true,
              message: "Укажите почту",
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
            Зарегестрироваться
          </Button>

        </Form.Item>
      </Form>
    </div>
  )
}