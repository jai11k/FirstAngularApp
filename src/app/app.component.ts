import { Component,ViewChild } from '@angular/core';
import { TableService } from './table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface StudentData
{
  firstName:string;
  lastName:string;
  standard:number;
  subject:number;
  marks:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';
  displayedColumn: string[]=['firstName','lastName','standard','subject','marks'];

  dataSource!:MatTableDataSource<StudentData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  posts:any;

  constructor(private service:TableService) {
    this.service.getData().subscribe(data=>{
      console.log('helllloooo');
      console.log(data);
      
      this.posts=data;
      this.dataSource=new MatTableDataSource(this.posts);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
   }


   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


