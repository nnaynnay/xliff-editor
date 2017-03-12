import { XliffFile } from './xliff-file.model';
import { XliffGroup } from './xliff-group.model';
import { XliffSegment } from './xliff-segment.model';
import { XliffUnit } from './xliff-unit.model';

export class Xliff {
    _version: string;
    _srcLang: string;
    _trgLang?: string;
    file: XliffFile | XliffFile[];
}
