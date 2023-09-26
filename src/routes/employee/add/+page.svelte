<script lang="ts">

  import Form from '../Form.svelte';

  const employeeInfo = {
    id : "",
    firstName : "",
    lastName : "",
    middleName : "",
    birthdate: "",
    gender : "",
    maritalStatus : "",
    companyPosition : "",
    dateHired : "",
    contacts : [
      {
        id : "",
        contactNo : "",
        isPrimary : true
      }
    ],
    addresses : [
      {
        id : "",
        address1 : "",
        address2 : "",
        isPrimary : true
      }
    ]
  }

  const pageNumber = 0;

</script>

<Form {...{employeeInfo, pageNumber}} />