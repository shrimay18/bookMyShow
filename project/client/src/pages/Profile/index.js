import { Tabs } from 'antd';
import Bookings from './Bookings';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
    // const onChange = (key) => {
    //     console.log(key);
    //   };
    const {user} = useSelector((state) => state.user);
      console.log(user.role);
      if(user.role !== 'user'){
        return <Navigate to="/login" />
      }
      const items = [
        {
          key: '1',
          label: 'Bookings',
          children: <Bookings/>,
        },
        // {
        //   key: '3',
        //   label: 'Tab 3',
        //   children: 'Content of Tab Pane 3',
        // },
      ];

    return (
        <>
        <h1>Profile Page</h1>
            <Tabs defaultActiveKey="2" items={items} />
        </>
    )
}

export default Profile;