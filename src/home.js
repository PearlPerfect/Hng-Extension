import React from "react";
import styles from './styles/Home.module.css';
import Image from "next/image";
import arrow from './Images/arrow-right.png'
import HeroImage1 from './Images/Hero_img1.png'
import HeroImage2 from  './Images/Hero_img2.png'
import HeroImage3 from './Images/Hero_img3.png'


export default function Hero() {
    return(
        <>
        <section>
            <div className={styles.hero}>
                <div className={ styles.hero_right}>
                <h1 className={styles.hero_title}>Show Them Don’t Just Tell</h1>
            <p className={styles.hero_Des}>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                 <button  className={styles.btn}> <a href={"/getStarted"} className={styles.btnLink}>Install HelpMeOut <Image src={arrow} alt="icon" className={styles.btnArrow}/></a> </button>
                </div>

                <div className={ styles.hero_left}>
                <div><Image src={HeroImage1} alt="images"/></div>
                <div><Image src={HeroImage2} alt="images"/></div>
                <div  className={styles.img3}><Image src={HeroImage3}   alt="images"/></div>
              
</div>
            </div>
        </section>

        </>
    )
}