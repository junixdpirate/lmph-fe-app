<script lang="ts">
import { Input, Checkbox } from 'flowbite-svelte';

export let contactInfo : any;
export let index : number;
export let removeContact : Function;
export let setPrimaryContact : Function;
</script>

<div class="flex justify-between gap-x-4 mb-4">
    <Input type="text" placeholder="111-000000" bind:value={contactInfo.contactNo} />
    <div class="flex">
        <Checkbox class="space-x-1" bind:checked={contactInfo.isPrimary} on:change={setPrimaryContact(index)} />
        <button on:click={!contactInfo.isPrimary && removeContact(index)}>            
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path  fill="#888" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>            
        </button>
    </div>
</div>