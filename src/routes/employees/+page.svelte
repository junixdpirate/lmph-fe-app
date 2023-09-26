<script lang="ts">
    import EmployeeRow from "./EmployeeRow.svelte";
	import { page } from '$app/stores'

    /* @type { import('./$houdini').PageData } */
    export let data : any;

    $: ({ getEmployees } = data);
    
    $: lastPage = $getEmployees?.data?.employees.totalPages - 1;
    const currentPage = $page.url.searchParams.get('page');
    const intPage = currentPage != null ? parseInt(currentPage) : 0;
    
    const gotoPage = ( page : number ) => {  
        page = page >= lastPage ? lastPage : page;     
        document.location.href = '/employees?page=' + page;
    }

    const onEmployeeDeleted = (event : any) => {
        gotoPage(intPage);
    }
</script>

<div class="w-full">

    <div class="mb-5 flex justify-between">
        <h3 class="text-xl">Employees</h3>
       
        <a href="/employee/add" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</a>
    </div>

    <div class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border rounded-lg p-2 px-6">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                <tr class="hidden md:table-row border-b">
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Primary Address
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Primary Contact Info
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Age
                    </th>
                    <th scope="col" class="px-6 py-3">
                        # of Years<br />
                        in the Company
                    </th>
                    <th scope="col" class="px-6 py-3">
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody>
                
                {#each $getEmployees?.data?.employees.employees as employee }
                    <EmployeeRow {employee} on:employeeDeleted={onEmployeeDeleted} />
                {/each}            
            </tbody>
        </table>

        <div class="mt-6 flex md:justify-end justify-center gap-x-6 p-6">
            <button title="First" on:click={ () => gotoPage(0) }>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
            </button>
            <button title="Previous" on:click={ () => gotoPage( (intPage > 0 ? intPage - 1 : 0) ) }>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </button>
            <button title="Next" on:click={ () => gotoPage( intPage + 1) }>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
            </button>
            <button title="Last" on:click={ () => gotoPage(lastPage) }>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
            </button>
        </div>
    </div>
</div>