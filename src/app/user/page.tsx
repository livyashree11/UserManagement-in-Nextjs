export default function User(){
    return(
        <>
        <div className="min-h-screen flex flex-col justify-center items-center bg-purple-100 ">
        <nav className="flex flex-row justify-items-center gap-5 list-none">
        <li className="hover:underline "><a href="/user/grid">Grid</a></li>
        <li className="hover:underline"><a href="/user/view">View</a></li>
        <li className="hover:underline"><a href="/user/createupdate">CreateUpdate</a></li>
        </nav>
        </div>
        </>
    )

}