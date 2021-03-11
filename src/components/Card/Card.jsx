
import React from 'react';
import styles from './Card.module.scss';


const Card = ({children}) =>{

    return (
        <div className={styles.card}>  
        <div className={styles.checked}>

        </div>   
        {children}
        </div>       
    )
};

export default Card;