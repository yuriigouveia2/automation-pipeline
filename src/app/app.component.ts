import { Component, OnInit } from '@angular/core';
import { ChildProcessService } from 'ngx-childprocess';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'automation-pipeline';

  constructor(
    private childProcessService: ChildProcessService
  ) { }

  ngOnInit() {
    // this.childProcessService.childProcess.exec('ls', [], (err, data) => {
    //   console.log(data, err);
    // });
  }
}
