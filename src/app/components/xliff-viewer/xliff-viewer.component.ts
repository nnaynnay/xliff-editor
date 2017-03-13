import { Component, OnInit, AfterViewChecked, Input } from '@angular/core';
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
export class XliffViewerComponent implements OnInit, AfterViewChecked {

  @Input() xliffData: Xliff;

  /** Enable download file when xliff data is ready. */
  get enableDownloadFile() {
    return (this.xliffData) ? true : false;
  }

  constructor(
    private logger: Logger
  ) { }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    this.logger.log('rendered')
  }


}
