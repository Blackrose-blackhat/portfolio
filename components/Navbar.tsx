'use client'
import React from 'react'
import { useState } from 'react'
import {Link} from "react-scroll/modules"
import { useTheme } from 'next-themes'
import {RiMoonFill, RiSunLine} from "react-icons/ri"
interface NavItems {
    label:string
    page:string
}
const NAV_ITEMS : Array<NavItems> = [
    {
        label:"Home",
        page:"Home"
    },
    {
        label:"About",
        page:"about"
    },
    {
        label:"Projects",
        page:"projects"
    },
]

const Navbar = () => {
    const {systemTheme , theme ,setTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar,setNavbat] = useState(false);
  return(
    <header className='w-full mx-auto px-4 bg-white shadow top-0 z-50 dark:bg-stone-950 dark:border-b dark:border-stone-600'>
    <div className='justify-between md:items-center md:flex'>
        <div >
            <div className='md:py-5 md:block'>
            <h2 className='text-2xl font-semibold'>Mushraf Parwej</h2>
            </div>
        </div>
        <div className='md:flex md:space-x-6'>
            {NAV_ITEMS.map((item,index) => {
                return <a key={index}>{item.label}</a>
            })}
            {currentTheme === "dark" ? (
                <button 
                onClick={() =>setTheme("light")} 
                className='bg-slate-100 rounded-xl'
                >
                    <RiSunLine size={25 } color='black' />
                </button>
            ):(
                <button 
                onClick={()=> setTheme("dark")}
                className='bg-slate-100 rounded-xl '
                >
                    <RiMoonFill size={25} color='black' />
                </button>
            )
        }
        </div>
    </div>
  </header>
  ) 
}

export default Navbar