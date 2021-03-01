import type { IAlgorithm } from '../types';
import { clearBuffer } from '../helpers/clearBuffer';
import { COLOR } from '../consts';
import { console } from '../store';

export abstract class BaseAlgorithm implements IAlgorithm {
    abstract name: string;

    abstract draw([x0, y0]: [number, number], [x1, y1]: [number, number]): string[][];
}
