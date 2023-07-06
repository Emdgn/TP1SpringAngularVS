export class Concert {

    num!:number;
    nom!:string;
    date!:Date;

//  Lieu
//  Liste d'oeuvre

    
    constructor(num:number, nom:string, date:Date)
    {
        this.num=num;
        this.nom=nom;
        this.date=date;
    }
}
