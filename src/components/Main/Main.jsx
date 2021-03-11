
import React from 'react';
import styles from './Main.module.scss';

import Card from '../Card/Card';
import ModuleLink from '../ModuleLink/ModuleLink';

import { ReactComponent as Module1Svg } from '../../assets/svg/module-1.svg';
import { ReactComponent as Module2Svg } from '../../assets/svg/module-2.svg';
import { ReactComponent as Module3Svg } from '../../assets/svg/module-3.svg';
import { ReactComponent as Module4Svg } from '../../assets/svg/module-4.svg';
import { ReactComponent as Module5Svg } from '../../assets/svg/module-5.svg';
import { ReactComponent as Module6Svg } from '../../assets/svg/module-6.svg';


const Main = () => {

    return (
        <main className={styles.main}>

            <div className={styles.intro}>

                <div>
                    <p className={styles.hey}>HEY, TERRY</p>
                    <h1 className={styles.h1}>Start your <span>30 days</span> Trial</h1>
                    <p className={styles.select}>Select your preferred package below</p>
                </div>

                <div>
                    <p className={styles.ngn}>NGN</p>
                    <p className={styles.amount}>1,999,999</p>
                    <p className={styles.total}><span>Total</span> (EXCLUDES VAT)</p>
                </div>
            </div>

            <div className={styles.plans}>
                <Card>
                    <h5 className={styles.starts}>Starts from</h5>
                    <p className={styles.ngn}>NGN</p>
                    <p className={styles.amount}>5,999,999.99</p>
                    <p>per annum</p>

                    <h2 className={styles.premium}>Premium</h2>
                    <p>100 users <span></span> All Modules</p>
                </Card>

                <Card>
                    <h2 className={styles.basic}>Basic</h2>
                    <p><span>30 days trails</span> on our premium <br /> app features and features</p>

                    <h5 className={styles.h5}>INCLUDES</h5>
                    <ul>
                        <li>- 25 Users</li>
                        <li>- All modules & features</li>
                        <li>- Unified commitees</li>
                        <li>- Unlimited roles creation</li>
                    </ul>
                </Card>
            </div>

            <div className={styles.add}>
                <h5>Add more users</h5>
                <p><span>NGN99,999</span> per hour</p>

                <p className={styles.range}> 0 <span>&#62;1000</span></p>
                <input type='range' id="range" name="range" min='' max='' />
            </div>

            <section className={styles.modules}>
                <div className={styles.header}>
                    <p>ALL MODULES</p>
                    <hr />
                </div>
    
                <div className={styles.links}>
                    <ModuleLink Svg={Module1Svg}> Governace <br/> Portal</ModuleLink>
                    <ModuleLink Svg={Module2Svg}> Coperate <br/> Universe</ModuleLink>
                    <ModuleLink Svg={Module3Svg}> Contract <br/> Domain</ModuleLink>
                    <ModuleLink Svg={Module4Svg}> Investor <br/> Relations</ModuleLink>
                    <ModuleLink Svg={Module5Svg}> Dispute <br/> Portfolio</ModuleLink>
                    <ModuleLink Svg={Module6Svg}> Minute <br/> Book</ModuleLink>
                    <ModuleLink Svg={Module3Svg}> Reporting <br/> Tool</ModuleLink>
                    <ModuleLink Svg={Module2Svg}> Atendance <br/> Register</ModuleLink>
        
                </div>

            </section>

            <div className={styles.end}>
               <button>Go Back</button> 
               <button>Continue</button> 
            </div>
        </main>
    )
};

export default Main;


