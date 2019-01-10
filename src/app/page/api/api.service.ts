import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private myApi:HttpService) { }
  // 获取banner  轮播图
  public getCarousList(cb?:Function){
    this.myApi.get('banner',{},(res)=>{
        cb(res)
    });
    
  }
    /**
     * getRecommenSongList
     * 获取推荐歌单
     */
  public getRecommenSongList(cb?:Function) {
    this.myApi.get('personalized',{},res=>{
      cb(res);
    })
  } 
  /**
   * getRecommendDetailBySongId
   * 获取推荐歌曲详情
   */
  public getRecommendDetailBySongId(params,cb?:Function) {
    this.myApi.get('playlist/detail',params,res=>{
      cb(res);
    })
  }
  /**
   * getLatestMusic
   * 获取最新音乐列表
   */
  public getLatestMusic(cb?:Function) {
    this.myApi.get('personalized/newsong',{},res=>{
      cb(res);
    })
  }
  
}
