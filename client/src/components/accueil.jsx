import React , {useContext} from "react";
import { AuthentificationContext } from "../context/AuthentificationContext";
import { AiFillAlipayCircle } from "react-icons/ai";


const Accueil =() => {
  const {currentAccount , connectWallet ,formData , sendAuthentification , handleChange,getDipCount, dipCount,dip } = useContext(AuthentificationContext);
  getDipCount();
  console.log(dipCount);
  const x = dipCount;
    
      return (
       <div>
       <div className="text-white">
        <br/>
          <h1> Welcome To Our Website</h1>
          <p>This is a project where we use blockchain to verify certfications</p>
        </div>
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
         <div className="text-white">
         <br/>
           <h1> Adresse Du Contrat</h1>
           <p>{currentAccount}</p>
         </div>
         <div className="text-white">
         <br/>
           <h1> Nombre de diplomes</h1>
           <p>{dipCount}</p>
         </div>
         </div>
      );
    };
  
  export default Accueil;