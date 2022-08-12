import Image from "next/image"
import { useState } from "react"



const ExamBody = ({imageLink, questionsAndOptions}) => {

    return (
    <div className="grid grid-cols-2 gap-[5px] m-[20px] cursor-pointer">
        <div className="bg-slate-300 rounded-sm leading-7
        text-justify h-[calc(100vh-80px)] 
        overflow-y-scroll overflow-x-scroll scroll-smooth 
        scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-blue-200 
        touch-manipulation relative">
            <section className="p-4 h-[5000px] ">
            {imageLink.map((imageLinky,index)=>{
                         return (
                            <div key={index}>
                                <Image
                                    key={index}
                                    src={imageLinky}
                                    // width="720px"
                                    // height="300px"
                                    // layout="fill" 
                                    // objectFit="scale-down"
                                    // object-position = "left bottom"
                                    unoptimized  = {true}
                                    // priority={true}
                                    alt= 'Reading Passage'
                                />
                            </div>
                            
                         )
                    })}
            </section>
        </div>
        <div className="bg-slate-200 rounded-sm leading-7 text-justify h-[calc(100vh-80px)] overflow-y-scroll 
        scroll-smooth scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-blue-200 
        touch-manipulation">
            <section  className="p-4 ">
            {questionsAndOptions.map((questionsAndOptions,index)=>{
                         return (
                            <div key={index}>
                                <span>{index+1}</span><span>{questionsAndOptions.question}</span><br />
                                <label htmlFor="A">{questionsAndOptions.OptionA}</label>
                                <input type="radio" id="A" value="A" name={questionsAndOptions.question} /> <br />
                                <label htmlFor="B">{questionsAndOptions.OptionB}</label>
                                <input type="radio" id="B" value="B" name={questionsAndOptions.question} /> <br />
                                <label htmlFor="C">{questionsAndOptions.OptionC}</label>
                                <input type="radio" id="C" value="C" name={questionsAndOptions.question} /> <br />
                                <label htmlFor="D">{questionsAndOptions.OptionD}</label>
                                <input type="radio" id="D" value="D" name={questionsAndOptions.question} /> <br />
                            </div>
                        )
                    })}
                                

            </section>
        </div>
    </div>
    )
}

export default ExamBody