import styles from './Dialogue.module.css'

const Dialogue = ({prompt, no, yes, nextLink}) => {
    return (
        <dialog className={styles.modal}>
            <span className={styles.prompt}>{prompt}</span>
            <button className={styles.no}>{no}</button>
            <a href={nextLink}><button className={styles.yes}>{yes}</button></a>
        </dialog>
        
    )
}

export default Dialogue