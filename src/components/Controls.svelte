<script lang="ts">
    import { console, frameBuffer, zoom, canHaveBorder, userWantsBordered } from '../store';
    import { clearBuffer } from '../helpers/clearBuffer';
    import { MIN_ZOOM, MAX_ZOOM, MIN_RADIUS, MAX_RADIUS, CENTER, ANIMATION_DELAY } from '../consts';
    import type { IAlgorithm } from '../types';

    export let algorithm: IAlgorithm;
    let isAnimated = true;
    let radius = MAX_RADIUS;
    let blocked = false;

    async function wait() {
        if (isAnimated) {
            await new Promise(resolve => window.setTimeout(() => resolve(), ANIMATION_DELAY));
        }
    }

    async function handleDraw() {
        console.set([]);
        $frameBuffer = clearBuffer();
        blocked = true;
        await wait();
        for (const buffer of algorithm.draw(CENTER, radius)) {
            $frameBuffer = buffer;
            await wait();
        }
        blocked = false;
    }
</script>

<div class="container">
    <div class="item">
        <label for="radius">Promień:</label>
        <input type="number" min={MIN_RADIUS} max={MAX_RADIUS} bind:value={radius} class="slider" id="radius" disabled={blocked}/>
    </div>
    <div class="item">
        <label for="zoom">Powiększenie:</label>
        <input type="range" min={MIN_ZOOM} max={MAX_ZOOM} bind:value={$zoom} class="slider" id="zoom" disabled={blocked} />
    </div>
    <div class="item">
        <label for="border" id="border-label">Pokaż siatkę:</label>
        <input type="checkbox" id="border" disabled={!$canHaveBorder || blocked} bind:checked={$userWantsBordered} />
    </div>
    <div class="item">
        <label for="animate" id="animate-label">Animuj:</label>
        <input type="checkbox" id="animate" bind:checked={isAnimated} disabled={blocked} />
    </div>
    <div class="item">
        <button type="button" on:click={handleDraw} disabled={blocked}>Rysuj</button>
    </div>
</div>

<style>
    .container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .item {
        display: flex;
        flex-direction: column;
        margin: 0 8px;
    }

    .item > label {
        display: block;
    }

    .item > input {
        display: block;
        cursor: pointer;
        margin: 0;
    }

    #border, #animate {
        margin-top: 14px;
        height: 20px;
    }

    #radius {
        width: 80px;
    }

    #zoom {
        width: 150px;
    }

    button {
        background: #ff3e00;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 2px;
        cursor: pointer;
        margin: 0;
    }
</style>
