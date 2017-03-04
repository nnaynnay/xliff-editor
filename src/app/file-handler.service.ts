import { Injectable } from '@angular/core';
import { Logger } from './logger';
import { Observable } from  'rxjs/Observable';
import { BehaviorSubject } from  'rxjs/BehaviorSubject';

@Injectable()
export class FileHandlerService {

  fileContent: Observable<String>;

  private fileReader: FileReader;
  private _fileContent: BehaviorSubject<String>;

  constructor(
    private logger: Logger
  ) {
    this._fileContent = new BehaviorSubject(null);
    this.fileContent = this._fileContent.asObservable();
  }

  readContent(file: File) {
    this.logger.log(file);
    this.fileReader = new FileReader();
    this.fileReader.onloadend = (e) => {
      this._fileContent.next(this.fileReader.result);
    };
    this.fileReader.readAsText(file);
  }

  validateFile() {

  }

}
