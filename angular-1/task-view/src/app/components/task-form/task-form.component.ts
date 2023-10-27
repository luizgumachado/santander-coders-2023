import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateLessThanValidator } from 'src/app/validators/dateLessThan.validator';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter();

  public newTask = new Task();

  public formTask: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    description: ['', Validators.required],
    date: ['', [Validators.required, dateLessThanValidator()]],
    status: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  submitTask() {
    this.addTask.emit(this.formTask.value);
    this.formTask.reset();
  }
}
