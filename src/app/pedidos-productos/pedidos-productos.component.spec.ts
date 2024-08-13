import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosProductosComponent } from './pedidos-productos.component';

describe('PedidosProductosComponent', () => {
  let component: PedidosProductosComponent;
  let fixture: ComponentFixture<PedidosProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidosProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
