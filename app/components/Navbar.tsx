"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

interface linksProps{
    name: string;
    href: string;
}

const links: linksProps[] = [
    { name: "Accueil", href: "/home"},
    { name: "Émissions", href: "/home/shows"},
    { name: "Films", href: "/home/movies"},
    { name: "Récemment ajouté", href: "/home/recently"},
    { name: "Ma liste", href: "/home/user/list"},
]

export default function Navbar() {
    const pathName = usePathname();
    return (
        <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <div className="flex items-center">
                <Link href="/home" className="w-28">
                    <Image src={Logo} alt="Netflix logo" priority />
                </Link>
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathName === link.href ? (
                                <li>
                                    <Link href={link.href} className="text-gray-100 font-semibold text-sm">{link.name}</Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href={link.href} className="text-gray-200 font-normal text-sm hover:text-gray-400 transition duration-700">{link.name}</Link>
                                </li>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-x-8">
                <Search className="w-5 h-5 font-bold cursor-pointer" />
                <Bell className="w-5 h-5 font-bold cursor-pointer" />
                <UserNav/>
            </div>
        </div>
    );
}