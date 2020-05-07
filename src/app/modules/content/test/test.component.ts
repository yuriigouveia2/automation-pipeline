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

  constructor(
    private FB: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
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
        configurationType: ['', [Validators.required]]
      })
    });
  }

  get configurationTypeForm() {
    return this.testForm.controls.configurationTypeForm as FormGroup;
  }

  onChange = (stepperComponent: MatHorizontalStepper) => stepperComponent.next();

}
