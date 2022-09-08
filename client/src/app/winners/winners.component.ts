import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  userdata: any;
  displayedColumns: string[] = ['name', 'score'];
  datasource: MatTableDataSource<any> = new MatTableDataSource<any>();
  constructor(private service:ServiceService) { }

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.service.getFirebasedatawinners().subscribe(data=>{
      this.userdata=data;
      this.datasource = new MatTableDataSource<any>(this.userdata)
      console.log("userdata",this.userdata);
      
      
        })
      }
     
    
  


}
