import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  imports: [CommonModule],
  templateUrl: './produits.html',
  
})
export class Produits {
  produits : string[];



  constructor() {
this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
}
}