import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() handleTask = new EventEmitter();
  @Output() clickedTask = new EventEmitter();

  columns = [
    { name: 'To Do', id: 'toDo' },
    { name: 'In Progress', id: 'inProgress' },
    { name: 'Done', id: 'done' },
  ];

  selectedTask(task: Task) {
    this.handleTask.emit(task);
  }

  clickTask(task: Task) {
    this.clickedTask.emit(task);
  }
}
