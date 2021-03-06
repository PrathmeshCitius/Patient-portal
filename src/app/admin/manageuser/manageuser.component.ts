import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../admin.service';


import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})

export class ManageuserComponent implements OnInit {
  userList: MatTableDataSource<any>
  ischecked = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private adminService: AdminService,
    public dialog: MatDialog,
    // public dialogRef: MatDialogRef<DialogBoxComponent>
  ) { 
    
  }

 
  displayedColumns: string[] = ['firstName', 'email', 'role','isAuthenticated','delete'];


  ngOnInit(): void {

    this.getUserList();
  
  }



  getUserList() {
    this.adminService.getUser().subscribe(res => { 
      this.userList = new MatTableDataSource(res.filter(person => person.role !== 'admin'));
      this.userList.paginator = this.paginator;
    
    })
  }

  onChange(event,row){

   
     row.isAuthenticated = event.checked
    
    this.adminService.setUserAuth(row,row.id).subscribe((res)=>{
      if(res){
       
      }

    });

  }


  openDialog(element) {
   
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      // data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result.event == 'Ok'){
        this.deleteRowData(result,element);

      }
      });
  }

  deleteRowData(param,elementRow){
    console.log(param);
    console.log(elementRow);
    this.adminService.deleteUserData(elementRow.id).subscribe((res)=>{
     if(res){
        this.getUserList();
     }
    })
    // this.userList = this.userList[row_obj].filter((value,key)=>{
    //   return value.id != row_obj.id;
    // });
  }


  // doAction(){
  //   this.dialogRef.close({event:"delete",data:"record deleted"});
  // }

  // closeDialog(){
  //   this.dialogRef.close({event:'Cancel'});
  // }


}
