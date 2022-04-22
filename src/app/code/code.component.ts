import { Component, OnInit, Input } from '@angular/core';
import { Code } from '../services/data.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  @Input() code: Code;

  constructor() { }

  ngOnInit() {}
}
