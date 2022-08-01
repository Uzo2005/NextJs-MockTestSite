import Image from 'next/image'
import styles from './Logo.module.css'

const OfficialLogo = () => {
    return (
        <Image src="/images/logo.jpg" alt='EdUSA Logo' height={100} width={100} className={styles.logo} />
    )
}

export default OfficialLogo