export class Soliste {

    idSoliste:number;
    nom:string;
    prenom:string;
    dateNaissance:Date;
    nationalite:string;

    constructor(idSoliste:number, nom:string, prenom:string, dateNaissance:Date, nationalite:string) {
        this.idSoliste = idSoliste;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.nationalite = nationalite;
    }
}
