import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TableHmdComponent } from "./table-hmd.component";

describe("TableHmdComponent", () => {
  let component: TableHmdComponent;
  let fixture: ComponentFixture<TableHmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableHmdComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
