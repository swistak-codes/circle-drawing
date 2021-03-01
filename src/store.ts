import { writable, derived } from 'svelte/store';
import { clearBuffer } from './helpers/clearBuffer';
import { BORDER_LIMIT, MAX_RADIUS } from './consts';

export const frameBuffer = writable(clearBuffer());
export const zoom = writable(20);
export const userWantsBordered = writable(true);
export const isAnimated = writable(true);
export const radius = writable(MAX_RADIUS);
export const console = writable<string[]>([]);
export const blocked = writable(false);

export const canHaveBorder = derived([zoom], ([$zoom]) => $zoom > BORDER_LIMIT);
export const isBordered = derived([userWantsBordered, canHaveBorder], ([$userWantsBordered, $canHaveBorder]) =>
    !$canHaveBorder ? false : $userWantsBordered,
);
