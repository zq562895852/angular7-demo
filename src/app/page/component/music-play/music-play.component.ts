import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-music-play',
  templateUrl: './music-play.component.html',
  styleUrls: ['./music-play.component.scss']
})
export class MusicPlayComponent implements OnInit {
  private playId:string;
  constructor(private routerInfo:ActivatedRoute) { }

  ngOnInit() {
     this.routerInfo.params.subscribe(params=>this.playId = params['id']);
     console.log('id', this.playId)
  }

}
