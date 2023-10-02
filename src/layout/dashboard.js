import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useEffect,useState,useRef} from 'react'
import styles from "./dashbord.module.css";
import logo from '../../../../public/Images/iCON 7 1 (1).png'
import profilePics from '../../../../public/Images/profile-circle.png'
import arrow from '../../../../public/Images/arrow-down.png';
import {FaSistrix}from "react-icons/fa";
import { signOut } from 'firebase/auth';
import { auth } from '../services/_config'
import searchIcon from '../../../../public/Images/search-normal.png'



export default function Dashboard(){
    return(
        <>     
            <div className={styles.container}>
          <div className={styles.logo}>  
           <Image src={logo} className={styles.logoIcon} alt="logo"></Image>
           <h1 className={styles.logoDes}>HelpMeOut </h1>
        </div>
        <div className={styles.User}>  
           <Image src={profilePics} className={styles.profileIcon} alt="logo"></Image>
           <h1 className={styles.UserName}>John Mark </h1>
           <Image src={arrow} alt="arrow"></Image>
        </div>
        </div>
        <div className={styles.search}>
            <div>
            <h1 className={styles.greet}>Hello, John Mark</h1>
            <p className={styles.greetP}>Here are your recorded videos</p>
            </div>
           <input className={styles.searchField}  type="search" placeholder="Search for a particular video"/> 
           {/* <Image src={searchIcon} alt="search Icon"  className={styles.searchIcon}  ></Image> */}
    
           </div>


        </>
    )
}