import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

}
