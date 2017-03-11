import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Xliff } from '../../xliff-data/xliff.model';
import { Subscription } from 'rxjs/Subscription';
import { XliffParserService } from '../../xliff-parser/xliff-parser.service';
import { Logger } from '../../utility/logger';

@Component({
  providers: [Logger],
  selector: 'app-xliff-viewer',
  templateUrl: './xliff-viewer.component.html',
  styleUrls: ['./xliff-viewer.component.css']
})
export class XliffViewerComponent implements OnInit, OnChanges {

  @Input() xliffData: Xliff;


  constructor(
    private logger: Logger,
    private xliffParserService: XliffParserService
  ) { }

  ngOnInit() {

  }

  ngOnChanges(changes: any) {
  }


}
