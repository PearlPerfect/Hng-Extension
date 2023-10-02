import React,{useState  } from 'react'
import ImageGallery from '@/layout/gallery'
import { Grid,Stack,Box,Card,CssBaseline } from '@mui/material'
import Auth from '@/context'
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
