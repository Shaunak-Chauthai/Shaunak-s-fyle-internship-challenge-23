import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome message', () => {
    fixture.detectChanges();
    const headerElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    const paragraphElement = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(headerElement.textContent).toContain('Welcome to GITHUB EXPLORER');
    expect(paragraphElement.textContent).toContain('Traverse through GitHub profiles');
  });
});
