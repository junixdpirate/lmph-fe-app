<script lang="ts">
	import { page } from '$app/stores'
	import Form from '../Form.svelte';

	/* @type { import('./$houdini').PageData } */
    export let data : any;
	export let pageNumber : any = $page.url.searchParams.get('page');

	$: ({ getEmployee } = data);
    $: employeeInfo = $getEmployee?.data?.employeeById
</script>

{#if $getEmployee.fetching}
	<div>Loading...</div>
{:else}
<Form {...{employeeInfo, pageNumber}} />
{/if}