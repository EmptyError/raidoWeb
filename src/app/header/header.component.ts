import { Component, OnInit } from "@angular/core";
import {ResponseJsoService} from "../response-jso.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {

  constructor(private service: ResponseJsoService) {
    service.getJson().subscribe((response) => {
      alert(response);
      this.service.postJson("JSON");
    });
  }

  date: Date;
  time: Date;
  defaultTime: Date = new Date("1968-11-16T00:00:00");

  from: string;
  to: string;

  settlementResults: string[] = ["Lviv", "Rivne", "Kyiv"];

  search(event) {
    // this.mylookupservice.getResults(event.query).then(data => {
    //   this.results = data;
    // });
    this.settlementResults = ["Lviv", "Rivne", "Kyiv"];
  }

  handleClick() {

  }

  ngOnInit() {
  }

}
