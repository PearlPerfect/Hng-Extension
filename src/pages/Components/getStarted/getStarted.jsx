import React from "react";
import Image from "next/image";
import styles from './getStarted.module.css';
import Link from "next/link";
import Logo from '../../../Images/iCON 7 1 (1).png';
import vector from '../../../Images/vec.png';
import medal from '../../../Images/medal.png'
import star from '../../../Images/Star 1.png';
import dashboard from '../../../Images/Frame 163530.png';
import leftArrow from '../../../Images/arrow.png';
import rightArrow from '../../../Images/arrow (1).png'

export default function GetStarted(){
    return(
        <>
        <section>
        <div className={styles.top}>
        <div className={styles.right}>
            <Link  href={"/"}  className="icon">
                <Image  src={Logo} alt="logo"></Image>
            </Link>
            <div className="description">
                <h1 className={styles.logoDes}>HelpMeOut</h1>
                <div className={styles.features}>
                    <div className={styles.featureRight}>
                        <Image src={vector} alt="vector"></Image>
                      <Link href="/" className={styles.website}>Helpmeout.com</Link>
                    </div>
                    <div className={styles.featureRight}>
                        <Image src={medal} alt="medal"></Image>
                      <p className={styles.website}>Featured</p>
                    </div>
                </div>

                <div className={styles.Rating}>
                    <div className={styles.Ratingstyles}>
                        <Image src={star} alt="star"></Image>
                        <Image src={star} alt="star"></Image>
                        <Image src={star} alt="star"></Image>
                        <Image src={star} alt="star"></Image>
                         <Image src={star} alt="star"></Image>
                         <p className={styles.num}>252</p>
                    </div>
                    <div className={styles.featureRight}>
                      <p className={styles.starmiddle}>Productivity</p>
                    </div>
                    <div className={styles.featureRight}>
                      <p className={styles.starleft}>80,000+ users</p>
                    </div>
                </div>
            </div>
            </div> 
         <div className={styles.left}>
            <Link href={"/"}  className={styles.leftStyles}>Add to Chrome</Link>
         </div>
        </div>
        
        <div className={styles.asst}>
            <div className={styles.asstbg}>
            <p className={styles.asstP}>Overview</p>
            </div>
            <p className={styles.asstP1}>Privacy practices</p>
            <p className={styles.asstP1}>Review</p>
            <p className={styles.asstP1}> Related </p>
            </div>
            </section>
            <div  className={styles.frame}>
            <Image src={leftArrow} alt="dashbord" className={styles.arrow}></Image>
            <Image src={dashboard} alt="dashbord"></Image>
             <Image src={rightArrow} alt="dashbord" className={styles.arrow}></Image>
            </div>
       
        </>
    )
}