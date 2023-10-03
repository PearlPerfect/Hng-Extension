import React from "react";
import styles from '../../../styles/Home.module.css';
import Image from "next/image";
import footerIcon from '../../../Images/footer Icon.png'

export default function Footer(){
    return(
        <>
        <footer>
       
           
            <div className={styles.icon}>
                <Image src={footerIcon} alt="icon"/>
                <p className={styles.iconName}>HelpMeOut</p>
                </div>

                <div className ={styles.eachDes}>
                    <p  className={styles.footerTitle}>Menu</p>
                    <p className={styles.footerDes}>Home</p>
                    <p className={styles.footerDes}>Converter</p>
                    <p className={styles.footerDes}>How it works</p>
           </div>

           <div className ={styles.eachDes}>
                    <p  className={styles.footerTitle}>About us</p>
                    <p className={styles.footerDes}>About</p>
                    <p className={styles.footerDes}>Contact Us</p>
                    <p className={styles.footerDes}>Privacy Policy</p>
           </div>

           <div className ={styles.eachDes}>
                    <p className={styles.footerTitle}>Screen Record</p>
                    <p className={styles.footerDes}>Browser Window</p>
                    <p className={styles.footerDes}>Desktop</p>
                    <p className={styles.footerDes}>Application</p>
           </div>
       
        </footer>
        </>
    )
}