
export default function Navbar() {
    return (
        <>
            <nav className="w-[70vw] h-fit p-4 flex justify-center items-center text-sm mx-auto">
                <ul className="w-[50%] h-full flex justify-start items-center gap-6">
                    <li>
                        <img src="/images/accredian_logo.png" className="w-28" />
                    </li>
                    <li>
                        <button className="bg-[#1A73E8] text-white px-4 py-2 rounded-md cursor-pointer"> Courses </button>
                    </li>
                </ul>

                <ul className="w-[50%] h-full flex justify-end items-center gap-6">
                    <li className="text-sm font-medium"> Refer & Earn </li>
                    <li className="text-sm font-medium"> Resources </li>
                    <li className="text-sm font-medium"> About Us </li>
                    <li>
                        <button className="bg-[#94A3B833] font-medium px-4 py-2 rounded-md cursor-pointer"> Login </button>
                    </li>
                    <li>
                        <button className="bg-[#1A73E8] text-white px-4 py-2 rounded-md cursor-pointer"> Try for free </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
