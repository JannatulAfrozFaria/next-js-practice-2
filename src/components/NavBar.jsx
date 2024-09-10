"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "Posts",
            path: '/posts'
        },
    ]
    const dashboardLinks = [
        {
            title: "Create User",
            path: '/dashboard/createUser'
        },
        {
            title: "Profile",
            path: '/dashboard/profile'
        }
    ]
    const handler = () =>{
        router.push('/login')
    }
    if(pathName.includes('dashboard'))
        return (
        <div>
            <div className='bg-yellow-300 p-6'>
                <ul className="flex gap-4 items-center">
                    {
                        dashboardLinks?.map((link)=>
                            <Link className={`${pathName === link.path && "text-yellow-700 font-semibold" }`}  key={link.path} href={link.path} >{link.title} </Link>
                        )
                    }
                    <button className="text-white bg-yellow-600 p-2 rounded-md"> <Link href={'/'} >Go to Home</Link> </button>
                </ul>
            </div>
            <footer>
                Dashboard Footer
            </footer>
        </div>
        )
    return (
        <div>
            <nav className="bg-yellow-500 p-6 flex justify-between items-center">
                <h6 className=" text-xl md:text-3xl text-yellow-200"> <span className="text-yellow-800">Next</span> Meal<span className="text-yellow-800">2</span> </h6>
                <ul className="flex gap-4 justify-between items-center text-yellow-950">
                    {
                        links?.map((link)=> <Link className={`${pathName === link.path && "text-yellow-700 font-semibold" }`} key={link.path} href={link.path} > {link.title} </Link> )
                    }
                </ul>
                <button onClick={handler} className="text-white bg-yellow-700 p-2 rounded-md">Login</button>
            </nav>
        </div>
    );
};

export default NavBar;