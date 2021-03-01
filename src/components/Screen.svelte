<script lang="ts">
    import { frameBuffer, zoom, isBordered } from '../store';
</script>

<div class="grid">
    {#each $frameBuffer as columns, x}
        <div class="column" class:column--bordered={$isBordered} class:column--no-borders-inside={!$isBordered}>
            {#each columns as cell, y}
                <div
                    style="width: {$zoom}px; height: {$zoom}px; background: {cell};"
                    class="cell"
                    class:cell--bordered={$isBordered}
                    title={`(${x}, ${y})`}
                    role="button"
                />
            {/each}
        </div>
    {/each}
</div>

<style>
    .grid {
        display: flex;
    }

    .column {
        display: flex;
        flex-direction: column;
        transition: var(--animation);
    }

    .column--bordered {
        border-top: var(--border);
        border-left: var(--border);
    }

    .column--bordered:last-of-type {
        border-right: var(--border);
    }

    .column--no-borders-inside {
        border-top: var(--border);
        border-bottom: var(--border);
    }

    .column--no-borders-inside:first-of-type {
        border-left: var(--border);
    }

    .column--no-borders-inside:last-of-type {
        border-right: var(--border);
    }

    .cell {
        transition: var(--animation);
    }

    .cell--bordered {
        border-bottom: var(--border);
    }
</style>
