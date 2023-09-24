<script lang="ts">
    import EmployeeRow from "./EmployeeRow.svelte";
	
    /* @type { import('./$houdini').PageData } */
    export let data : any;

    $: ({ getEmployees } = data);

    const onEmployeeDeleted = (event : any) => {
        console.log("employee deleted...");
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
                
                {#each $getEmployees?.data?.employees as employee }
                    <EmployeeRow {employee} on:employeeDeleted={onEmployeeDeleted} />
                {/each}            
            </tbody>
        </table>
    </div>
</div>