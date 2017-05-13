import { Injectable } from '@angular/core';
import { Business } from '../models/Business';
import { Category } from '../models/Category';
import { Item } from '../models/Item';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  businesses : FirebaseListObservable<Business[]>;
  categories : FirebaseListObservable<Category[]>;
  items : FirebaseListObservable<Item[]>;

  constructor(private _af: AngularFireDatabase ) {
    
  }

  getBusinesses(category : string = null){
    if ((category != null) && (category != '0')) {
      this.businesses = this._af.list('businesses', {
        query: { 
          orderByChild: 'category',
          equalTo: category
        }
      }) as
        FirebaseListObservable<Business[]>;
    } else {
      this.businesses = this._af.list('businesses') as
        FirebaseListObservable<Business[]>;
    }
    
    return this.businesses;   
  }

  getCategories(){    
    this.categories = this._af.list('categories') as
      FirebaseListObservable<Business[]>;
    return this.categories;
  }

  getItems(){
    this.items = this._af.list('items') as 
      FirebaseListObservable<Item[]>;
    console.log(this.items);
    return this.items;
  }

  addBusiness(business){
    return this.businesses.push(business);
  }

  updateBusiness(business){
    return this.businesses.update(business.$key, business);
  }

  deleteBusiness(key){
    return this.businesses.remove(key);
  }

}
