import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedSongListComponent } from './recommended-song-list.component';

describe('RecommendedSongListComponent', () => {
  let component: RecommendedSongListComponent;
  let fixture: ComponentFixture<RecommendedSongListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedSongListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedSongListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
