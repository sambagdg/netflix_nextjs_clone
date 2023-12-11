/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, Play} from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";

interface iAProps{
    title: string;
    overview: string;
    youtubeUrl: string;
    id: number;
    age: number;
    duration: number;
    releaseDate: number;
}

export default function MovieButtons({age,duration, id, overview, releaseDate, title, youtubeUrl}: iAProps) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button onClick={()=> setOpen(true)} className="text-base font-meduim bg-transparent text-white hover:bg-gray-300 hover:text-black">
                <Play className="mr-2 h-6 w-6"/>Lecture
            </Button>
            <Button className="text-base font-meduim bg-transparent text-white hover:bg-gray-300 hover:text-black">
                <InfoIcon className="mr-2 h-6 w-6" /> Plus d'infos
            </Button>
            <PlayVideoModal state={open} changeState={setOpen} age={age} duration={duration} key={id} overview={overview} release={releaseDate} title={title} youtubeUrl={youtubeUrl} />
        </>
    )
}