import { NgModule } from '@angular/core';
import { Component,Inject, OnInit } from '@angular/core';

export interface DialogData {
  animal: string;
  checked: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
// @NgModule({
//   imports: [MatButtonModule, MatCheckboxModule],
//   // exports: [MatButtonModule, MatCheckboxModule],
// })
export class HomeComponent implements OnInit {
  color = 'success';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  favoriteSeason:'success'
  ngOnInit() {
  }

}

