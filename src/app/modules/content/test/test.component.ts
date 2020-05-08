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

  constructor(
    private FB: FormBuilder
  ) { }

  ngOnInit() {
    this.initVariables();
    this.createForm();
  }

  private initVariables = () => this.fileLabelText = 'Escolha o arquivo';

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
        file: ['', [Validators.required]]
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
    stepperComponent.next();
  }
}
