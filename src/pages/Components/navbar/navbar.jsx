import React from "react";
import styles from './nav_Styles.module.css';
import Image from "next/image";
import Link from "next/link";
import Icon from '../../../../public/Images/iCON 7 1 (1).png'
// import GetStarted from "../getStarted/getStarted";


export default function NavBar(){
    return(
        <>
        <nav>
            <div className={styles.logo}> 
            <Link href={"/home"}><Image src={Icon} alt="icon" className= {styles.img}/></Link>
            <Link href={"/home"} className={styles.logo_heading}>HelpMeOut</Link>
            </div>

            <div className={styles.center_nav}>
            <Link href={"/feature"} className={styles.center_item}>Features</Link>
            <Link href={"/work"} className={styles.center_item}>How It Works</Link>
            </div>

            <div className={styles.left}>
          <Link href={"/signin"} className={styles.left_item}>Get Started</Link>  
            </div>
            </nav>
        </>
    )
}