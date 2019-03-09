import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private testService : TestService) {
    //debugger;
    testService.printToConsole("Venkatesh")
  }

  ngOnInit() {
  }

}
