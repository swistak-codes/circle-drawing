import { BaseAlgorithm } from './baseAlgorithm';
import { clearBuffer } from '../helpers/clearBuffer';
import { console } from '../store';

export class MidpointInteger extends BaseAlgorithm {
    name = 'Algorytm punktu środkowego, wersja 2';

    *draw(center: [number, number], radius: number): Generator<string[][]> {
        const result = clearBuffer();
        let x = 0;
        let y = radius;
        let d = 1 - radius;

        console.update((value) => [...value, `x = ${x}; y = ${y}, d = ${d}`]);
        this.drawPoints([x, y], center, result);
        yield result;

        while(y > x) {
            if (d < 0) {
                d += x * 2 + 3;
                x++;
            } else {
                d += (x - y) * 2 + 5;
                x++;
                y--;
            }
            console.update((value) => [...value, `x = ${x}; y = ${y}, d = ${d}`]);
            this.drawPoints([x, y], center, result);
            yield result;
        }
    }
}

export const midpointInteger = new MidpointInteger();
