import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { MenuItems } from './NavBarItems';
import logo from '../../images/images/Logo_reseaux_iset.svg';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({title,classProps}) =>{
    return(
        <li className={'mx-4 cursor-pointer ${classProps}'}>
            {title}
        </li>
    );
}
const Navbar  =() =>{
    const [toggleMenu, setToggleMenu] =useState(false);
    return(
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <a href='https://isetso.rnu.tn/' target="_blank"><img src={ logo } alt='logo'  className="w-32 cursor-pointer" ></img></a>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {MenuItems.map((item,index)=>
                    (<NavbarItem key={ index} title ={item.Title} href = {item.url} className={item.cName} />
                ))}
            </ul>
            <div className='flex relative'>
                {toggleMenu
                ?<AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=> setToggleMenu(false)}/>
                :<HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=> setToggleMenu(true)}/>}
                {toggleMenu && (
                    <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                     blue-glassmorphism text-white justify-start items-end animate-slide-in'>
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                        </li>
                        {MenuItems.map((item,index)=>
                    (<NavbarItem key={index} title ={item.Title} href = {item.url} className={item.cName}  classProps='my-2 text-lg'/>
                ))}
                    </ul>
                )}
            </div>
            <li className='bg-[#2953e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]' >
                Login
            </li>
        </nav>
    );
}
export default Navbar;