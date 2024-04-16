'use client'


import React from 'react'
import styles from './link.module.css';
import Link from 'next/link'

const ViewMore = () => {
    return (
        <div className={styles.ViewMore}>
                <Link href="#">View More</Link>
              </div>
    )
}

export default ViewMore