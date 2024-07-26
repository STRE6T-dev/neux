'use client'

import Image from "next/image";
import homeImg from "public/home.jpg"


import { Work_Sans } from '@next/font/google';

const workSans = Work_Sans({
  weight: '700', // Bold
  subsets: ['latin'], // You can add other subsets if needed
});

export default function Home() {
  return (
    <div className="bg-dotted flex flex-col  sm:flex-row w-full  h-screen justify-items-center justify-center items-center gap-4">
  <div className="sm:w-1/2 lg:w-3/5 transition-all mt-1 flex flex-col">
    <h1 className="bg-gradient-to-br transition-all from-black from-[30%] to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none text-transparent text-balance sm:text-6xl md:text-7xl -translate-y-10">
      Launch your Learning Journey in Minutes
    </h1>

    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-3 group relative w-48 gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"></span>
      <p>Get Started</p>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
      </svg>
    </button>
  </div>
</div>
     );
}
