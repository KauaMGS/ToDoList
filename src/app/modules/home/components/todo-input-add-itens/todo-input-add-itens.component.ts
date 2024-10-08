import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
  @Output() public emmitItemTaskList = new EventEmitter();

  public setItemTaskList: string = "";
  
  public submitItemTaskList(){
    if(this.setItemTaskList.trim()){
      this.emmitItemTaskList.emit(this.setItemTaskList);
      this.setItemTaskList = "";
    }
  }

}
