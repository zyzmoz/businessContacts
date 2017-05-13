import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from './services/firebase.service';
import { Business } from './models/business';
import { Category } from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  title : string;
  businesses : Business[];  
  categories : Category[];
  activeKey : string;
  appState: string;
  activeBusiness: any;
  
  constructor(private _afService : FirebaseService){    
    this.appState = 'default';    
    this.activeBusiness = <Business>{};

  }
  ngOnInit(){
    this._afService.getBusinesses().subscribe(res => {
      this.businesses = res;
    });

    this._afService.getCategories().subscribe(res => {
      this.categories = res;
    });

  }

  changeState(state, key){
    this.appState = state;
    if (key){
      this.activeKey = key;
    } else {
      this.activeKey = '';
    }
    if (state === 'default')
      this.activeBusiness = <Business>{};
  }

  filterCategory(category){
    this._afService.getBusinesses(category).subscribe(res =>{
      this.businesses = res;
    });
  }

  addBusiness(f: NgForm){
    var newBusiness = <Business>{};
    newBusiness = f.value;    
    newBusiness.created_at = new Date().toString();

    this._afService.addBusiness(newBusiness);

    this.changeState('default', '');  

  }

  showEdit(business){
    this.changeState('edit','');
    this.activeBusiness = business;
  }

  updateBusiness(f: NgForm){
    this._afService.updateBusiness(this.activeBusiness);
    this.changeState('default', '');
  }

  deleteBusiness(key){
    this._afService.deleteBusiness(key);
  }
}
