import Link from 'next/link'

const ExamNavButton = () => {
    return (
        
        <div className="w-fit h-7 p-1 bg-gray-800 hover:bg-gray-700  text-white font-semibold rounded-sm">
            <Link href="/">
                <a>
                    <button>Move to questions<span> 11 - 20 </span></button>
                </a> 
            </Link>
            
        </div>
            
    );
}

export default ExamNavButton;