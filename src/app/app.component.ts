import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataService } from './Services/data.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['row', 'name', 'serial', 'code'];
  dataSource = new MatTableDataSource([]);
  informationForm!: FormGroup

  constructor(
    public dataService: DataService,
     private fb: FormBuilder, 
     private toastr: ToastrService) { }


  ngOnInit(): void {
    this.dataSource.data = this.dataService.dataSource
    console.log(this.dataSource.data);
    this.createForm()
  }
  createForm() {
    this.informationForm = this.fb.group({
      type: [null],
      stage: [null],
      status: [null],
      owner: [null],
      title: [""],
      topic: [null],
      counterparty: [""],
      groupActivity: [null],
      finishedTasks: [""],
      request: [""],
      result: [null],
      informedIndividuals: [null],
      reference: [null],
      priorities: [null],
      startedDate: [null],
      endedDate: [null],
      discription: [""],
      editRelatedProcess: [false],
      sendMsg: [false],
      showAlert: [false],
      recordNextActivity: [false],
      typeOfActivity: [null],
    })
  }
  saveInformationForm(valuForm: any) {
    const model = {
      type: valuForm.type,
      stage: valuForm.stage,
      status: valuForm.status,
      owner: valuForm.owner,
      title: valuForm.title,
      topic: valuForm.topic,
      counterparty: valuForm.counterparty,
      groupActivity: valuForm.groupActivity,
      finishedTasks: valuForm.finishedTasks,
      request: valuForm.request,
      result: valuForm.result,
      informedIndividuals: valuForm.informedIndividuals,
      reference: valuForm.reference,
      priorities: valuForm.priorities,
      startedDate: valuForm.startedDate,
      endedDate: valuForm.endedDate,
      discription: valuForm.discription,
      editRelatedProcess: valuForm.editRelatedProcess,
      sendMsg: valuForm.sendMsg,
      showAlert: valuForm.showAlert,
      recordNextActivity: valuForm.recordNextActivity,
      typeOfActivity: valuForm.typeOfActivity,
      dataTable: this.dataSource.data
    }
    console.log(model);
    this.toastr.success('اطلاعات با موفقیت ذخیره شد!', 'Success');
  }
}
