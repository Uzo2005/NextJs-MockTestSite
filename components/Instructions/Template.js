import OfficiaLogo from '../Logo/OfficialLogo'
import Instructions from "./Instructions"
import Advice from './Advice'
import NavButtons from './InstructionNavButtons'
import Dialog from '../Dialog/Dialog'
import {useRef} from 'react'


const Template = ({children, prevLink, nextLink}) => {
    const modal = useRef(null)

    const openModal = () => {
       modal.current.showModal();
      };
      const closeModal = () => {
        modal.current.close();
       };
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
                    <Instructions>
                        {children}
                    </Instructions>

                    <Advice
                        text="Rotate your device for a better view during this test!"
                    />
                </div>

                <NavButtons
                prevLink={prevLink}
                startTimer = {openModal}
                />
            </div>
    </div>
        
            <Dialog
                prompt="Are You Sure You Want To Start The Timer?"
                no ="Not Yet"
                yes="Am Sure!"
                pointer={modal}
                closeModal={closeModal}
                nextLink={nextLink}
            />
    
</main>
            
    );
}

export default Template;