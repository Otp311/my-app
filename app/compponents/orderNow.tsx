'use client'

import React from 'react'
import styles from './link.module.css';

const OrderNow = () => {
    return (
        <div className={styles.order}>
            <button className={styles.button}>
                Order Now
            </button>
        </div>
    )
}

export default OrderNow