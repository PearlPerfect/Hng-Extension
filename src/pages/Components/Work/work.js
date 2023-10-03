import React from "react";
import styles from './work.module.css'
import Image from "next/image";
import one from '../../../Images/one.png'
import two from '../../../Images/two.png'
import three from '../../../Images/three.png'
import workCard from '../../../Images/rec-1.cb7888a47e24214aeb105805426a8300.svg.png'

export default function WorkFlow(){
    return(
        <>
        <section>  
            <h2 className={styles.title}>How it works</h2>
            <div className={styles.card}>
            <div className={styles.card1}>
                <Image src = {one} alt= 'step 1'/>
                <h5 className= {styles.cardTitle}>Record Screen</h5>
                <p className= {styles.cardDescription}>Click the <em>Start Recording</em> button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
               <Image src={workCard} alt="card" className= {styles.img}/>
                </div>
                <div className={styles.card1}>
                <Image src = {two} alt= 'step 1'/>
                <h5 className= {styles.cardTitle}>Share Your Recording</h5>
                <p className= {styles.cardDescription}>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                <Image src={workCard} alt="card" className= {styles.img}/>
                </div>

                <div className={styles.card1}>
                <Image src = {three} alt= 'step 1'/>
                <h5 className= {styles.cardTitle}>Learn Effortlessly</h5>
                <p className= {styles.cardDescription}>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                <Image src={workCard} alt="card" className= {styles.img}/>
                </div>
            </div>
        </section>
        </>
    )
}