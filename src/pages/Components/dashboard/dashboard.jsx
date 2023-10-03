import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useEffect,useState,useRef} from 'react'
import styles from "./dashboard.module.css";
import logo from '../../../Images/iCON 7 1 (1).png'
import profilePics from '../../../Images/profile-circle.png'
import arrow from '../../../Images/arrow-down.png';
import { auth } from "@/config/_config";
import searchIcon from '../../../Images/search-normal.png'
import { InputAdornment,TextField } from "@mui/material";
import { useRouter } from 'next/router';



export default function Dashboard(){
    const [mail,setMail] = useState()
    const router = useRouter();
    useEffect(() => {
        // Retrieve the user's name from query parameters
        const { name } = router.query;
    
        if (name) {
          console.log(`Hello, ${name}`);
          setMail(name)
        }
      }, [router.query]);
    
    return(
        <>     
            <div className={styles.container}>
          <div className={styles.logo} >  
          <Link href={'/'}>

           <Image src={logo} className={styles.logoIcon} alt="logo"></Image>
          </Link>
           <h1 className={styles.logoDes}>HelpMeOut </h1>
        </div>
        <div className={styles.User}>  
           <Image src={profilePics} className={styles.profileIcon} alt="logo"></Image>
           <h1 className={styles.UserName}>{mail} </h1>
           <Image src={arrow} alt="arrow"></Image>
        </div>
        </div>
        <div className={styles.search}>
            <div>
            <h1 className={styles.greet}>Hello, {mail}</h1>
            <p className={styles.greetP}>Here are your recorded videos</p>
            </div>
           <TextField
        sx={{  width: "30vw"}}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <Image src={searchIcon} alt="" />
      </InputAdornment>
    ),
  }}
  placeholder="Search..."
  variant="outlined"
/>
           {/* <Image src={searchIcon} alt="search Icon"  className={styles.searchIcon}  ></Image> */}
    
           </div>


        </>
    )
}