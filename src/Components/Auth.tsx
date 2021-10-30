import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Auth = ({ register }: { register: boolean }) => (
  <div className="p-4">{register ? <RegisterForm /> : <LoginForm />}</div>
);

export default Auth;
