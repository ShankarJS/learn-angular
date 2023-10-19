import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterreactiveformComponent } from './monsterreactiveform.component';

describe('MonsterreactiveformComponent', () => {
  let component: MonsterreactiveformComponent;
  let fixture: ComponentFixture<MonsterreactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterreactiveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
