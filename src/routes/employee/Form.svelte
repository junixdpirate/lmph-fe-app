<script lang="ts">
import { Input, Label, Select, Button, Modal } from 'flowbite-svelte';
import { deleteEmployee, upsertEmployee } from "../../services/employeeService";
import { genders, maritalStatuses } from '../../enums';
import ContactInfoInput from './ContactInfoInput.svelte';
import AddressInfoInput from './AddressInfoInput.svelte';
import { goto } from '$app/navigation';
export let employeeInfo : any;

let validationErrors : any = {}
let popupModal = false;

const setValidationErrors = (errors : Array<any>) => {
    validationErrors = [];
    errors[0].message.split(',').forEach( (m : string) => {       
        const [ key, desc ] = m.split(': ');        
        const [ _, __, fieldName ] = key.split('.');
        validationErrors[fieldName] = desc;
    });
}

const addContact = () => {    
    employeeInfo.contacts = [...employeeInfo.contacts, { id: "", contactNo : "", isPrimary : false}];
}

const removeContact = (i : number) => {
    employeeInfo.contacts.splice(i, 1)
    employeeInfo.contacts = employeeInfo.contacts;
}

const setPrimaryContact = (i : number ) => {
    const contacts = employeeInfo.contacts.map( (c : any) => ({...c, isPrimary: false}) );
    contacts[i].isPrimary = true;
    employeeInfo.contacts = contacts;
}

const addAddress = () => {
    employeeInfo.addresses = [...employeeInfo.addresses, { id: "", address1 : "", address2 : "", isPrimary : false}];
}

const removeAddress = (i : number) => {
    employeeInfo.addresses.splice(i, 1)
    employeeInfo.addresses = employeeInfo.addresses;
}

const setPrimaryAddress = ( i : number ) => {
    const addresses = employeeInfo.addresses.map( (c : any) => ({...c, isPrimary: false}) );
    addresses[i].isPrimary = true;
    employeeInfo.addresses = addresses;
}

const submitForm = async () => {
    const result = await upsertEmployee(employeeInfo);
    result.errors ? setValidationErrors(result.errors) : goto('/employees');
}

const confirmDelete = () => popupModal = true;

const proceedDelete = async () => {
    const result = await deleteEmployee( employeeInfo.id );
    !result.fetching && goto('/employees');
}

</script>

<div class="mb-5 flex justify-between">
    <h3 class="text-xl">Employee Info</h3>
   
    <div>
        <button on:click={submitForm} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
      {#if employeeInfo.id.length > 0}  
        <button on:click={confirmDelete} class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
      {/if}
    </div>
</div>

<div class="grid md:grid-cols-2 grid-cols-1 gap-0 md:gap-4">

        <div class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border rounded-lg p-6">
            <form>
                <div class="">
                  <div class="mb-3">
                    <Label for="firstName" class="mb-2">First name</Label>
                    <Input type="text" id="firstName" bind:value={employeeInfo.firstName} placeholder="" required />
                    {#if validationErrors.firstName}
                    <div class="mt-2 text-red-700">
                        {validationErrors?.firstName}
                    </div>
                    {/if}
                  </div>                  
                  <div class="mb-3">
                    <Label for="lastName" class="mb-2">Last name</Label>
                    <Input type="text" id="lastName" bind:value={employeeInfo.lastName} placeholder="" required />
                    {#if validationErrors.lastName}
                    <div class="mt-2 text-red-700">
                        {validationErrors?.lastName}
                    </div>
                    {/if}
                  </div>
                  <div class="mb-3">
                    <Label for="middleName" class="mb-2">Middle name</Label>
                    <Input type="text" id="lastName" bind:value={employeeInfo.middleName} placeholder="" required />
                    {#if validationErrors.middleName}
                    <div class="mt-2 text-red-700">
                        {validationErrors?.middleName}
                    </div>
                    {/if}
                  </div>
                  <div class="mb-3">
                    <Label for="birthdate" class="mb-2">Birthdate</Label>
                    <Input type="date" id="birthdate" placeholder="MM/DD/YYYY" bind:value={employeeInfo.birthdate} required />
                    {#if validationErrors.birthdate}
                    <div class="mt-2 text-red-700">
                        {validationErrors?.birthdate}
                    </div>
                    {/if}
                  </div>
                  <div class="mb-3">
                    <Label class="mb-2" id="gender">Gender</Label>
                    <Select id="gender" items={genders} bind:value={employeeInfo.gender}/>  
                    {#if validationErrors.gender}
                    <div class="mt-2 text-red-700">
                        {validationErrors?.gender}
                    </div>
                    {/if}                  
                  </div>
                  <div class="mb-3">
                    <Label class="mb-2" id="maritalStatus">Marital Status</Label>
                    <Select id="maritalStatus" items={maritalStatuses} bind:value={employeeInfo.maritalStatus} /> 
                    {#if validationErrors.maritalStatus}
                    <div class="mt-2 text-red-700">
                        {validationErrors?.maritalStatus}
                    </div>
                    {/if}
                  </div>
                </div>
                <div class="mb-3">
                    <Label for="companyPosition" class="mb-2">Position</Label>
                    <Input type="text" id="companyPosition" bind:value={employeeInfo.companyPosition} placeholder="" required />
                    {#if validationErrors.companyPosition}
                    <div class="mt-2 text-red-700">
                        {validationErrors?.companyPosition}
                    </div>
                    {/if}
                </div>
                <div class="mb-3">
                    <Label for="dateHired" class="mb-2">Date Hired</Label>
                    <Input type="date" id="dateHired" placeholder="MM/DD/YYYY" bind:value={employeeInfo.dateHired}  required />
                    {#if validationErrors.dateHired}
                    <div class="mt-2 text-red-700">
                        {validationErrors?.dateHired}
                    </div>
                    {/if}
                </div>                
            </form>
        </div>

        <div class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border rounded-lg p-6 mt-4 md:mt-0">
            
            <div class="mb-4">
                <span class="text-sm font-medium text-gray-900 dark:text-gray-300 me-2">Contact Info</span>
                <button on:click={addContact}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#000" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                </button>
            </div>
            
            {#each employeeInfo.contacts as contactInfo, index}
                <ContactInfoInput bind:contactInfo={contactInfo} { ...{index, removeContact, setPrimaryContact} }  />
            {/each}
            
            <div class="mb-4 mt-4">
                <span class="text-sm font-medium text-gray-900 dark:text-gray-300 me-2">Address Info</span>
                <button on:click={addAddress}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path fill="#000" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                </button>
            </div>

            {#each employeeInfo.addresses as addressInfo, index}
                <AddressInfoInput bind:addressInfo={addressInfo} { ...{index, removeAddress, setPrimaryAddress } }  />
            {/each}

        </div>
</div>

<Modal bind:open={popupModal} size="xs" autoclose>
    <div class="text-center">      
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this employee?</h3>
        <Button color="red" class="mr-2" on:click={proceedDelete}>Yes, I'm sure</Button>
        <Button color="alternative">No, cancel</Button>
    </div>
</Modal>
