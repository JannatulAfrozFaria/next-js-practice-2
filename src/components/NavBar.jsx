"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Service",
            path: '/service'
        },
        {
            title: "Port Folio",
            path: '/portfolio'
        },
        {
            title: "Blogs",
            path: '/blogs'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "Categories",
            path: '/categories'
        },
        {
            title: "Dashboard",
            path: '/dashboard'
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
            <div className='bg-blue-300 p-6'>
                <ul className="flex gap-4 items-center">
                    {
                        dashboardLinks?.map((link)=>
                            <Link className={`${pathName === link.path && "text-blue-700 font-semibold" }`}  key={link.path} href={link.path} >{link.title} </Link>
                        )
                    }
                    <button className="text-white bg-blue-600 p-2 rounded-md"> <Link href={'/'} >Go to Home</Link> </button>
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
                <h6 className="text-3xl text-sky-200"> <span className="text-purple-200">Next</span> Practice <span className="text-purple-300">2</span> </h6>
                <ul className="flex gap-4 justify-between items-center text-yellow-950">
                    {
                        links?.map((link)=> <Link className={`${pathName === link.path && "text-purple-200 font-semibold" }`} key={link.path} href={link.path} > {link.title} </Link> )
                    }
                </ul>
                <button onClick={handler} className="text-sky-800 bg-blue-200 p-2 rounded-md">Login</button>
            </nav>
        </div>
    );
};

export default NavBar;