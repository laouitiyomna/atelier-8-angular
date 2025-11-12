import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Categorie } from '../model/categorie.model';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
   apiURL: string = 'http://localhost:8090/produits/api';

  categories!: Categorie[];
  produits: Produit[]=[];
  produit!: Produit;





  constructor(private http : HttpClient) {
   
    /*this.produits = [
      { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.600, dateCreation: new Date("01/14/2011") },
      { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010") },
      { idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020") }];*/
  }


  listeProduit(): Observable<Produit[]>{
return this.http.get<Produit[]>(this.apiURL);
}

listeCategories():Observable<Categorie[]>{
return this.http.get<Categorie[]>(this.apiURL+"/cat");
}



  ajouterProduit( prod: Produit):Observable<Produit>{
return this.http.post<Produit>(this.apiURL, prod, httpOptions);
}


  supprimerProduit(id: number): Observable<void> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<void>(url, httpOptions);
  }

  consulterProduit(id: number): Observable<Produit> {
const url = `${this.apiURL}/${id}`;
return this.http.get<Produit>(url);}

 updateProduit(prod :Produit) : Observable<Produit>
{
return this.http.put<Produit>(this.apiURL, prod, httpOptions);
}

 

}

export { Produit };

