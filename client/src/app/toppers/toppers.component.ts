import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css']
})
export class ToppersComponent implements OnInit {
  userArray: any[]=[];
  displayedColumns: string[] = ['name', 'age', 'score'];
  datasource: MatTableDataSource<any> = new MatTableDataSource<any>();
  
  ngOnInit() {
    this.getData()
  }
  constructor(private service:ServiceService){}


  getData(){
    this.service.getFirebasedata().subscribe(data=>{
      // this.userdata=data;
      for(let i=0;i<data.length;i++){
        if(data[i].score >= 91){
          // console.log("asgdh",data[i]);
          this.userArray.push(data[i])
          this.datasource = new MatTableDataSource<any>(this.userArray)
          console.log("toppersArray",this.userArray);
        }
     
    }
  })
   
  }

}
