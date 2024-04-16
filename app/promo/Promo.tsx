'use client'

import React from 'react'
import cone from '../public/cone.jpg'
import styles from './promo/promo.module.css';
import Image from 'next/image'

const PromoPage = () => {
    return (
        <div className={styles.promopage}>
            <Image
            src={cone}
            alt='cone'
            style={{
                width: "100%", 
                height: '80%',
            }}
            
            />
        </div>
    )
}

export default PromoPage