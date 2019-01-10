import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import Swiper from 'swiper';
import { ApiService } from '../../api/api.service';
import { HttpService } from '../../http/http.service';
// import { Api } from '../../api/api';
// HttpService



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carousel', [
      state('stay', style({
        marginLeft: '-100%'
      })),
      state('stayR', style({
        marginLeft: '-100%'
      })),
      state('moveLeft', style({
        marginLeft: '-100%'
      })),
      state('moveRight', style({
        marginLeft: '-100%'
      })),
      transition('* => moveLeft', animate('500ms ease-in-out', style({
        marginLeft: '-200%'
      }))),
      transition('* => stay', animate('500ms ease-in-out', style({
        marginLeft: '-200%'
      }))),
      transition('* => moveRight', animate('500ms ease-in-out', style({
        marginLeft: '0vw'
      })))
    ])
  ]
})
export class CarouselComponent implements OnInit {
  public bannerPic: any[] = [
    // {img: 'http://p1.music.126.net/ZowSG8H1TuL7Yqy47CmMYA==/109951163781178285.jpg'},
    {img: 'http://p1.music.126.net/Ixvc3TEFgSJhA85fzVTsBQ==/109951163780343926.jpg'},
    {img: 'http://p1.music.126.net/mxWJRIgQjN2nG8vrKVMFyQ==/109951163780359565.jpg'},
    {img: 'http://p1.music.126.net/cRaTkYN0QYlRfAbLL99SyA==/109951163779466461.jpg'},
    {img: 'http://p1.music.126.net/0hr719uP7tmH738_-ZGf8g==/109951163779132755.jpg'}
  ];
  state = 'stay';
  timer: any;
  public bannerList:any = [];
  // let api = new Api();
  constructor(private api:ApiService,private http:HttpService) { 
    // 获取轮播列表
    
  }

  autoPlay(): void {
    const me = this;
    this.timer = setInterval(() => {
      me.state = me.state === 'stay' ? 'moveLeft' : 'stay';
    }, 3000);
  }
  getBannerList(){
    this.api.getCarousList(res=>{
      console.log(res)
      if(res.code==200){
        this.bannerList = res.banners;
        // this.getAutoPlay();
        setTimeout(() => {//无力吐槽，渲染这么慢的吗
          this.getAutoPlay();
        }, 100);
      }
    });
  };
  ngOnInit() {//初始化调用  
    this.getBannerList()
    this.autoPlay();

   
  };

  ngAfterViewInit(){//初始化完成
    // this.getAutoPlay();
    // this.getBannerList()
  };

  getAutoPlay(){
    let mySwiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,//最后一个是否停止
          disableOnInteraction: false,//点击是否停止
        },
        loop: true,//循环
        // allowTouchMove:true,
        pagination: {
          el: '.swiper-pagination',//分页器
          clickable :true,//点击分页器切换
        },

      })
  };

  afterPlay(): void {
    if (this.state === 'stay' || this.state === 'moveLeft') {
      this.bannerPic.push(this.bannerPic[0]);
      this.bannerPic.shift();
    } else if (this.state === 'moveRight') {
      const last = this.bannerPic.length - 1;
      this.bannerPic.unshift(this.bannerPic[last]);
      this.bannerPic.pop();
      this.state = 'stayR';
    }
  }

  stopPlay(): void {
    clearInterval(this.timer);
  }

  playPre(): void {
    this.state = 'moveRight';
  }

  playNext(): void {
    this.state = this.state === 'stay' ? 'moveLeft' : 'stay';
  }

}
