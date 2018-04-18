import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ResponseJsoService {

  private headers = new HttpHeaders({"Content-Type": "application/json"});

  constructor(private http: HttpClient) {
  }

  getJson() {
    return this.http.get("http://localhost:8090/rest/test_json");
  }

    postJson(request) {
    this.http.post("http://localhost:8090/rest/post_json", request, { headers: this.headers }).subscribe(value => {
        console.log("[POST] create successfully", value);
      }, error => {
        console.log("FAIL to create!");
      },
      () => {
        console.log("POST - now completed.");
      });
  }
}
