import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationSongDetalComponent } from './recommendation-song-detal.component';

describe('RecommendationSongDetalComponent', () => {
  let component: RecommendationSongDetalComponent;
  let fixture: ComponentFixture<RecommendationSongDetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationSongDetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationSongDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
