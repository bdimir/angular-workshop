import { Component, OnInit } from '@angular/core';
import { ListGenerator } from './shared/list-generator.service';
import { EmployeeData } from './shared/employee.data';
import { Names } from './shared/names';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  salesList: EmployeeData[];
  rndList: EmployeeData[];

  constructor(private generator: ListGenerator) {
  }

  ngOnInit() {
    this.salesList = this.generator.generate(Names, NumRange, 60);
    this.rndList = this.generator.generate(Names, NumRange, 60);
  }

  add(list: EmployeeData[], name: string) {
    list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  remove(list: EmployeeData[], node: EmployeeData) {
    list.splice(list.indexOf(node), 1);
  }
}
