import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { Logger } from '../utility/logger';
import * as X2JS from '../../../node_modules/x2js/xml2json';

@Injectable()
export class XliffParserService {

  constructor(
    private logger: Logger
  ) {

  }

  parse(contentXml: string) {
    let x2js = new X2JS();
    let contentJson = x2js.xml_str2json(contentXml);
    this.logger.log(contentJson);

    if (contentJson.length <= 0) {
      return null;
    }

  }

}
