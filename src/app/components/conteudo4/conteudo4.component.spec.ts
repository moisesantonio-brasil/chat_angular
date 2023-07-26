import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conteudo4Component } from './conteudo4.component';

describe('Conteudo4Component', () => {
  let component: Conteudo4Component;
  let fixture: ComponentFixture<Conteudo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Conteudo4Component]
    });
    fixture = TestBed.createComponent(Conteudo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
