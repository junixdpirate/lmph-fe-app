import { graphql } from '$houdini';

const deleteEmployee = (id : string) => {

    return graphql(`mutation deleteEmployee($id: ID!) { 
        deleteEmployee(id: $id) {
            id
        }
    }`).mutate( { id : id });
    /*
    return graphql(`mutation deleteEmployee($id: ID!) { 
                        deleteEmployee(id: $id) {
                            id @Employee_delete
                        }
                    }`).mutate( { id : id });
                    */
}

const upsertEmployee = (employeeInfo : any) => {   
    let gql : any = null;

    if( employeeInfo.id ) {
        gql = graphql(`
                mutation UpdateEmployee($form: EmployeeForm!) {
                    upsertEmployee( form : $form)
                    {
                        id
                        firstName
                        lastName
                        middleName
                        birthdate
                        gender
                        maritalStatus
                        companyPosition
                        dateHired
                        contacts { 
                            id
                            contactNo
                            isPrimary
                        }
                        addresses { 
                            id
                            address1
                            address2
                            isPrimary
                        }
                    }
                }
            `);
    } 
    else {
        gql = graphql(`
                mutation InsertEmployee($form: EmployeeForm!) {
                    upsertEmployee( form : $form)
                    {
                    ...All_Employees_insert
                    }
                }
            `);
    }

    return gql.mutate( {form : employeeInfo} );
}

export { deleteEmployee, upsertEmployee }