import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../patient.service';
import { ApiService } from '../../services/services';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
})
export class MyprofileComponent implements OnInit {
  editMode: boolean = false;
  profileForm: FormGroup;
  userData: any;
  pId: any;
  selectedFile: File;
  imageURL: any = '';
  maxDate:string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService,
    datePipe: DatePipe
  ) {
    this.pId = this.activatedRoute.snapshot.paramMap.get('id');
    const dateFormat = 'yyyy-MM-dd';    
    this.maxDate = datePipe.transform(new Date(), dateFormat);
    if (this.pId) {
      this.getPatientData();
    }
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', Validators.required],
      password: [''],
      confirmPassword: [''],
      address: ['', Validators.required],
      image: [''],
    });

    this.activatedRoute.queryParamMap.subscribe((res) => {
      let qParams = res.get('EditMode');
      if (qParams != null) {
        this.editMode = true;
      } else {
        this.editMode = false;
      }
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
    }
    this.profileForm.reset();
  }
  onDiscard() {
    this.router.navigate([], { queryParams: { EditMode: null } });
  }

  getPatientData() {
    this.apiService.getUserById(this.pId).subscribe((res) => {
      this.userData = res;

      this.patchUserData();
    });
  }
  patchUserData() {
    this.profileForm.patchValue({
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      email: this.userData.email,
      dob: this.userData.dob,
      phone: this.userData.phone,
      address: this.userData.address,
      password: this.userData.password,
      confirmPassword: this.userData.confirmPassword,
      image: this.userData.image,
    });
  }

  upadteUserData() {
    //code for upload image
    this.profileForm.controls['image'].setValue(this.imageURL);
    //update userData

    this.apiService
      .updateUserById(this.pId, this.profileForm.value)
      .subscribe((res) => {
        alert('Profile Updated Successfully');
        this.getPatientData();
        this.router.navigate([], { queryParams: { EditMode: null } });
      });
  }
  onFileSelected(event) {
    // this.selectedFile=<File>event.target.files[0];
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        var reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);
        reader.onload = (event) => {
          this.imageURL = (<FileReader>event.target).result;
        };
      }
      //   // console.log("selected event value",this.selectedFile)
      //   // this.profileForm.patchValue({
      //   //   image: this.selectedFile.name
      //   });
      //   console.log("image value",this.profileForm.value)
      // this.imageURL=this.selectedFile.name;
    }
  }
}
