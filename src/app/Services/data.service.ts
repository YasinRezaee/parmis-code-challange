import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSource :any= [
    {row: 1, name: 'فروش شماره 1', serial: 526, code: 5858},
    {row: 2, name: 'فروش شماره 2', serial: 623, code: 1542},
];

dataSelectBox=[
  {id:1,name:"گروه 1"},
  {id:2,name:"گروه 2"},
  {id:3,name:"گروه 2"},
]
  constructor() { }
}
