//projet firebase : todolist-bbcb5b
import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentDate: string;
  myTask ='';
  addTask: boolean;
  tasks= [];
  checkedBox = false;
  deleteAll= false;
  selectedItems = [];

  constructor(
    public afDB: AngularFireDatabase,
  ) {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    this.currentDate = date.toLocaleDateString('fr-FR', options);
    this.getTasks();
  }

  addTaskToFirebase() {
    this.afDB.list('Tasks/').push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false
    });
    this.showForm();
  }

showForm() {
  this.addTask = !this.addTask;
  this.myTask = '';
}

getTasks(){
  this.afDB.list('Tasks/').snapshotChanges(['child_added', 'child_removed']).subscribe(action => {
    this.tasks = [];
    action.forEach(action => {
      this.tasks.push({
        key: action.key,
        text: action.payload.exportVal().text,
        hour: action.payload.exportVal().date.substring(11,16),
        checked: action.payload.exportVal().checked
      });
    });
  });
}

changeCheckState(ev: any){
  console.debug(this.tasks.length)
  var liste = [];
  for (let i=0; i < this.tasks.length; i++){
    if(this.tasks[i].checked === true){
      liste.splice(i, 0, this.tasks[i])
    }
  }
  this.selectedItems=liste
  console.debug("liste" + JSON.stringify(this.selectedItems));
  // console.debug('checked: ' + ev.checked);
  this.afDB.object('Tasks/' +ev.key + '/checked/').set(ev.checked);
}

deleteTask(task: any) {
	// this.afDB.list('Tasks/').remove(task.key);
  console.debug(this.selectedItems.length)
  for (let i=0; i<this.selectedItems.length; i++){
  this.afDB.list('Tasks/').remove(this.selectedItems[i].key);
  console.debug(this.selectedItems[i]);
  }
}

selectAll(){
  for(let i=0; i< this.tasks.length; i++){
    this.tasks[i].checked = !this.tasks[i].checked;
    console.debug(this.deleteAll)
    if(this.tasks[i].checked === true){
      // this.deleteAll = true;
      this.selectedItems.splice(i, 0, this.tasks[i])
      console.debug("deleteAll" + this.deleteAll);
      if(this.selectedItems.length === this.tasks){
        this.deleteAll = true
      }
    }
    // else {
    //   this.deleteAll = false;
    // }

  }
}


}
