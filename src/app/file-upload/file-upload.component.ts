import { Component, OnInit } from '@angular/core';
import { Logger } from '../logger';
import { FileHandlerService } from '../file-handler.service';
import { Observable } from  'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  providers: [Logger, FileHandlerService],
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileForUpload: File[];
  fileContent: String;

  private subscription: Subscription;

  constructor(
    private logger: Logger,
    private fileHandlerService: FileHandlerService
  ) { }

  ngOnInit() {
  }

  fileChanged($fileInput: any) {
    this.logger.log($fileInput);
    this.fileForUpload = $fileInput.target.files;
    this.subscription = this.fileHandlerService.fileContent.subscribe(
      val => this.fileContent = val,
      err => this.logger.error(err)
    );
    this.fileHandlerService.readContent(this.fileForUpload[0]);
  }

  import() {
    //this.fileHandlerService.readFile(this.fileForUpload[0]);
  }

}
