"use client";
import Image from "next/image";
import { BackgroundGradient } from "./background-gradient";



const MainCard = ({course}) => {
    return (
        <div>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                    src={`/jordans.webp`}
                    alt="jordans"
                    height="400"
                    width="400"
                    className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                   {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {course.description.length ? (course.description.length > 200 ? course.description.slice(0, 200) + '...' : course.description) : ''}

                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        ${course.price}
                    </span>
                </button>
            </BackgroundGradient>
        </div>
    );
};

export default MainCard;