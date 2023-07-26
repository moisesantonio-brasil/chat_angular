import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conteudo2Component } from './conteudo2.component';

describe('Conteudo2Component', () => {
  let component: Conteudo2Component;
  let fixture: ComponentFixture<Conteudo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Conteudo2Component]
    });
    fixture = TestBed.createComponent(Conteudo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
