import { Injectable } from '@angular/core';
import { Logger } from '../utility/logger';
import { Observable } from  'rxjs/Observable';
import { BehaviorSubject } from  'rxjs/BehaviorSubject';

@Injectable()
export class FileHandlerService {

  fileContent: Observable<string>;

  private fileReader: FileReader;
  private _fileContent: BehaviorSubject<string>;

  constructor(
    private logger: Logger
  ) {
    this._fileContent = new BehaviorSubject(null);
    this.fileContent = this._fileContent.asObservable();
  }

  readContent(file: File) {
    this.logger.log('readContent:', file);
    this.fileReader = new FileReader();
    this.fileReader.onloadend = (e) => {
      this._fileContent.next(this.fileReader.result);
    };
    this.fileReader.readAsText(file);
  }

  // validateFile()

}
