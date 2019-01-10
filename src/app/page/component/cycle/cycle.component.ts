import { Component, OnInit, Input,SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.scss']
})
export class CycleComponent implements OnInit {
  @Input()
  musicList:any = [];
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.musicList); 
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('onchange', changes['musicList'])
    this.musicList = changes['musicList'].currentValue;
  }
  goToRecommendDetailById(song){
    console.log(song)
    this.router.navigate(['/recommendationSongDetail',song.id ]);
  }

}
