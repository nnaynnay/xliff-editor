import { XliffUnit } from './xliff-unit.model';

export class XliffGroup {
    _id: string;
    _name?: string;
    unit?: XliffUnit[];
    group?: XliffGroup[];
}
