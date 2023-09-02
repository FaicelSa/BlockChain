import React,{ useContext } from "react";
import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum }  from  'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { AuthentificationContext } from "../context/AuthentificationContext";

import { Loader } from '.';


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input =({placeholder, name , type , value , handleChange }) =>(
<input
placeholder={placeholder}
type = {type}
step= "0.0001"
value={value}
onChange={(e) => handleChange(e, name)}
className="my-2 w-full rounded-sm outline-none text-white border-none p-2 bg-transparent white-glassmorphism" />
);
const Transactions =() =>{
    const {getDiplomeInfo , change,cherchForm ,dip} = useContext(AuthentificationContext);
    const handleSubmit =(e)=>{
        const { id_etd } = cherchForm;
        e.preventDefault();
        if (!id_etd) return;
        getDiplomeInfo(id_etd);

        }

return (
  <div className="flex flex-1 justify-center w-full items-center flex-col ">
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
        <h1 className="text-1xl sm:text-2xl  text-gradient py-2 ">
         Verifier l'authenticité d'un diplome         </h1>
        </div>
    
    <div className="flex flex-row justify-start items-center gradient-bg-transactions p-3 m-2  hover:shadow-xl">
      
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      
        

        <div className="flex flex-col flex-1 items-center justify-center w-full mf:mt-0 mt-10">
          
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <p>Entrer Le hash du diplome à verifier</p>
                        <Input placeholder="id_etd" name="id_etd" type="number" handleChange={ change } />
                        
                       
            <div className="h-[1px] w-full bg-gray-400 my-2" />


    <button
      type="button"
      onClick={handleSubmit}
      className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
    >
Verifier    </button>
    
 
</div>
</div>
{dip[7]==true &&(
<div className="p-5 sm:w-full w-full flex flex-col justify-center items-center blue-glassmorphism">
<h1 className=" sm:w-full w-full  border-[#3d4f7c] flex flex-col justify-center items-center white-glassmorphism">Diplome  Authentique</h1>
<div className="grid sm:grid-cols-5 grid-cols-2 w-full mt-10">

            <div className={`rounded-tl-2xl ${companyCommonStyles}`}> Nom  </div>
            <div className={companyCommonStyles}>Prenom</div>
            <div className={companyCommonStyles}>Matricule</div>
            <div className={companyCommonStyles}>Specialité</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>Niveau </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}> {dip[1]}  </div>
            <div className={companyCommonStyles}>{dip[2]}</div>
            <div className={companyCommonStyles}>{dip[3].toNumber()}</div>
            <div className={companyCommonStyles}>{dip[4]}</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
            {dip[5]}
            </div>
          </div>

    </div>)}
    {!dip[7] &&(
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <h1>Diplome non Authentique</h1>
        </div>
    )}
</div>
</div>
</div>
);}

export default Transactions;