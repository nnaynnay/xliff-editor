import { Component } from '@angular/core';
import { Logger } from './utility/logger';
import { XliffParserService } from './xliff-parser/xliff-parser.service';
import { Xliff } from './xliff-data/xliff.model';

@Component({
  providers: [Logger],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xliff editor';
  xliffData: Xliff;

  constructor(
    private logger: Logger,
    private xliffParserService: XliffParserService
  ) {}

  handleFileChange($event) {
    this.logger.log('file changed', $event);
    this.xliffData = this.xliffParserService.parse($event);
  }
}
