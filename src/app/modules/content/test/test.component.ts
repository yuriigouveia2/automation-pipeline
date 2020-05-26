import { ColorScheme } from './../../../core/models/graphic/color-scheme.model';
import { ChartTypeEnum } from './../../../core/enums/chart-type.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { GraphicConfig } from 'src/app/core/models/graphic/graphic-config.model';
import { ChildProcessService } from 'ngx-childprocess';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  testForm: FormGroup;
  fileLabelText: string;
  filepath: string;
  formMessages: any;
  chartEnum: any;
  graphicConfig: GraphicConfig;

  constructor(
    private FB: FormBuilder,
    private childProcessService: ChildProcessService,
  ) { }

  ngOnInit() {
    this.initVariables();
    this.initGraphicConfig();

    this.createFormMessages();
    this.createForm();
  }

  private initVariables = () => {
    this.fileLabelText = 'Escolha o arquivo...';
    this.chartEnum = {
      BAR: ChartTypeEnum.BAR,
      LIN: ChartTypeEnum.LIN,
      PIE: ChartTypeEnum.PIE,
      PIZ: ChartTypeEnum.PIZ,
    };
  }

  private initGraphicConfig() {
    this.graphicConfig = new GraphicConfig({
      showXAxisLabel: true,
      showYAxisLabel: true,
      xAxisLabel    : '',
      yAxisLabel    : '',
    });
  }

  get types() {
    return {
      manual : 0,
      arquivo: 1
    };
  }

  createForm() {
    this.testForm = this.FB.group({
      configurationTypeForm: this.FB.group({
        configurationType: ['', [Validators.required]],
      }),
      fileForm : this.FB.group( {
        file: ['',
                [Validators.required,
                Validators.pattern('.*\.yml')  ||
                Validators.pattern('.*\.YML')  ||
                Validators.pattern('.*\.yaml') ||
                Validators.pattern('.*\.YAML')]
              ]
      })
    });
  }

  get configurationTypeForm() {
    return this.testForm.controls.configurationTypeForm as FormGroup;
  }

  get fileForm() {
    return this.testForm.controls.fileForm as FormGroup;
  }

  onChange = (stepperComponent: MatHorizontalStepper) => stepperComponent.next();

  showFileName = (event: any, stepperComponent: MatHorizontalStepper) => {
    this.filepath = (document.getElementById("myFile") as any).files[0].path;
    this.fileLabelText = event.target.files[0].name;

    if (!this.isValid()) { return; }

    this.runArtilleryLoadTest();
    stepperComponent.next();
  }

  private runArtilleryLoadTest() {
    const configFileToExecute = `${this.filepath}`;
    console.log('Início: ', new Date())
    this.childProcessService.childProcess.exec(`artillery run ${configFileToExecute}`, [],
    (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Fim: ', new Date())
        console.log(data)

        const dataFormatted = this.formatArtilleryOutput(data);
      });
  }

  private formatArtilleryOutput(data: any) {
    throw new Error("Method not implemented.");
  }

  isValid() {
    return this.fileForm.valid ? true : false;
  }

  private createFormMessages() {
    this.formMessages = {
      file: {
        required: 'O arquivo é obrigatório.',
        pattern : 'O tipo de arquivo não é válido.'
      }
    };
  }

  validateMessage = (subGroup: FormGroup, formField: string) => {
    if (!subGroup.controls[formField].valid) {
      return Object.keys(subGroup.controls[formField].errors)
                  .map(key => this.formMessages[formField][key])[0];
    }
    return null;
  }

  private toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error); 
  });
}
