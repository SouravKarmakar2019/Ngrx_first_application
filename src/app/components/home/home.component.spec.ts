import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have quote Orchestrate buyer-centric journeys with Experience Studio! ', () => {
    const quote: HTMLElement = fixture.nativeElement.querySelector('.header');
    expect(quote.textContent).toEqual('Orchestrate buyer-centric journeys with Experience Studio');
  });
  it('should have paragaraph with content', () => {
    const paracontent: HTMLElement = fixture.nativeElement.querySelector('.content');
    expect(paracontent.textContent).toEqual(
      'Guide your buyers along their unique journey with personalized, full funnel experiences. Not sure where to start? Take a tour or click “Create New Experience” to use one of our best-practice templates.',
    );
  });
  it('should create new Experience button',()=>{
    const createExp=fixture.nativeElement.querySelector('.create-experience');
    expect(createExp.textContent).toEqual('Create new Experience');
  });

  it('should create Take a tour button',()=>{
    const takeTour=fixture.nativeElement.querySelector('.take-tour');
    console.log(takeTour);
    expect(takeTour.textContent).toEqual('Take a tour');
  })
});
