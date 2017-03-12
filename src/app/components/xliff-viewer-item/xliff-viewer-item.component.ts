import { Component, OnInit, Input } from '@angular/core';
import { Xliff } from '../../xliff-data/xliff.model';

@Component({
  selector: 'app-xliff-viewer-item',
  templateUrl: './xliff-viewer-item.component.html',
  styleUrls: ['./xliff-viewer-item.component.css']
})
export class XliffViewerItemComponent implements OnInit {

  @Input() xliffItem: Xliff;
  @Input() parentKeys: string[];

  constructor() { }

  ngOnInit() {
  }

  isArrayKey(key: string) {
    return /^\d+$/.test(key);
  }

  get updateParentKeys() {
    return (this.xliffItem['_id']) ? this.parentKeys.concat(this.xliffItem['_id']) : this.parentKeys;
  }

}
