import { Component, ViewChild, ElementRef } from '@angular/core';
import { Task } from 'src/app/models/task.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myDiv') detailDiv!: ElementRef;

  selectedTask: Task | null = null;
  clickedTasks: Task[] = [];
  taskList: Task[] = [];

  handleTask(task: Task) {
    this.selectedTask = task;
    setTimeout(() => {
      this.detailDiv.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 500);
  }

  onAddTask(task: Task) {
    this.taskList.push(task);
  }

  onClickTask(task: Task) {
    this.clickedTasks.push(task);
  }

  closeDetails() {
    this.selectedTask = null;
  }
}
