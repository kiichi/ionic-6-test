import { Component, OnInit, Input } from '@angular/core';
import { Code } from '../services/data.service';
import { ClipboardService } from 'ngx-clipboard'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  @Input() code: Code;
  constructor(private _clipboardService: ClipboardService,
              public toastController: ToastController) {               
  }
  ngOnInit() {}
  async copy(text){    
    this._clipboardService.copy(text);
    const toast = await this.toastController.create({message: 'Copied!'});
    toast.present();
  }
}
