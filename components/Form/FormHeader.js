import OfficialLogo from '../Logo/OfficialLogo'
import styles from './Form.module.css'

const FormHeader = ({title,subtitle}) => {
    return (
        <>
                <div className="w3-display-topmiddle w3-margin-top">
                    <OfficialLogo/>
                </div>
                <div className={styles.formTitle}>
                    <span>{title}</span>
                </div>
                <div className={styles.formSubtitle}>
                    <span>{subtitle}</span>
                </div>
        </>
    )
}
export default FormHeader