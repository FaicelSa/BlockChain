//import './LoginUi.css';
import React ,{useContext} from "react";
import { AuthentificationContext } from "../context/AuthentificationContext";

import { useNavigate, useParams } from "react-router-dom";
import profile from "../../assets/images/b.png";
import email from "../../assets/images/email.jpg";
import pass from "../../assets/images/password.jpg";

const Input =({placeholder, name , type , step , value , handleChange  }) =>(
  <input
  placeholder={placeholder}
  type = {type}
  step= "0.0001"
  value={value}
  onChange={(e) => handleChange(e, name)}
  className="my-2 w-full rounded-sm outline-none text-white border-none p-2 bg-transparent white-glassmorphism" />
  );
const Login=()=> {
  const {currentAccount,dipCount,getDipCount,login_form  ,changeLog ,verifierLogin } = useContext(AuthentificationContext);
  const handleSubmit =(e)=>{
    const { user,pass } = login_form;
    e.preventDefault();
    getDipCount();
    console.log(dipCount);
    if (!user || !pass) return;
      verifierLogin();
}
	let navigate = useNavigate();
  return (
  <div align="center" >

  	
    <div className="main">
	    
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Nom Utilisateur" name="user" type="text" handleChange={changeLog} />
                        <Input placeholder="Mot de Passe" name="pass" type="password" handleChange={changeLog} />
                       
                       
            <div className="h-[1px] w-full bg-gray-400 my-2" />


    <button
      type="button"
      onClick={handleSubmit}
      className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
    >
      Login
    </button>
 
</div>
</div>
       </div>
       

     </div>
    </div>
  </div>
  );
}

export default Login;