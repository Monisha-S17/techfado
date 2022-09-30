import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceSystemComponent } from './voice-system.component';

describe('VoiceSystemComponent', () => {
  let component: VoiceSystemComponent;
  let fixture: ComponentFixture<VoiceSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
