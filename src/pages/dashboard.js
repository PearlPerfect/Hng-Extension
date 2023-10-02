import React,{useState  } from 'react'
import { Grid,Stack,Box,Card,CssBaseline } from '@mui/material'
import Auth from '@/context/AuthContext'
import Dashboard from '@/layout/dashboard'
 

export default function UserDashboard() {
    return (
        <div>
            <CssBaseline/>
            <Dashboard/>
    
                <Auth/>
                </div>
      )

  }

