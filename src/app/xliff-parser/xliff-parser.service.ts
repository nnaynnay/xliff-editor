import { Injectable } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { Logger } from '../utility/logger';
import * as X2JS from '../../../node_modules/x2js/xml2json';
import { Xliff } from '../xliff-data/xliff.model';

@Injectable()
export class XliffParserService {

  constructor(
    private logger: Logger
  ) { }

  parse(contentXml: string) {
    let x2js = new X2JS();
    let contentJson = x2js.xml_str2json(contentXml);

    if (contentJson.length <= 0) {
      return null;
    }

    let xliff: Xliff = Object.assign(new Xliff(), contentJson);
    // TODO: Validate xliff format.
    this.logger.log('parse: ', xliff);
    return xliff;
  }

}
