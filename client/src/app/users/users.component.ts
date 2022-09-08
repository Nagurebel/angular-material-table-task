import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../service/service.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchText: any
  userArray: any[] = [];
  displayedColumns: string[] = ['name', 'age', 'score', 'addwinner'];
  datasource!: MatTableDataSource<any>;
  // @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  ngOnInit() {
    this.getData()
  }

  constructor(private service: ServiceService) { }


  getData() {
    this.service.getFirebasedata().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].age >= 21) {
          // console.log("asgdh",data[i]);
          this.userArray.push(data[i])
          this.datasource = new MatTableDataSource<any>(this.userArray)
          // this.datasource.paginator = this.paginator;
          this.datasource.sort = this.matSort;
          console.log("userArray", this.userArray);
        }

      }
    })

  }

  sendtowinner(event: any) {
    const getdata = event
    // console.log(event._elementRef.nativeElement.id)
    let getDatas = this.userArray;
    for (let i = 0; i < getDatas.length; i++) {
      if (getDatas[i].name === getdata) {
        // console.log("asgdh",getDatas[i]);

        this.service.postfirebasedata(getdata, getDatas[i]).subscribe(res => {
          console.log(res);

        });
      }
    }
  }

  filterData(event: any) {
    this.datasource.filter = event.target.value;
  }


}

