export class ChefOrchestre {

    numChef:number;
    nom:string;
    prenom:string;
    dateNaissance:Date;
    nationalite:string;
    cachet:number;
    commentaires:string;

    
    constructor(numChef:number, nom:string, prenom:string, dateNaissance:Date, nationalite:string, cachet:number, commentaires:string)
    {
        this.numChef = numChef;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.nationalite = nationalite;
        this.cachet = cachet;
        this.commentaires = commentaires;
    }




}
