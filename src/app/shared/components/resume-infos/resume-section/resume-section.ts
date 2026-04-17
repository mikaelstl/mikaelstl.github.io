import { Component, Input, OnInit } from '@angular/core';
import { SimpleTitle } from "../../base/simple-title/simple-title";
import { ResumeItem } from "../resume-item/resume-item";

@Component({
  selector: 'resume-section',
  imports: [
    SimpleTitle,
    ResumeItem
],
  templateUrl: './resume-section.html',
  styleUrl: './resume-section.scss',
})
export class ResumeSection {
  
  @Input() title: string = '';

  @Input() values: any[] = [];

}
