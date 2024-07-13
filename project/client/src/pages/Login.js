import React, { useEffect } from 'react'
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from '../calls/users';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const onFinish = async (value) => {
    try {
      const response = await LoginUser(value);
      const response2 = await axios.get('http://localhost:3000/api/users/get-current-user',
      {
        headers: {
          Authorization: `Bearer ${response.token}`,
        },
      });

      const userRole = response2.data.data.role;

      if(userRole === 'admin'){
        navigate('/admin');
      }
      else if(userRole === 'partner'){
        navigate('/partner');
      }
      else{
        navigate('/');
      }

      
    
      if (response.success) {
        message.success(response.message);
        localStorage.setItem('token', response.token);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

   

  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Login to BookMyShow</h1>
          </section>

          <section className="right-section">
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input id="email" type="text" placeholder="Enter your Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                htmlFor="password"
                name="password"
                className="d-block"
                rules={[{ required: true, message: "Password is required" }]}
              >
                <Input id="password" type="password" placeholder="Enter your Password" />
              </Form.Item>

              <Form.Item className="d-block">
                <Button type="primary" block htmlType="submit" style={{ fontSize: "1rem", fontWeight: "600" }}>
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div>
              <p>
                New User? <Link to="/register">Register Here</Link>
              </p>
              <p>
                Forgot Password? <Link to="/forget">Click Here</Link>
              </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Login;
