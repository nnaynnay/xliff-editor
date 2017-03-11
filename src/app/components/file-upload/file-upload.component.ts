import { Component, OnInit } from '@angular/core';
import { Logger } from '../../utility/logger';
import { FileHandlerService } from '../../file-handler/file-handler.service';
import { XliffParserService } from '../../xliff-parser/xliff-parser.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  providers: [Logger, FileHandlerService, XliffParserService],
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileContent: string;
  fileContentJson: any;
  private subscription: Subscription;

  constructor(
    private logger: Logger,
    private fileHandlerService: FileHandlerService,
    private xliffParserService: XliffParserService
  ) {
  }

  ngOnInit() {
  }

  fileChanged($fileInput: any) {
    this.logger.log($fileInput);
    this.subscription = this.fileHandlerService.fileContent.subscribe(
      val => this.fileContent = val,
      err => this.logger.error(err)
    );
    this.fileHandlerService.readContent($fileInput.target.files[0]);
  }

  import() {
    this.fileContentJson = this.xliffParserService.parse(this.fileContent);
  }

}