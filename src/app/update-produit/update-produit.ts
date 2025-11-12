import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../services/produit';
import { Categorie } from '../model/categorie.model';



@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.html', styles: ``
})

export class UpdateProduitComponent implements OnInit {

   categories!: Categorie[];
  updatedCatId!: number;

  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService) { }

 updateProduit() {
this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
this.router.navigate(['produits']); }
);
}



  ngOnInit() {
this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
 subscribe( prod =>{ this.currentProduit = prod; } ) ;
}

}