interface EmployeeInfo {
    id: string,
    firstName: string,
    middleName: string,
    lastName: string
    age: number,
    yearsOfExperience: number,
    addresses: Array<any>,
    contacts: Array<any>
}


export type {EmployeeInfo};