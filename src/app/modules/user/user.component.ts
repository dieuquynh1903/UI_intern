import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl , } from '@angular/forms'
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : User = new User();
  empList : User[] = [];

  constructor(public formBuilder : FormBuilder, public empService : UserService) { }

  ngOnInit(): void {

    this.getAllUser();

    this.empDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      salary: [''],
      email: ['']
    });    

  }

  addUser() {
    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.salary = this.empDetail.value.salary;
    this.empObj.email = this.empDetail.value.email;

    this.empService.addUser(this.empObj).subscribe(res=>{
        console.log(res);
        this.getAllUser();
    },err=>{
        console.log(err);
    });

  }

  getAllUser() {
    this.empService.getAllUser().subscribe(res=>{
        this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editUser(emp : User) {
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['name'].setValue(emp.name);
    this.empDetail.controls['email'].setValue(emp.email);
    this.empDetail.controls['salary'].setValue(emp.salary);

  }

  updateUser() {

    this.empObj.id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.salary = this.empDetail.value.salary;
    this.empObj.email = this.empDetail.value.email;

    this.empService.updateUser(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllUser();
    },err=>{
      console.log(err);
    })

  }

  deleteUser(emp : User) {

    this.empService.deleteUser(emp).subscribe(res=>{
      console.log(res);
      alert('Employee deleted successfully');
      this.getAllUser();
    },err => {
      console.log(err);
    });

  }

}