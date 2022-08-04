import OfficiaLogo from '../Logo/OfficialLogo'
import SingleInstruction from "./SingleInstructions"
import Advice from './Advice'
import NavButtons from './InstructionNavButtons'
import Dialogue from '../Dialogue/Dialogue'


const Instructions = () => {
    return (
    
        <main className="flex items-center justify-center -mt-5 ">
            <div className="w-[60%]">
                <section className="flex justify-center m-10">
                <OfficiaLogo/>
                </section>

                <div className=" bg-white shadow-lg rounded-lg p-5">
                    <div className= "text-blue-700 text-center font-bold text-lg p-3 mb-1 border-b-2 border-b-blue-400">
                        <span>Instructions</span>
                    </div>
                
                    <div className="pl-2 p-4">
                        <SingleInstruction
                            number='1.'
                            text = "This test is divided into FOUR SECTIONS and will last a total of 3 hours 10 minutes."
                            
                        />

                        <SingleInstruction
                            number='2.'
                            text="Once you have finished all of the sections you will get your Math and Reading scores."
                            
                        />

                        <SingleInstruction
                            number='3.'
                            text="You must complete(or skip) each section to unlock the next. You cannot 'save' a section for later, and once a section's timer has run out, you cannot go back to work on that section again."
                            
                        />

                        <SingleInstruction
                            number='4.'
                            text="The first section is Reading; it will last 65 minutes and has 52 questions."
                           
                        />

                        <SingleInstruction
                            number='5.'
                            text="ONCE YOU START THE TIMER, YOU CANNOT PAUSE THIS SECTION."
                           
                        />

                        <Advice
                            text="You may want to rotate your device for a better view during this test"
                        />
                    </div>

                    <NavButtons/>
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