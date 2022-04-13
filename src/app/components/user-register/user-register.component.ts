import { IUser } from './../../modules/iuser';
import { UserapiService } from './../../services/userapi.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
   userformgroup:FormGroup;
   usr:IUser={} as IUser;
  router: any;

  constructor(private fb:FormBuilder,private usrapi:UserapiService) {
    this.userformgroup=this.fb.group({
      fullname: ['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required]],
      phonenumber:fb.array(['']),
      address:this.fb.group({
         city:[''],
         street:['']
      }),
      password:[''],
      repassword:['']

    });
  }

  ngOnInit(): void {
  }
  get fullname(){
    return this.userformgroup.get('fullname');
  }
 get phonenumber(){
    return this.userformgroup.get('phonenumber') as FormArray;
  }
  addmobileno(){
    this.phonenumber.push(this.fb.control(''));
  }

  get email(){
    return this.userformgroup.get('email');
  }
  get city(){
    return this.userformgroup.get('city');
  }
  get address(){
    return this.userformgroup.get('address');
  }
  get password(){
    return this.userformgroup.get('password');
  }
//register(){
  //return userservice.register(this,this.userformgroup.value);
  //alert("done");
//}
register(){

  this.usrapi.adduser(this.usr).subscribe({
    next:(prd)=>{
      this.router.navigate(['/Order']);
    },
    error:(err)=>{
      alert("error");
    }
  });
}
}
