import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { Logger } from '../utility/logger';
import * as X2JS from '../../../node_modules/x2js/xml2json';
import { Xliff } from '../xliff-data/xliff.model';

@Injectable()
export class XliffParserService {

  x2js: any;

  constructor(
    private logger: Logger
  ) {
    this.x2js = new X2JS({
      stripWhitespaces: false,
      useDoubleQuotes: true
    });
  }

  parseToXliff(contentXml: string) {
    let contentJson = this.x2js.xml_str2json(contentXml);

    if (contentJson.length <= 0) {
      return null;
    }

    let xliff: Xliff = Object.assign(new Xliff(), contentJson);
    // TODO: Validate xliff format.
    this.logger.log('parse: ', xliff);
    return xliff;
  }

  convertToXmlStr(xliffData: Xliff) {
    return this.x2js.json2xml_str(xliffData);
  }

}
