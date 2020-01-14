import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EmployeeData } from '../shared/employee.data';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() data: EmployeeData[];
  @Input() department: string;

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();

  label: string;

  handleKey(event: any) {
    if (event.key === 'Enter') {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  calculate(num: number) {
    return fibonacci(num);
  }
}
