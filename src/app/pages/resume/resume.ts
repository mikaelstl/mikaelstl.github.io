import { Component } from '@angular/core';
import { SectionTitle } from "../../components/base/section-title/section-title";

@Component({
  selector: 'resume',
  imports: [SectionTitle],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {}
