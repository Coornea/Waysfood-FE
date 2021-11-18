import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <h3 className={styles.footerTitle}>About Us</h3>
            <p></p>
            <div className={styles.sosmedContainer}>
                <div className={styles.sosmedContent}>
                    <img src="" alt="" />
                    <p>Facebook</p>
                </div>
                <div className={styles.sosmedContent}>
                    <img src="" alt="" />
                    <p>Intagram</p>
                </div>
                <div className={styles.sosmedContent}>
                    <img src="" alt="" />
                    <p>Whatsapp</p>
                </div>
            </div>
        </div>
    )
}
