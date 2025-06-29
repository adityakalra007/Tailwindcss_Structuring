
export const CTA = () =>{
    return(
        <>
            <div className="grid grid-cols-2 gap-40 px-20 py-20 text-center bg-indigo-700">
                <div className="p-5 bg-white text-black rounded-full cursor-pointer transition-all duration-400 hover:scale-105">
                        <h1 className=" text-xl p-5">Start Your Project Now!</h1>
                        <p className="text-slate-800 p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eligendi!</p>
                </div>
                 <div className="p-5 bg-white text-black rounded-full hover:scale-105 cursor-pointer transition-all duration-400">
                        <h1 className="text-xl p-5">Start Your Project Now!</h1>
                        <p className="text-slate-800 p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eligendi!</p>
                </div>
            </div>
        </>
    )
}