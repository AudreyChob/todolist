import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit{

  addListe: boolean = true;
  liste =[];
  article : string ;
  quantite: number;
  type : string[] = [
    "Epicerie",
    "Frais",
    "Boucherie",
    "Poissonnerie",
    "Maraicher",
    "Boisson",
    "Surgelés",
    "Entretien",
    "Cosmétique",
    "Autre",
  ];
  selectedType: string;
  checkedBox = false;
  deleteAll = false;
  selectItems =[];



  constructor(
    public afDB : AngularFireDatabase
  )
  {
    // this.liste= [];
    this.getListe();
  }

  ngOnInit(){
  }

  addArticleToFireBase(){
    this.liste=[];
    this.afDB.list('Liste/').push({
      article: this.article,
      quantite: this.quantite,
      selectedType: this.selectedType,
      checked: false,
    });
    this.showForm();
  }

  showForm(){
    this.addListe = !this.addListe;
    this.article = '';
    this.quantite = null;
  }

  getListe(){
    this.liste=[];
    this.afDB.list('Liste/').snapshotChanges(['child_added', 'child_removed']).subscribe(action => {
      action.forEach(action => {
        //console.log("heurer : "+ action.payload.exportVal().date.substring(11,16)),
        this.liste.push({
          key: action.key,
          article: action.payload.exportVal().article,
          //hour: action.payload.exportVal().date.substring(11,16),
          checked: action.payload.exportVal().checked,
          quantite: action.payload.exportVal().quantite,
          selectedType: action.payload.exportVal().selectedType,
        });
        console.debug(JSON.stringify(this.liste))
      });
    });
  }

  changeCheckState(ev: any){
    console.debug(this.liste.length)
    var items = [];
    for (let i=0; i < this.liste.length; i++){
      if(this.liste[i].checked === true){
        items.splice(i, 0, this.liste[i])
      }
    }
    this.selectItems=items
    console.debug("liste" + JSON.stringify(this.selectItems));
    console.debug('checked: ' + ev.checked);
    this.afDB.object('Liste/' +ev.key + '/checked/').set(ev.checked);
        if(this.selectItems.length >1){
          this.deleteAll = true
        }
        else{
          this.deleteAll = false;
        }
  }

  deleteMultipleArticles(item: any) {

    this.liste=[];
    for (let i=0; i<this.selectItems.length-1; i++){
      item = this.selectItems[i];
      this.afDB.list('Liste/').remove(this.selectItems[i].key);
    console.debug("this.selectedItem" + this.selectItems[i].key);
    // this.liste.splice(i,1)
    }
    this.deleteAll = false;
  }

  deleteArticle(item: any) {
    this.liste=[];
  	this.afDB.list('Liste/').remove(item.key);
  }

  displayTrashBtn(){
    if(this.selectItems.length >1){
      this.deleteAll = true
    }
  }

}
