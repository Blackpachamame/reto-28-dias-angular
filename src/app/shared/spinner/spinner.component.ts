/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  isLoading$ = this.spinerSvc.isLoading$;
  constructor(private readonly spinerSvc: SpinnerService) { }
}
