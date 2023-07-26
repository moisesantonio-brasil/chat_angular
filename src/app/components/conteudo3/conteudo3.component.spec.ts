import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conteudo3Component } from './conteudo3.component';

describe('Conteudo3Component', () => {
  let component: Conteudo3Component;
  let fixture: ComponentFixture<Conteudo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Conteudo3Component]
    });
    fixture = TestBed.createComponent(Conteudo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
