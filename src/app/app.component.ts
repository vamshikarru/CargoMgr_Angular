import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];
  stageValues: Array<any> = [];
  // devValues: Array<any> = [];
  // prodValues: Array<any> = [];
  selectedServer: any;

  constructor(private serverService: ServerService) {}
  ngOnInit(): void {
  const serUrls = ['https://us-central1-cargomgrio-test.cloudfunctions.net/getFlights'];

    if (this.stageValues.length === 0) {
      serUrls.forEach(each => {
        this.serverService.getServers(each)
          .subscribe(
            (servers: any[]) => {this.stageValues = servers;
              // this.stageValues.push(this.servers);
              console.log('server data', this.stageValues)},
            (error) => console.log(error)
          );
      });
    }
    this.selectedServer = 'stageServer';

    }
}
