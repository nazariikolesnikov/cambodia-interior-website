'use client';

import styles from "./HeroBanner.module.css";
import ArrowLogo from "../../assets/icons/ArrowLogo/ArrowLogo";

export default function HeroBanner() {
    return (
        <section className={styles.heroBanner}>
            <div className={styles.heroMain}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.titleSolid}>Cambodia</h1>
                    <h1 className={styles.titleOutline} aria-hidden="true">Cambodia</h1>
                </div>
                <div className={styles.heroBottomLeft}>
                    <div className={styles.langLineWrapper}>
                        <div className={styles.langLine}></div>
                    </div>
                    <button className={styles.langBtn}>EN</button>
                </div>
                <div className={styles.heroBottomCenter}>
                    <span className={styles.sliderLabel}>Next project</span>
                    <div className={styles.sliderControls}>
                        <button className={styles.sliderArrow} aria-label="Previous">&#10094;</button>
                        <span className={styles.sliderNum}>01</span>
                        <div className={styles.sliderProgressLine}></div>
                        <span className={styles.sliderNum}>02</span>
                        <button className={styles.sliderArrow} aria-label="Next">&#10095;</button>
                    </div>
                </div>
            </div>
            <aside className={styles.heroSidebar}>
                <div className={styles.sidebarTop}></div>
                <div className={styles.discoverWrapper}>
                    <button className={styles.discoverBtn}>
                        <span className={styles.discoverText}>
                            <span className={styles.discoverTextTitle}>Discover more</span>
                            <ArrowLogo className={styles.discoverTextArrow} />
                        </span>
                    </button>
                </div>
                <div className={styles.projectInfo}>
                    <span className={styles.projectIndex}>01</span>
                    <p className={styles.projectDesc}>
                        Minimalism in dark colors<br />
                        with oriental motifs...
                    </p>
                </div>
            </aside>
        </section>
    );
}