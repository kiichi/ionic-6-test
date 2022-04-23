import { Component, OnInit, Input } from '@angular/core';
import { Code } from '../services/data.service';
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  @Input() code: Code;
  isCopied: Boolean = false;
  constructor(private _clipboardService: ClipboardService) { }
  ngOnInit() {}
  copy(text){
    this._clipboardService.copy(text)
    this.isCopied = true;
  }
}
