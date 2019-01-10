import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router} from '@angular/router';
import { ApiService } from '../../api/api.service';
@Component({
  selector: 'app-recommendation-song-detal',
  templateUrl: './recommendation-song-detal.component.html',
  styleUrls: ['./recommendation-song-detal.component.scss']
})
export class RecommendationSongDetalComponent implements OnInit {
  private recommendedSongId:string;
  public recommendedSongDetail:any;
  constructor(private routerInfo:ActivatedRoute,private api:ApiService,private route:Router) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params:Params)=>this.recommendedSongId=params["id"]);
    console.log('id', this.recommendedSongId)
    this.getSongDetailById();
  }
  getSongDetailById(){
    this.api.getRecommendDetailBySongId({id:this.recommendedSongId},res=>{
          if(res.code==200){
            this.recommendedSongDetail = res.playlist;
            console.log(this.recommendedSongDetail)
          }
    })
  }
  goToPlay(song){
    console.log(song)
    this.route.navigate(['/MusicPlay',song.id])
  }

}
