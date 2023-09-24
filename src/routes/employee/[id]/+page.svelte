<script lang="ts">
	import Form from '../Form.svelte';
	/* @type { import('./$houdini').PageData } */
    export let data : any;

	$: ({ getEmployee } = data);
    $: employeeInfo = $getEmployee?.data?.employeeById
</script>

{#if $getEmployee.fetching}
	<div>Loading...</div>
{:else}
<Form {employeeInfo} />
{/if}