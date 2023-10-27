import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent {
  @Input() task = new Task();
  @Output() closeDetails = new EventEmitter();

  close() {
    this.closeDetails.emit();
  }
}
