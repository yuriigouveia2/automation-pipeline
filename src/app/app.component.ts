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
    this.childProcessService.childProcess.exec(`if not exist %HOME%\\.artillery\\* (mkdir %HOME%\\.artillery)`, [], (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.deleteAllFilesInFolder();
    });
  }

  private deleteAllFilesInFolder() {
    this.childProcessService.childProcess.exec(`del /S %HOME%\\.artillery\\*`, [], (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
}
