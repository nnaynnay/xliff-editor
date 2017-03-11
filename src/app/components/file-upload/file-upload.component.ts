import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Logger } from '../../utility/logger';
import { FileHandlerService } from '../../file-handler/file-handler.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  providers: [
    Logger,
    FileHandlerService
  ],
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Output() fileChange = new EventEmitter<string>();

  private subscription: Subscription;

  constructor(
    private logger: Logger,
    private fileHandlerService: FileHandlerService
  ) {
  }

  ngOnInit() {
  }

  fileChanged($fileInput: any) {
    this.logger.log('fileUpload fileChanged: ', $fileInput);
    this.subscription = this.fileHandlerService.fileContent.subscribe(
      (val) => (val) ? this.fileChange.emit(val) : null,
      err => this.logger.error(err)
    );
    this.fileHandlerService.readContent($fileInput.target.files[0]);
  }

}