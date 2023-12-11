/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignInButton from "@/app/components/GithuSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/home");
    }
    return (
        <div className="mt-24 rounded-lg bg-black/70 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
            <form method="post" action="api/auth/signin">
                <h1 className="text-3xl font-semibold text-white">Connexion</h1>
                <div className="space-y-4 mt-5">
                    <Input 
                        type="email" 
                        name = "Email" 
                        placeholder="votre email" 
                        className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
                    />
                    <Button 
                        type="submit" 
                        variant={"destructive"} 
                        className="w-full bg-[#e50914]">Me connecter
                    </Button> 
                </div>
            </form>
            <div className="text-gray-500 text-sm mt-2">
                Vous n'êtes pas inscris ? <Link className="text-white hover:underline" href="/sign-up"> M'inscrire</Link>
            </div>
            <div className="flex w-full items-center justify-center gap-x-3 mt-6">
                <GithubSignInButton/>
                <GoogleSignInButton/>
            </div>
        </div>
    )
}