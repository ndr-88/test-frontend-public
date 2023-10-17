import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersContainerComponent } from './characters-container.component';

describe('CharactersContainerComponent', () => {
  let component: CharactersContainerComponent;
  let fixture: ComponentFixture<CharactersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
