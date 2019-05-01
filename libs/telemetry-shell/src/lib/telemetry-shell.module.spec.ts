import { async, TestBed } from '@angular/core/testing';
import { TelemetryShellModule } from './telemetry-shell.module';

describe('TelemetryShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TelemetryShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TelemetryShellModule).toBeDefined();
  });
});
