import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../api/api.service';
@Component({
  selector: 'app-recommended-music-list',
  templateUrl: './recommended-music-list.component.html',
  styleUrls: ['./recommended-music-list.component.scss']
})
export class RecommendedMusicListComponent implements OnInit {
  public musicList:any = [];
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getRemMusicList();
  };
  getRemMusicList(){
    this.api.getRecommenSongList(res=>{
      if(res.code==200){
        this.musicList = res.result;
      }
    })
  }

}
