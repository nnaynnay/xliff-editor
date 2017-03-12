import { Component, OnInit, Input } from '@angular/core';
import { Xliff } from '../../xliff-data/xliff.model';
import { XliffParserService } from '../../xliff-parser/xliff-parser.service';
import { Logger } from '../../utility/logger';

@Component({
  providers: [Logger],
  selector: 'app-file-download',
  templateUrl: './file-download.component.html',
  styleUrls: ['./file-download.component.css']
})
export class FileDownloadComponent implements OnInit {

  @Input() xliffData: Xliff;
  @Input() enabled: boolean;

  constructor(
    private logger: Logger,
    private xliffParserService: XliffParserService
  ) { }

  ngOnInit() {
  }

  /**
   * Convert the ready xliff data to xml string format for download.
   */
  download() {
    let blob = new Blob([this.xliffParserService.convertToXmlStr(this.xliffData)], { type: 'application/octet-stream' });
    let url= window.URL.createObjectURL(blob);
    window.open(url);
  }

}
