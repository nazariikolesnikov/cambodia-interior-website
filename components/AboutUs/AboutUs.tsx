'use client';

import Image from "next/image";
import styles from "./AboutUs.module.css";
import aboutUsFirstImage from "./../../assets/images/aboutUs/aboutUsFirstImage.png";
import aboutUsSecondImage from "./../../assets/images/aboutUs/aboutUsSecondImage.png";

export default function AboutUs() {
    return (
        <>
            <section className={styles.aboutSection}>
                <div className={styles.sideLabel}>
                    <span className={styles.sideLabelLine}></span>
                    <span className={styles.sideLabelText}>ABOUT US</span>
                    <span className={styles.sideLabelLine}></span>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.leftImageWrapper}>
                        <Image 
                            src={aboutUsFirstImage}
                            alt="Interior design kitchen" 
                            fill
                            className={styles.aboutUsFirstImage}
                        />
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.topRight}>
                            <div className={styles.textContent}>
                                <h2 className={styles.textContentTitle}>Company philosophy</h2>
                                <p className={styles.textContentDescription}>
                                    Communication is the key to any<br /> successful relationship, 
                                    we take the time to listen to<br /> your story and needs.<br /> 
                                    This helps us accurately bring your visions<br /> to life...
                                </p>
                            </div>
                            <div className={styles.statisticsContent}>
                                <div className={styles.statisticsItem}>
                                    <h3 className={styles.statisticsNumber}>100+</h3>
                                    <p className={styles.statisticsText}>
                                        Completed projects in 2022
                                    </p>
                                </div>
                                <div className={styles.statisticsItem}>
                                    <h3 className={styles.statisticsNumber}>10+</h3>
                                    <p className={styles.statisticsText}>
                                        Years of experience in interior design
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.dividerWrapper}>
                            <span className={styles.dividerLine}></span>
                            <span className={styles.dividerText}>Discover more</span>
                            <span className={styles.dividerLine}></span>
                        </div>
                        <div className={styles.bottomRightImageWrapper}>
                            <Image 
                                src={aboutUsSecondImage} 
                                alt="Interior design lounge chair" 
                                fill
                                className={styles.aboutUsSecondImage}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}