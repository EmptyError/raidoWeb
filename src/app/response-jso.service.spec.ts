import { TestBed, inject } from "@angular/core/testing";

import { ResponseJsoService } from "./response-jso.service";

describe("ResponseJsoService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseJsoService]
    });
  });

  it("should be created", inject([ResponseJsoService], (service: ResponseJsoService) => {
    expect(service).toBeTruthy();
  }));
});
