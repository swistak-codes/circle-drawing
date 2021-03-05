import type { IAlgorithm } from '../types';
import { COLOR } from '../consts';

export abstract class BaseAlgorithm implements IAlgorithm {
    abstract name: string;

    abstract draw([x0, y0]: [number, number], radius: number): Generator<string[][]>;

    protected drawPoints([x, y]: [number, number], [x0, y0]: [number, number], frameBuffer: string[][]): void {
        frameBuffer[x + x0][y + y0] = COLOR;
        frameBuffer[y + x0][x + y0] = COLOR;
        frameBuffer[y + x0][-x + y0] = COLOR;
        frameBuffer[x + x0][-y + y0] = COLOR;
        frameBuffer[-x + x0][-y + y0] = COLOR;
        frameBuffer[-y + x0][-x + y0] = COLOR;
        frameBuffer[-y + x0][x + y0] = COLOR;
        frameBuffer[-x + x0][y + y0] = COLOR;
    }
}
