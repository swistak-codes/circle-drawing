import { BaseAlgorithm } from './baseAlgorithm';
import { clearBuffer } from '../helpers/clearBuffer';
import { console } from '../store';

export class MidpointIncremental extends BaseAlgorithm {
    name = 'Algorytm punktu środkowego, wersja 3';

    *draw(center: [number, number], radius: number): Generator<string[][]> {
        const result = clearBuffer();
        let x = 0;
        let y = radius;
        let d = 1 - radius;
        let deltaE = 3;
        let deltaSE = 5 - radius * 2;

        console.update((value) => [...value, `x = ${x}; y = ${y}, d = ${d}, deltaE = ${deltaE}, deltaSE = ${deltaSE}`]);
        this.drawPoints([x, y], center, result);
        yield result;

        while(y > x) {
            if (d < 0) {
                d += deltaE;
                deltaE += 2;
                deltaSE += 2;
                x++;
            } else {
                d += deltaSE;
                deltaE += 2;
                deltaSE += 4;
                x++;
                y--;
            }
            console.update((value) => [...value, `x = ${x}; y = ${y}, d = ${d}, deltaE = ${deltaE}, deltaSE = ${deltaSE}`]);
            this.drawPoints([x, y], center, result);
            yield result;
        }
    }
}

export const midpointIncremental = new MidpointIncremental();
