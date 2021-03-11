
import React from 'react';
import styles from './ModuleLink.module.scss';

const ModuleLink =({children, Svg})=>{

    return (
        <div className={styles.body}>

        <div className={styles.icon}>{<Svg />}</div>
        <div>{children}</div>
        </div>
    )
};


export default ModuleLink;

