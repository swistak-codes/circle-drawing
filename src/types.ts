export interface IAlgorithm {
    name: string;
    draw([x0, y0]: [number, number], radius: number): Generator<string[][]>;
}
