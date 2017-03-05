import { XliffSegment } from './xliff-segment.model';

export class XliffUnit {
    // Ref: http://docs.oasis-open.org/xliff/xliff-core/v2.0/os/xliff-core-v2.0-os.html#unit
    // TODO: fill in the remaining properties

    id: string;

    name?: string;

    segment?: XliffSegment;

    path?: Array<string>;

}
