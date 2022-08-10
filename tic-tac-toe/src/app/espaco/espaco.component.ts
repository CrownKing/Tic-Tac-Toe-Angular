import { Component, OnInit, Input } from '@angular/core';
import { espacoEnum } from './espacoEnum';

@Component({
  selector: 'app-espaco',
  templateUrl: './espaco.component.html',
  styleUrls: ['./espaco.component.css']
})
export class EspacoComponent implements OnInit {

  @Input() public jogada:espacoEnum = espacoEnum.EMPTY;
  @Input() public row:number;
  @Input() public col:number;
  constructor() { 
    this.row = 3;
    this.col = 3;
  }

  ngOnInit(): void {
  }

}
