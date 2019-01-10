import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';


@Component({
  selector: 'app-recommended-song-list',
  templateUrl: './recommended-song-list.component.html',
  styleUrls: ['./recommended-song-list.component.scss']
})
export class RecommendedSongListComponent implements OnInit {
  public songList:any=[];
  constructor(private api:ApiService,private router: Router,) { }

  ngOnInit() {
    this.getRecommendSongList()
  };
  getRecommendSongList(){
     this.api.getRecommenSongList(res=>{
       console.log(res);
       if(res.code==200){
         this.songList = res.result.slice(0,6);
       }
     })
  }
  goToRecommendDetailById(song){
    this.router.navigate(['/recommendationSongDetail',song.id ]);
    console.log(song)

  }
  goToRecommendList(){
    //console.log('oooo')
    this.router.navigate(['/RecommendedMusicList']);
    
  }

}
