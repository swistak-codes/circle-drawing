import { BaseAlgorithm } from './baseAlgorithm';
import { clearBuffer } from '../helpers/clearBuffer';
import { console } from '../store';

export class Simple extends BaseAlgorithm {
    name = 'Podejście proste';

    *draw(center: [number, number], radius: number): Generator<string[][]> {
        const result = clearBuffer();
        let x = 0;
        let y;

        while(x < radius / Math.sqrt(2)) {
            y = Math.round(Math.sqrt(radius ** 2 - x ** 2));
            console.update((value) => [...value, `x = ${x}; y = ${y}`]);

            this.drawPoints([x, y], center, result);
            yield result;

            x++;
        }
    }
}

export const simple = new Simple();
