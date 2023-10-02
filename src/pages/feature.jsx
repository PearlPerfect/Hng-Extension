import React from "react";
import styles from '../styles/featured.module.css';
import Image from "next/image";
import videoRepo from '../../public/Images/Video Repository.png'
import des1 from '../../public/Images/record-circle.png'
import des2 from '../../public/Images/send-2.png'
import des3 from '../../public/Images/refresh-square-2.png'

export default function Feature(){
    return(
        <>  
        <section>
        <h2 className={styles.title}>Features</h2>
         <p className={styles.des}>Key Highlights of Our Extension</p> 
        <div className={styles.card}>
            <div className={styles.right}>
               <div className={ styles.eachdescription}>
               <div className={styles.img_icon}>
                    <Image src={des1} alt="icon1" className={styles.icon}/>
                    </div>
                <div className={styles.IconDes}>
                    <h3 className={styles.FeaturedTitle}>Simple Screen Recording</h3>
                    <p className={styles.FeaturedDes}>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                </div>
                </div>

                <div className={ styles.eachdescription}>
                <div className={styles.img_icon}>
                    <Image src={des2} alt="icon1" className={styles.icon}/>
                    </div>
                <div className={styles.IconDes}>
                    <h3 className={styles.FeaturedTitle}>Easy-to-Share URL</h3>
                    <p className={styles.FeaturedDes}>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                </div>
                </div>
                <div className={ styles.eachdescription}>
                    <div className={styles.img_icon}>

                    <Image src={des3} alt="icon1" className={styles.icon} />
                    </div>
                <div className={styles.IconDes} >
                    <h3 className={styles.FeaturedTitle}>Revisit Recordings</h3>
                    <p className={styles.FeaturedDes}>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                </div>
                </div>
            </div>
            <div className={styles.left}><Image src={videoRepo} alt="video-repo" /></div>

               
            </div>
            </section> 
     </>

    )
} 