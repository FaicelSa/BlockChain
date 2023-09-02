import React, { useEffect, useState} from 'react';
import { ethers } from 'ethers';
import {contractABI , contractAddress } from '../../utils/constants';
import { useLayoutEffect } from 'react';
import { id } from 'ethers/lib/utils';
export const AuthentificationContext = React.createContext();
const {ethereum } = window;
const getEthereumContract = () =>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
    }
    export const AuthentificationProvider = ({children}) =>{
      
        const [currentAccount , setCurrentAccount ] = useState("")
        const [formData, setformData] = useState({nom : "" , pre : "" , mat : "" , niv : "" , spec : "" });
        const [cherchForm, setcherchForm] = useState({id_etd : ""});
        const [login_form, setlogin_form] = useState({user:'',pass:''});
        const [isLoading, setIsLoading] = useState(false);
        const [dipCount, setdipCount] = useState(localStorage.getItem('dipCount'));
        const [verif, setverif] = useState("");
        const [dip, setdip] = useState([]);
        const [diplomes, setdiplomes] = useState([]);
        const [id_vl, setid_vl] = useState("");
        const [id_sd, setid_sd] = useState("");
        const [dipV, setdipV] = useState([]);
        const [EtdLogin, setEtdLogin] = useState(false);
        const [AdminLogin, setAdminLogin] = useState(false);
        const [EntrLogin, setEntrLogin] = useState(false);
        const handleChange = (e, name) => {
            setformData((prevState) => ({...prevState , [name]: e.target.value}));
        };
        const changeLog = (a, nom) => {
          setlogin_form((prevState) => ({...prevState , [nom]: a.target.value}));

      };
        const change = (a, nom) => {
          setcherchForm((prevState) => ({...prevState , [nom]: a.target.value}));

      };
      const LogPwd=[
        {
          login:'etd',
          pass:'etd'
        },
        {
          login:'admin',
          pass:'admin'
        },
        {
          login:'entr',
          pass:'entr'
        }
      ];
      function verifierLogin(){
      const {user,pass}=login_form;
      if (user==LogPwd[0].login){
        setEtdLogin(true);
        setAdminLogin(false);
        setEntrLogin(false);
      } else if(login_form==LogPwd[1]){
        setEtdLogin(false);
        setAdminLogin(true);
        setEntrLogin(false);      
      }else if(login_form==LogPwd[2]){
          setEtdLogin(false);
          setAdminLogin(false);
          setEntrLogin(true);      };
          console.log('1',EtdLogin);
          console.log('2',AdminLogin);
          console.log('3',EntrLogin);
          console.log(LogPwd[1].login);
      };
      //charger les diplomes
        async function checkIfWalletIsConnected() {
            try {
                if (!ethereum)
                return alert("Please install MetaMask.");
            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                
              } else {
                console.log("No accounts found");
              }
            } catch (error) {
                console.log(error);
              throw new Error("No ethereum object");
            }
            
        }
        const connectWallet = async () => {
            try {
              if (!ethereum) return alert("Please install MetaMask.");
        
              const accounts = await ethereum.request({ method: "eth_requestAccounts", });
        
              setCurrentAccount(accounts[0]);
              window.location.reload();
            } catch (error) {
              console.log(error);
        
              throw new Error("No ethereum object");
            }
          }
          const getDipCount= async ()=>{
            try {
              if (!ethereum) return alert("Please install MetaMask.");
                const contract= getEthereumContract();
                const res = await contract.diplomeCount();
                setdipCount(res.toNumber());

                
              
            } catch (error) {
                console.log(error);
                throw new Error("No ethereum object");
            }
          };
          const getValides = async()=>{
            try {
              if (!ethereum) return alert("Please install MetaMask.");
                const contract= getEthereumContract();
                setdipV([]);
                for (var i = 0 ; i<dipCount ; i++){
                const d = await contract.diplomes(i);
                if (d.etud_nom.length > 0 && !d.valide  ){
                  dipV.push(d);
                }                }
                setdipV(dipV);
                console.log(dipV.length);
            } catch (error) {
                console.log(error);
                throw new Error("No ethereum object");
            }
          };
          const getAllDiplomeInfo = async()=>{
            try {
              if (!ethereum) return alert("Please install MetaMask.");
                const contract= getEthereumContract();
                getDipCount();
                setdiplomes([]);
                for (var i = 0 ; i<dipCount ; i++){
                const d = await contract.diplomes(i);
                diplomes.push(d)
                }
                setdiplomes(diplomes);
                } catch (error) {
                console.log(error);
                throw new Error("No ethereum object");
            }
          };
          
          const getDiplomeInfo = async(id_etd)=>{
           
            try {
              if (!ethereum) return alert("Please install MetaMask.");
                //recuperer les données du Formulaire
                const contract= getEthereumContract();
                const dip = await contract.diplomes(id_etd);
              
                getDipCount();
                setdip(dip);
                console.log(dip);
              
            } catch (error) {
                console.log(error);
                throw new Error("No ethereum object");
            }
          };
          
      
         const validerDiplome = async()=>{
          try {
            if (!ethereum) return alert("Please install MetaMask.");
            const contract = getEthereumContract();
            const vald = await contract.validerDiplome(id_vl);
            setIsLoading(true);
                console.log('Loading - ');
                await vald.wait();
                setIsLoading(false);
                console.log('Success - ');
                console.log(id_vl.toString());
                
          } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
          }
         }
         const suppDiplome = async()=>{
          try {
            if (!ethereum) return alert("Please install MetaMask.");
            const contract = getEthereumContract();
            const vald = await contract.delDiplome(id_sd);
            setIsLoading(true);
                console.log('Loading - ');
                await vald.wait();
                setIsLoading(false);
                console.log('Success - ');
                getDipCount();
                console.log(dipCount);

          } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
          }
         }
                              const supprimerDiplome = async()=>{
                                try {
                                  if (!ethereum) return alert("Please install MetaMask.");
                                  const c = getEthereumContract();
                                  console.log(c);
                                  const vald = await c.delDiplome(id_sd);
                                  setIsLoading(true);
                                      console.log('Loading - ');
                                      await vald.wait();
                                      setIsLoading(false);
                                      console.log('Success - ');
                                      
                                } catch (error) {
                                  console.log(error);
                                  throw new Error("No ethereum object");
                                }
                              }
      
          const sendAuthentification = async () =>{
            try {
                if (!ethereum) return alert("Please install MetaMask.");
                //recuperer les données du Formulaire
                const { nom , pre , mat , niv , spec } = formData;
                const contract = getEthereumContract();
                const authentificationHash = await contract.createDiplome(nom,pre,mat,spec,niv);

                setIsLoading(true);
                console.log('Loading - {authentificationHash.hash}');
                await authentificationHash.wait();
                setIsLoading(false);
                console.log('Success - ${authentificationHash.hash}');
                console.log(authentificationHash.hash);
                const x= await contract.diplomeCount();
                setdipCount(x.toNumber());

            } catch (error) {
                console.log(error);
                throw new Error("No ethereum object");
            }
          }
        useEffect(()=> {
            checkIfWalletIsConnected();
        },[]);
        return(
            <AuthentificationContext.Provider
            value={{
                connectWallet,
                currentAccount,
                formData ,
                setformData ,
                handleChange ,
                change,
                changeLog,
                sendAuthentification,
                cherchForm,
                setcherchForm,
                verif,
                dipCount,
                getDiplomeInfo,getAllDiplomeInfo,
                getDipCount,
                getValides,
                dip,dipV, setdipV,
                diplomes,
                setdiplomes,id_vl, setid_vl,validerDiplome,
                id_sd, setid_sd, suppDiplome,supprimerDiplome,
                login_form, setlogin_form,
                EtdLogin,setEtdLogin,
                EntrLogin,setEntrLogin,
                AdminLogin,setAdminLogin,
                verifierLogin
                }}>
                { children }
            </AuthentificationContext.Provider>
        );

};
