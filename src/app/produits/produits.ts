import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.html',

})
export class Produits {
  produits: Produit[] = [];


  constructor(private produitService: ProduitService) {
    //this.produits = this.produitService.listeProduits();
  }

  ngOnInit(): void {
    this.chargerProduits();
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

chargerProduits(){
this.produitService.listeProduit().subscribe(prods => {
console.log(prods);
this.produits = prods;
});
}



  supprimerProduit(p: Produit) {
  let conf = confirm("Etes-vous sûr ?");
  if (conf && p.idProduit !== undefined) {
    this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
      console.log("produit supprimé");
      this.chargerProduits();
    });
  }
}


}