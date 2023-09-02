import React , {useContext} from "react";
import { AuthentificationContext } from "../context/AuthentificationContext";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px]  justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const ListeDips =() =>{
    const { currentAccount,supprimerDiplome, dipCount,diplomes ,getAllDiplomeInfo,id_sd,setid_sd, suppDiplome,
      getDipCount,AdminLogin} = useContext(AuthentificationContext);
      getDipCount();

    const handleSubmit =(e)=>{
      e.preventDefault();
      if (!currentAccount) return;
      getDipCount();
      getAllDiplomeInfo();
      console.log(dipCount);
      
        
      
    }
    return(
      <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
        <div className="flex flex-col md:p-12 py-12 px-4">
        <button
        type="button"
        onClick={handleSubmit}
        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
      >
        lister tous les  diplomes 
      </button>
         {currentAccount ? (
          <div id="lv" className="text-white w-full mt-2  p-2   rounded-full ">
             <div id="content">
          <p> </p>
          
          <table className="table flex" border={3}>
            <thead>
              <tr>
                <th className={companyCommonStyles} scope="col">Id</th>
                <th className={companyCommonStyles} scope="col">Nom</th>
                <th className={companyCommonStyles} scope="col">Prenom</th>
                <th className={companyCommonStyles} scope="col">Specialite</th>
                <th className={companyCommonStyles} scope="col">Niveau</th>
                <th className={companyCommonStyles} scope="col">Matricule</th>
                <th className={companyCommonStyles} scope="col">Validé</th>
                <th  scope="col"></th>
              </tr>
            </thead>
            <tbody id="diplomeList">
              { diplomes.map((diplome, key) => {
                return(
                    <tr  className={companyCommonStyles}  key={key}>
                    
                    <th scope="row">{diplome.id.toString()}</th>
                    <td  className={companyCommonStyles} >{diplome.etud_nom}</td>
                    <td className={companyCommonStyles} >{diplome.etud_prenom}</td>
                    <td className={companyCommonStyles} >{diplome.specialite}</td>
                    <td className={companyCommonStyles} >{diplome.niveau}</td>
                    <td className={companyCommonStyles} >{diplome.matricule.toString()}</td>
                    <td className={companyCommonStyles} >{diplome.valide.toString()}</td>
                    <td>
                <button
                      name={diplome.id}
                      onClick={(event) => {
                        setid_sd(diplome.id)
                        supprimerDiplome(id_sd)
                      }}
                      className='bg-[#2953e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'
                      >
                      Supprimer
                    </button></td>
                  </tr>
                )
              }
              )}
                 
                </tbody>
          </table>
            </div>  
           </div>
             
          ) : (
            <h3 className="text-white text-3xl text-center my-2">
              connecter Votre Compte Pour Spprimer des Diplômes
            </h3>
            
          )}
                  
        </div>
      </div>
      );
     };
export default ListeDips;