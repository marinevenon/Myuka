import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public nutriscore : string = '';
  public imagePath : string = '';
  public imageProduit : string = '' ;
  public ingredients : string = '' ;
  public allergenes : string = '';
  public nova : string = '' ;
  public imagePath2 : string = '';
  public hdp : string = '' ;
  public imagePath3 = '';
  public fabricant = '' ;
  public importation = '' ;

  champSaisi = new FormControl('')

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public affcherChampSaisi(){
    let val = this.champSaisi.value;
    return this.http.get('https://world.openfoodfacts.org/api/v0/product/' + val ).subscribe((data: any) => {
      this.nutriscore = data.product.nutriscore_grade ;
      this.imagePath = `assets/nutriscore${this.nutriscore}.png`;
      this.imageProduit = data.product.image_front_url;
      this.ingredients=data.product.ingredients_text;
      this.allergenes=data.product.allergens_from_ingredients;
      this.nova = data.product.nova_group;
      this.imagePath2 = `assets/NOVA_group_${this.nova}.svg`;
      this.hdp = data.product.ingredients_from_palm_oil_n;
      this.imagePath3 = `assets/HDP${this.hdp}.png`
      this.fabricant = data.product.countries_imported;
      this.importation = data.product.brand_owner_imported;
      
  }

    )}
    }
