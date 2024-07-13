import React, { Children } from 'react'

import {Tabs} from 'antd'
import MovieList from './MovieList'
import TheatresTable from './TheatresTable'
import MovieFrom from './MovieForm'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


function Admin() {
  const {user} = useSelector((state) => state.user);
  console.log(user.role);
  if(user.role !== 'admin'){
    return <Navigate to="/"/>
  }
    const tabItems = [
        { 
            key : '1',
            label : 'Movies',
            children : <MovieList/>

        },

        {
           key : '2',
           label : 'Theatres',
           children : <TheatresTable/>
        }
    ]


  return (
    <div>
        <h1>Admin Page</h1>
        <Tabs items={tabItems}/>


    </div>
  )
}

export default Admin