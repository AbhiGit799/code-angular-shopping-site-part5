import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  constructor(private _translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLang(language: string) {
    this._translate.use(language);
  }


}
