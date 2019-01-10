import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule,  } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
// import {MatExpansionModule} from '@angular/material/expansion';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { SideBarComponent } from './page/component/side-bar/side-bar.component';
import { HeaderComponent } from './page/component/header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import { RecommendationComponent } from './page/recommendation/recommendation.component';
import { RadioAnchorComponent } from './page/radio-anchor/radio-anchor.component';
import { CarouselComponent } from './page/component/carousel/carousel.component';
import { RecommendTabComponent } from './page/recommendation/recommend-tab/recommend-tab.component';
import { RecommendedSongListComponent } from './page/recommendation/recommended-song-list/recommended-song-list.component';
import { LatestMusicComponent } from './page/recommendation/latest-music/latest-music.component';
import { RecommendedMusicListComponent } from './page/recommendation/recommended-song-list/recommended-music-list/recommended-music-list.component';
import { RecommendationSongDetalComponent } from './page/recommendation/recommendation-song-detal/recommendation-song-detal.component';
import { CycleComponent } from './page/component/cycle/cycle.component';
import { MusicPlayComponent } from './page/component/music-play/music-play.component';
const routes: Routes = [
    {
      path:'',
      component:HomeComponent
    },
    {
      path:'recommendationSongDetail/:id',
      component:RecommendationSongDetalComponent
    },
    {
      path:'RecommendedMusicList',
      component:RecommendedMusicListComponent
    },
    {
      path:'MusicPlay/:id',
      component:MusicPlayComponent
    },
    {
      path:'login',
      component:LoginComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),MatSidenavModule,MatCheckboxModule,MatProgressBarModule,MatRadioModule,MatTabsModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    LoginComponent,
    SideBarComponent,
    HeaderComponent,
    RecommendationComponent,
    RadioAnchorComponent,
    CarouselComponent,
    RecommendTabComponent,
    RecommendedSongListComponent,
    LatestMusicComponent,
    RecommendedMusicListComponent,
    RecommendationSongDetalComponent,
    CycleComponent,
    MusicPlayComponent,
  ],
  providers:[
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy
    }
  ]
})
export class AppRoutingModule { }
