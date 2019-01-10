import { Component, OnInit ,Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-buttons-add',
  templateUrl: './buttons-add.component.html',
  styleUrls: ['./buttons-add.component.scss']
})
export class ButtonsAddComponent implements OnInit {

  @Output() add:EventEmitter<any> = new EventEmitter();
  @Output() cancel:EventEmitter<any> = new EventEmitter();
  @Input() routerLinkCancel:string;
  constructor() { }

  ngOnInit() {
  }

  clickAdd()
  {
    this.add.emit(null);
  }

  clickCancel()
  {
    this.cancel.emit(null);
  }
}
