import React,{ useContext } from "react";
import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum }  from  'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { shortenAddress } from "../../utils/shortenAddress.js";

import { AuthentificationContext } from "../context/AuthentificationContext";

import { Loader } from './';

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input =({placeholder, name , type , step , value , handleChange  }) =>(
<input
placeholder={placeholder}
type = {type}
step= "0.0001"
value={value}
onChange={(e) => handleChange(e, name)}
className="my-2 w-full rounded-sm outline-none text-white border-none p-2 bg-transparent white-glassmorphism" />
);
const Welcome =() =>{
    const {currentAccount , connectWallet ,formData , sendAuthentification , handleChange,getDipCount, dipCount,dip } = useContext(AuthentificationContext);
    getDipCount();
    const handleSubmit =(e)=>{
        const { nom , pre , mat , niv , spec } = formData;
        e.preventDefault();
        if (!nom || !pre || !mat|| !niv || !spec) return;
        sendAuthentification();
}


return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Bienvenue  ,On Securise<br/> Et On Authentifie vos diplômes          </h1>
          
          {!currentAccount &&  (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillAlipayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              encadreur: Mr.Chikeb <br/>CHAYEB
            </div>
            <div className={companyCommonStyles}>Chef de Jury :</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Etudiant: Faicel <br/> SAOUDI
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Javascript
            </div>
            <div className={companyCommonStyles}>Web 3.0</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Nom Etd" name="nom" type="text" handleChange={handleChange} />
                        <Input placeholder="Prenom Etd" name="pre" type="text" handleChange={handleChange} />
                        <Input placeholder="Matricule" name="mat" type="number" handleChange={handleChange} />
                        <Input placeholder="niveau" name="niv" type="text" handleChange={handleChange} />
                        <Input placeholder="Specialité" name="spec" type="text" handleChange={handleChange} />
                       
            <div className="h-[1px] w-full bg-gray-400 my-2" />


    <button
      type="button"
      onClick={handleSubmit}
      className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
    >
      Send now
    </button>
 
</div>
</div>
</div>
</div>
);
};

export default Welcome;
