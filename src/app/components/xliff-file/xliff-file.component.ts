import { Component, OnInit, Input } from '@angular/core';
import { XliffFile } from '../../xliff-data/xliff-file.model';

@Component({
  selector: 'app-xliff-file',
  templateUrl: './xliff-file.component.html'
})
export class XliffFileComponent implements OnInit {

  @Input() xliffFile: XliffFile;
  @Input() parentKeys: string[];

  constructor() { }

  ngOnInit() {
  }

  get updateParentKeys() {
    return this.parentKeys;
  }

}
