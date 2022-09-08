import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class SharemoduleModule { }
