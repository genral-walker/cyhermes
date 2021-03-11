
import React from 'react';
import styles from './SideBar.module.scss';

import { ReactComponent as Module5Svg } from '../../assets/svg/module-5.svg';
import { ReactComponent as ArrowSvg } from '../../assets/svg/right-arrow.svg';
import { ReactComponent as QuoteSvg } from '../../assets/svg/quote.svg';


const SideBar = () => {

    return (
        <aside className={styles.body}>
            <div className={styles.logoBox}>
                <Module5Svg />
            </div>

            <div className={styles.links}>
            <a><span>Trial & Pricing</span> <ArrowSvg /></a>
            <a><span>Trial & Pricing</span> <ArrowSvg /></a>
            </div>

            <div className={styles.start}>
                <span></span>
                <p>Get started...</p>
            </div>
            <div className={styles.quote}>
                <div className={styles.logo}><QuoteSvg /></div>
                <p>
                    Succes is not final; failure is
                    not fatal; it is the courage to 
                    continue that counts. <br/>

                    <span>-Winston Churchill</span>
                </p>
            </div>   
        </aside>
    )

};

export default SideBar;