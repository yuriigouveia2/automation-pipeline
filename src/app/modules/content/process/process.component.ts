import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Util } from 'src/app/shared/util/util';
import { AssetTypeEnum } from 'src/app/core/enums/asset-type.enum';
import { ChildProcessService } from 'ngx-childprocess';
import { Process } from 'src/app/core/models/process.model';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  lupaIcon = '';
  processes: Process[] = [];
  processForm: FormGroup;

  constructor(
    private FB: FormBuilder,
    private childProcessService: ChildProcessService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.lupaIcon = Util.getAssetHardly(AssetTypeEnum.ICONS, 'lupa-48.png');
    this.createForm();
  }

  private createForm() {
    this.processForm = this.FB.group({
      port: ['', [Validators.required]]
    });
  }

  findProcess() {
    let list = [];
    if (this.processForm.value.port) {
      this.childProcessService.childProcess.exec(`netstat -ano | findStr :${this.processForm.value.port} | findStr "LISTENING"`, [],
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }

          list = [...this.getDataProcess(data.trim(), this.processForm.value.port)];
          this.processes = list;
          this.cdRef.detectChanges();
        });
    } 
  }

  private getDataProcess(data, port) {
    let processes = [];
    let filtered = data.replace('\n', '').split(" ").filter(x => !!x);

    for (let i = 0; i < filtered.length; i += 5 ) {
      processes.push(new Process({
        protocol        : filtered[i],
        localAddress    : filtered[i+1],
        externalAddress : filtered[i+2],
        state           : filtered[i+3],
        pid             : filtered[i+4]
      }))
    }

    return processes.filter((process: Process) => process.localAddress.includes(port));
  }

  removeProcess(process) {
    if (process.pid) { 
      this.childProcessService.childProcess.exec(`taskkill /f /pid ${process.pid}`, [], 
        (err, data) => {
          if (err) {
            console.log(err);
            return;
          }
          let processs = this.processes;
          this.processes = [...processs.filter(x => x.pid !== process.pid)];
          this.cdRef.detectChanges();
        });
    }
  }

}
