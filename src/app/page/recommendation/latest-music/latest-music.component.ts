import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-latest-music',
  templateUrl: './latest-music.component.html',
  styleUrls: ['./latest-music.component.scss']
})
export class LatestMusicComponent implements OnInit {
  public latestMusic:any = [];
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getLatestMusic();
  }
  getLatestMusic(){
    this.api.getLatestMusic(res=>{
      if(res.code==200){
        this.latestMusic = res.result.slice(0,6);
      }
    })
  }

}
