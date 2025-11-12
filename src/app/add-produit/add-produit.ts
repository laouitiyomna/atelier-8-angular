import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-produit.html',

})
export class AddProduit implements OnInit {
  newProduit = new Produit();

  message: string = '';
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;



  constructor(private produitService: ProduitService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.produitService.listeCategories().
subscribe(cats => {this.categories = cats;
console.log(cats);
});

  }

 addProduit(){
this.produitService.ajouterProduit(this.newProduit)
.subscribe(prod => {
console.log(prod);
this.router.navigate(['produits']);
});
}

}
