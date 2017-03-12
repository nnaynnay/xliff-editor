import { Component, OnInit, Input } from '@angular/core';
import { XliffGroup } from '../../xliff-data/xliff-group.model';

@Component({
  selector: 'app-xliff-group',
  templateUrl: './xliff-group.component.html'
})
export class XliffGroupComponent implements OnInit {

  @Input() xliffGroup: XliffGroup;
  @Input() parentKeys: string[];

  constructor() { }

  ngOnInit() {
  }

  get updateParentKeys() {
    return (this.xliffGroup._id) ? this.parentKeys.concat(this.xliffGroup._id) : this.parentKeys;
  }

}
