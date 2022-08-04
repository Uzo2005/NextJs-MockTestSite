


const ExamBody = () => {
    return (
    <div className="grid grid-cols-2 gap-[5px] m-[20px] cursor-pointer">
        <div className="bg-slate-300 rounded-sm leading-7
        text-justify h-[calc(100vh-80px)] 
        overflow-y-scroll scroll-smooth 
        scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-blue-200 
        touch-manipulation">
            <section className="p-4">
            </section>
        </div>
        <div className="bg-slate-200 rounded-sm leading-7 text-justify h-[calc(100vh-80px)] overflow-y-scroll 
        scroll-smooth scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-blue-200 
        touch-manipulation">
            <section  className="p-4">
            </section>
        </div>
    </div>
    )
}

export default ExamBody