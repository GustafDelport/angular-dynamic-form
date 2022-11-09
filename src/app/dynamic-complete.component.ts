import { Component, OnInit } from '@angular/core';
import {
  DynamicFormBuildConfig,
  DynamicFormConfiguration,
  RxDynamicFormBuilder,
} from '@rxweb/reactive-dynamic-forms';

@Component({
  selector: 'app-dynamic-complete',
  templateUrl: './dynamic-complete.component.html',
})
export class DynamicCompleteComponent implements OnInit {
  serverData = [
    {
      name: 'firstName',
      type: 'text',
      ui: {
        label: 'Firstname',
        placeholder: 'Gustaf',
      },
    },
    {
      name: 'lastname',
      type: 'text',
      ui: {
        label: 'Lastname',
        placeholder: 'delport',
      },
    },
    {
      name: 'age',
      type: 'number',
      ui: {
        label: 'Age',
        placeholder: '21',
      },
    },
    {
      name: 'gender',
      type: 'select',
      source: [
        { value: 1, text: 'Male' },
        { value: 2, text: 'Female' },
        { value: 3, text: 'Other' },
      ],
      ui: {
        label: 'Gender',
        placeholder: 'Select',
      },
    },
    {
      name: 'confirm',
      type: 'checkbox',
      source: [{ value: 1, text: 'I accept the terms and conditions' }],
    },
  ];

  uiBindings: string[] = [
    'firstName',
    'lastname',
    'age',
    'gender',
    'confirm',
    'profilePhoto',
  ];

  dynamicFormBuildConfig: DynamicFormBuildConfig;

  constructor(private formBuilder: RxDynamicFormBuilder) {}
  ngOnInit() {
    this.dynamicFormBuildConfig = this.formBuilder.formGroup(
      this.serverData,
      {}
    );
  }
}
