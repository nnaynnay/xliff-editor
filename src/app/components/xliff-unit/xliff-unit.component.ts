import { Component, OnInit, Input } from '@angular/core';
import { XliffUnit } from '../../xliff-data/xliff-unit.model';

@Component({
  selector: 'app-xliff-unit',
  templateUrl: './xliff-unit.component.html'
})
export class XliffUnitComponent implements OnInit {

  @Input() xliffUnit: XliffUnit;
  @Input() parentKeys: string[];

  constructor() { }

  ngOnInit() {
  }

  get updateParentKeys() {
    return (this.xliffUnit._id) ? this.parentKeys.concat(this.xliffUnit._id) : this.parentKeys;
  }

}
