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
  console.debug("liste" + JSON.stringify(liste));
  console.debug('checked: ' + ev.checked);
  this.afDB.object('Tasks/' +ev.key + '/checked/').set(ev.checked);
}

deleteTask(task: any) {
	this.afDB.list('Tasks/').remove(task.key);
}


}
