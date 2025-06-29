
export const Navbar =()=>{
    return(
        <>
        
        <div className="flex flex-row justify-between gap-4 text-white bg-slate-800 px-6 py-4">
            <h1 className="text-xl font-bold">MyCompany</h1>
            <ul className="flex flex-row gap-6">
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

        </>
    )
}