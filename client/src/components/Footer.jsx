import React, { useState, useContext } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { MenuItems } from './NavBarItems';
import logo from '../../images/images/Logo_reseaux_iset.svg';
import  { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Welcome from './Welcome';
import ListeDips from './ListeDips';
import ValiderDiplomes from './ValiderDiplomes';
import Transactions from './Transactions';
import Accueil from './accueil';
import Login from './Login';



const NavbarItem = ({title,classProps}) =>{
    return(
        <li className={'mx-4 cursor-pointer ${classProps}'}>
            {title}
        </li>
    );
}

const Footer =() =>{
    return(
            <Router>
            <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
              <nav className="w-full flex md:justify-center justify-between items-center p-4">
              <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <a href='https://isetso.rnu.tn/' target="_blank"><img src={ logo } alt='logo'  className="w-32 cursor-pointer" ></img></a>
              </div>
              <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>

              <li id="liste"><Link to="/Accueil" className={'navbar-brand mx-4 cursor-pointer ${classProps}'}> <button type="button" className="btn btn-primary">Accueil</button> </Link></li>
                <li id="liste"><Link to="/Welcome" className={'navbar-brand mx-4 cursor-pointer ${classProps}'}> <button type="button" className="btn btn-primary">Ajouter un Diplome</button> </Link></li>
                
                <li id="liste"><Link to="/ListeDips" className={'vmx-4 cursor-pointer ${classProps}'}> 
                <button type="button" className="btn btn-primary">Lister les diplomes</button>
  
                </Link></li>
                <li id="liste"><Link to="/ValiderDiplomes" className={'navbar-brand mx-4 cursor-pointer ${classProps}'}> <button type="button" className="btn btn-primary">Valider </button> </Link></li>
                <li id="liste"><Link to="/Transactions" className={'navbar-brand mx-4 cursor-pointer ${classProps}'}> <button type="button" className="btn btn-primary">Verifier Authenticité</button> </Link></li>
              </ul>
                  
              </nav>
                <div className="'flex relative'">
                  <div className="row">
                <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<Accueil />} />

                <Route path="/Accueil" element={<Accueil />} />
                  <Route path="/Welcome" element={<Welcome />} />
                  <Route path="/ListeDips" element={<ListeDips />} />
                  <Route path="/ValiderDiplomes" element={<ValiderDiplomes />} />
                  <Route path="/Transactions" element={<Transactions />} />
                </Routes>
                  </div>
                  </div>
                  </div>
                  </div>
            </Router>
         
         
    );
}
export default Footer;