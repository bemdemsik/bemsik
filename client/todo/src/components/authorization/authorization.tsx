import { FC } from 'react';
import { Tabs } from 'antd';
import { Login } from './login';
import { Register } from './register';

export const Authorization: FC = () => {
  return (
    <center>
      <main style={{width: 400, margin: "50 auto"}}>
        <Tabs
          items={[
            {
              label: "Войти",
              key: "1",
              children: <Login />
            },
            {
              label: "Регистрация",
              key: "2",
              children: <Register />
            },
          ]}
        />
      </main>
    </center>
  )
}