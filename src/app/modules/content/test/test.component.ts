import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  testForm: FormGroup;
  fileLabelText: string;
  formMessages: any;

  constructor(
    private FB: FormBuilder
  ) { }

  ngOnInit() {
    this.initVariables();
    this.createFormMessages();
    this.createForm();
  }

  private initVariables = () => this.fileLabelText = 'Escolha o arquivo...';

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
                Validators.pattern('.*\.yaml') ||
                Validators.pattern('.*\.YML')  ||
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
    this.fileLabelText = event.target.files[0].name;
    if (!this.isValid()) { return; }
    stepperComponent.next();
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
}
