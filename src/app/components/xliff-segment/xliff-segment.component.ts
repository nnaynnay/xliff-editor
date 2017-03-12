import { Component, OnInit, Input } from '@angular/core';
import { XliffSegment } from '../../xliff-data/xliff-segment.model';

@Component({
  selector: 'app-xliff-segment',
  templateUrl: './xliff-segment.component.html',
  styleUrls: ['./xliff-segment.component.css']
})
export class XliffSegmentComponent implements OnInit {

  @Input() xliffSegment: XliffSegment;

  constructor() { }

  ngOnInit() {
  }

}
