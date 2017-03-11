import { XliffGroup } from './xliff-group.model';
import { XliffUnit } from './xliff-unit.model';

export class XliffFile {
    _id: string;
    unit?: XliffUnit | XliffUnit[];
    group?: XliffGroup | XliffGroup[];
}
