import Image from 'next/image'
import React from 'react'
import styles from '../../styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
        <nav className={styles.navbar}>
            <Image className={styles.navbar__logo} src="/logo.png" alt="Dinotopia Logo" width={100} height={50} />
            <div className={styles.navbar__links}>
                <Link href="/">
                    <div className={styles.nav__link}>Home</div>
                </Link>
                <Link href="/encyclopedia">
                    <div className={styles.nav__link}>Encyclopedia</div>
                </Link>
                <Link href="/quiz">
                    <div className={styles.nav__link}>Quiz</div>
                </Link>
                <Link href="/timeline">
                    <div className={styles.nav__link}>Timeline</div>
                </Link>
                <Link href="/login">
                    <div className={`${styles['nav__link']} ${styles['nav__link--ghost']}`}>Login</div>
                </Link>
                <Link href="/signup">
                    <div className={`${styles['nav__link']} ${styles['nav__link--primary']}`}>Signup</div>
                </Link>

            </div>
        </nav>
  )
}

export default Navbar