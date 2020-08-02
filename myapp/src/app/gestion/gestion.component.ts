import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import {NgModule} from '@angular/core';
import {FormsModule, FormGroup, FormBuilder} from '@angular/forms';
import { ControlValueAccessor } from "@angular/forms";
import { Directive } from "@angular/core";
import { ElementRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ApiService } from './api.service';
import { Router, ActivatedRoute } from '@angular/router';
//import {AlertService} from '../pages/authentication/auth-signin/alert.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
  providers: [ApiService]
})
export class GestionComponent implements OnInit {
	baseurl = 'http://127.0.0.1:8080'
	form: FormGroup;
	response;
	divpointe:Boolean;
	imageURL;
	message: any;
	returnUrl : String;
	private subscription: Subscription;
   
	  users = [{id: -1,lastName :'', firstName : '', emailId : ''}]
	  user = { id : -1 ,lastName :'', firstName : '', emailId : ''
  
	  }
	 cur = null ;
	constructor(private formBuilder: FormBuilder,private myap: ApiService , private route: ActivatedRoute,
	  private router: Router) { 
	   this.getUsers();
	}
	
	
	ngOnInit() {
	  this.form = this.formBuilder.group({
		lastName : [''], 
		firstName : [''],
		emailId: [''],
		 }
		);



	this.returnUrl = this.route.snapshot.queryParams['route'] || '/';	
   
	  }


	getUsers = () => {
	  this.myap.getEmployeesList().subscribe(
	  data => {
		   this.users = data;
	
	  },
	  error => {
		console.log(error)
	  })
	  if ( localStorage.getItem('divpointe')=='false')
     {
       this.divpointe = false;
     }
     else{
       this.divpointe = true;
     }
     }
	
	deleteuser(d) {
	  const index = this.users.indexOf(d);
	  const id = d.id;
	  
	  this.myap. deleteEmployee(id).subscribe(
	  (res) => {
		this.response = res;
		//alert("l'utilisateur " + d.lastname + " " + d.firstname + " a étè supprimé ")
		//this.alertService.success('employé supprimé avec succés!' ,true);
		console.log(res);
  
		},
		err => {
			
			//this.alertService.error('employé non supprimé' ,false);
		
		  });
	  this.users.splice(index, 1);
	}
	div3:boolean=false;
	f
	
	updateuser(d) {
	  
		const id = d.id;
		
		const formData = new FormData();
		 
		 if (this.user.lastName != '')
		formData.append('lastName', this.user.lastName);
		if (this.user.firstName != '')
		formData.append('firstName',  this.user.firstName);
		if (this.user.emailId != '')
		formData.append('emailId',   this.user.emailId);
	   
		
	
		
		this.myap.updateEmployee(id, this.user)
		  .subscribe(
			response => {
			alert("employée modifié")
			 // this.alertService.success('employé modifié avec succés!' ,true);
			  console.log(response);
			  
			},
			error => {
			  console.log(error);
			});
			window.location.reload();
  
	  }
  
	onSubmit() {
	  const formData = new FormData();
	  formData.append('lastName', this.form.get('lastName').value);
	  formData.append('firstName', this.form.get('firstName').value);
	  formData.append('emailId', this.form.get('emailId').value);
	 
	

	  this.user.lastName=this.form.get('lastName').value;
	  this.user.firstName= this.form.get('firstName').value;
		  this.user.emailId=this.form.get('emailId').value;
	
	
	  this.users.push(this.user);
	  console.log(formData)
	  this.user.id= null
	  console.log(this.user)
	  this.myap.upload(this.user).subscribe(
		(res) => {
		  this.response = res;
		  this.imageURL = `${this.baseurl}${res.file}`;/*, res.text, res.text, res.text, res.text, res.text, res.text*/
		  console.log(res);
		  console.log(this.imageURL);
		  alert("Ajout avec sucées")
		  //this.alertService.success('employé ajouté avec succés!' ,true)
		},
		(err) => {  
		  console.log(err);
		}
	  );
	}
  
  

	Change(event) {
	
		
	  if (event.target.value.length > 0){
		const file1 = event.target.value;
		this.form.get('lastName').setValue(file1);
	  
	}}
	Change1(event) {
	
		
	  if (event.target.value.length > 0){
		const file1 = event.target.value;
		this.form.get('firstName').setValue(file1);
	  
	}}
	Change2(event) {
	
		
	  if (event.target.value.length > 0){
		const file1 = event.target.value;
		this.form.get('emailId').setValue(file1);
	  
	}}

	
	
  
  
	
	 userclicked =(user) => {
	  this.myap. getEmployee(user.id).subscribe(
		data => {
		 this.user.id = data.id ;
		  
		  this.user.lastName = data.lastName;
		  this.user.firstName = data.firstName;
		  this.user.emailId=data.emailId;
		 

		 
  
		},
	
		
		error => {
		  console.log(error)
		}
	  )
	}


div1:boolean=true;
div2:boolean=false

    div1Function(){
        this.div1=true;
        this.div2=false;
      
	}
	div3Function(){
        this.div3=true;
        
      
	}
	
	/*addEmployee() {
		// use FormGroup 
	   const user = new User();

	}*/
	
}

