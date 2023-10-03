import React from "react";
import styles from './feature.module.css';
import Image from "next/image";
import videoimg from '/src/images/Video Repository.png'
import circle from '/src/images/record-circle.png'
import send from '/src/images/send-2.png'
import refresh from '/src/images/refresh-square-2.png'

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
                    <Image src={circle} alt="icon1" className={styles.icon}/>
                    </div>
                <div className={styles.IconDes}>
                    <h3 className={styles.FeaturedTitle}>Simple Screen Recording</h3>
                    <p className={styles.FeaturedDes}>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                </div>
                </div>

                <div className={ styles.eachdescription}>
                <div className={styles.img_icon}>
                    <Image src={send} alt="icon1" className={styles.icon}/>
                    </div>
                <div className={styles.IconDes}>
                    <h3 className={styles.FeaturedTitle}>Easy-to-Share URL</h3>
                    <p className={styles.FeaturedDes}>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                </div>
                </div>
                <div className={ styles.eachdescription}>
                    <div className={styles.img_icon}>

                    <Image src={refresh} alt="icon1" className={styles.icon} />
                    </div>
                <div className={styles.IconDes} >
                    <h3 className={styles.FeaturedTitle}>Revisit Recordings</h3>
                    <p className={styles.FeaturedDes}>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                </div>
                </div>
            </div>
            <div className={styles.left}><Image src={videoimg} alt="video-repo" /></div>

               
            </div>
            </section> 
     </>

    )
} 