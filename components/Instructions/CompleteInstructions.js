import OfficiaLogo from '../Logo/OfficialLogo'
import SingleInstruction from "./SingleInstructions"
import NavButtons from './InstructionNavButtons'
import Dialogue from '../Dialogue/Dialogue'
import styles from './Instructions.module.css'

const Instructions = () => {
    return (
    
        <main className={styles.body}>
            <div className={styles.instructionsBox}>
                <section className="w3-display-topmiddle">
                <OfficiaLogo/>
                </section>

                <div className={styles.infoBox}>
                    <div className= {styles.infoTitle}>
                        <span>Instructions</span>
                    </div>
                
                
                
                    <div className={styles.infoList}>
                        <SingleInstruction
                            number='1.'
                            text = "This test is divided into <b>FOUR SECTIONS</b> and will last a total of <b>3hours 10 minutes</b>."
                            styling= {styles.info}
                        />

                        <SingleInstruction
                            number='2.'
                            text="Once you have finished all of the sections you will get your Math and Reading scores."
                            styling= {styles.info}
                        />

                        <SingleInstruction
                            number='3.'
                            text="You must complete(or skip) each section to unlock the next.You cannot 'save' a section for later, and once a section's timer has run out, you cannot go back to work on that section again."
                            styling= {styles.info}
                        />

                        <SingleInstruction
                            number='4.'
                            text={`The first section is ${<b>Reading</b>}. It will last  ${<b>65 minutes</b>} and has ${<b>52 questions</b>}.`}
                            styling= {styles.info}
                        />

                        <SingleInstruction
                            number='5.'
                            text="ONCE YOU START THE TIMER, YOU CANNOT PAUSE THIS SECTION."
                            styling= {`${styles.info} ${styles.important}`}
                        />

                        <SingleInstruction
                            text="You may want to rotate your device for a better view during this test"
                            styling= {styles.warning}
                        />

                    </div>
                    <NavButtons
                        stylingButton = {styles.buttons}
                        stylingStart = {styles.start}
                        stylingExit = {styles.exit}
                    />

                    
                </div>
            
        </div>
        
                <Dialogue
                    prompt="Are You Sure You Want To Start The Timer?"
                    no ="Not Yet"
                    yes="Am Sure!"
                />
    </main>
    
    )
}

export default Instructions