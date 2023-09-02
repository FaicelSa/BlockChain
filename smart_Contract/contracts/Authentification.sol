// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;
contract Authentification {
    
    uint public diplomeCount = 0;
    uint cpt=0;
    
      string public      name = "Authentification Diplomes";
        

    struct Diplome {
        uint id;
        string etud_nom;
        string etud_prenom;
        uint matricule;
        string specialite;
        string niveau;
        address owner;
        bool valide;
        bytes32 hash_diplome;
    }
    mapping(uint => Diplome) public diplomes;
    event DiplomeCreated(
        uint id,
        string etud_nom,
        string etud_prenom,
        uint matricule,
        string specialite,
        string niveau,
        address owner,
        bool valide,
        bytes32 hash_diplome
    );
    event dipdel(uint s);
    event dipfound(
        uint id,
        string etud_nom,
        string etud_prenom,
        uint matricule,
        string specialite,
        string niveau,
        address owner,
        bool valide,
        bytes32 hash_diplome
    );

    event DiplomeValide(
	    uint id,
        string etud_nom,
        string etud_prenom,
        uint matricule,
        string specialite,
        string niveau,
        address owner,
        bool valide,
        bytes32 hash_diplome
	);
    
    function hash(uint _id, string memory etud_nom)
        public pure returns(bytes32)
    {
        return keccak256(abi.encodePacked(_id, etud_nom));
    }
    function createDiplome(string memory _etud_nom,string memory _etud_prenom, uint _matricule,string memory _specialite,string memory _niveau) public {
        require(bytes(_etud_nom).length > 0);
        require(bytes(_etud_prenom).length > 0);
        require(_matricule > 0);
        require(bytes(_specialite).length > 0);
        require(bytes(_niveau).length > 0);
      
        bytes32 _hash_diplome = hash(cpt,_etud_nom);
       diplomes[diplomeCount] = Diplome(cpt, _etud_nom,_etud_prenom, _matricule,_specialite,_niveau, msg.sender, false,_hash_diplome);

        diplomeCount++;
        cpt++;
        emit DiplomeCreated(cpt-1, _etud_nom,_etud_prenom, _matricule,_specialite,_niveau, msg.sender, false, _hash_diplome);
    }
    
     function getDipInfo(uint _id) public  view returns(Diplome memory){
    uint pos=diplomeCount+1;
      for (uint i = 0;i<cpt; i++){
        if ((diplomes[i].id == _id)&&(diplomes[i].owner != 0x0000000000000000000000000000000000000000)){
             pos = i;
        }
      }          return diplomes[pos];
    }
    
   
    function getHash(uint id) public view returns(bytes32){
        return diplomes[id].hash_diplome;
    }
    function validerDiplome(uint p) public returns (bool ){
       uint pos;
      for (uint i = 0; i<cpt ; i++ ){
        if (diplomes[i].id == p){
             pos = i;
        }
      }  
        Diplome memory _diplome = diplomes[pos];
	    _diplome.valide = true;
        diplomes[pos] = _diplome;
	    
	    // Trigger an event
	    emit DiplomeValide(p, _diplome.etud_nom,_diplome.etud_prenom, _diplome.matricule,_diplome.specialite,_diplome.niveau, msg.sender, true, _diplome.hash_diplome);
        return true;
	}
    function searchDiplome(uint _id) public view returns (bool) {
        uint pos;
      for (uint i = 0;i<cpt; i++){
        if (diplomes[i].id == _id){
             pos = i;
        }
      }  
       if (diplomes[pos].owner == 0x0000000000000000000000000000000000000000) revert();
	    return true;
    }
     function searchByHash(bytes32 _matricule) public  returns (uint ind) {
        for (uint i = 1 ; i < diplomeCount+1 ; i++){
            if (diplomes[i].hash_diplome == _matricule){
               
                emit dipfound(diplomes[i].id,
                    diplomes[i].etud_nom,
                    diplomes[i].etud_prenom,
                    diplomes[i].matricule,
                    diplomes[i].specialite,
                    diplomes[i].niveau,
                    diplomes[i].owner,
                    diplomes[i].valide,
                    diplomes[i].hash_diplome); 
                    return i;
            }
        }
    }
    function delDiplome(uint  p)  public returns (bool ){
	  uint pos;
      for (uint i = 0;i<cpt; i++){
        if (diplomes[i].id == p){
             pos = i;
        }
      }
      //delete diplomes[pos];
      for (uint i = pos;i<diplomeCount; i++){
        diplomes[pos]=diplomes[pos+1];
      }
        diplomeCount = diplomeCount-1;
        emit dipdel(pos);
	    return true;
    }
}