import { Tabs } from 'antd';
import TheatreList from './TheatreList';
import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Partner = () => {

      const {user} = useSelector((state) => state.user);
      console.log(user.role);
      if(user.role !== 'partner'){
        return <Navigate to="/login" />
      }
      const items = [
        {
          key: '1',
          label: 'Theatres',
          children: <TheatreList/>,
        }
      ];

    return (
        <>
        <h1>Partner Page</h1>
            <Tabs defaultActiveKey="2" items={items} />
        </>
    )
}

export default Partner;