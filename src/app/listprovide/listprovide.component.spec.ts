import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprovideComponent } from './listprovide.component';

describe('ListprovideComponent', () => {
  let component: ListprovideComponent;
  let fixture: ComponentFixture<ListprovideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListprovideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprovideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
