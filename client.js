console.log( `js` );

$(readyNow);

function readyNow(){
    console.log( `JQuery is loaded` );
    $( `.submitBtn`).on( `click`, addEmployee );
    //$( `.sumSalary`).on( `click`, monthlySalarySum );
    // you need to load an existing DOM object and use the dynamic ID or CLASS in the parent > child tree
    $( `#empRow`).on( `click`, `.deleteBtn`, deleteEmployee );
    //$( `#empRow`).on( `click`, `.deleteBtn`, exploreThis );
    render();
}

const employees = [];

function deleteEmployee(){
    let rowName = $(this).closest( `td` )
    // console.log( `inside deleteEmployee` );
    // console.log( rowName );
    $(this).closest( `td` ).remove();
}

// IF Dane does not go over reconciling monthly sum make sure you ask.
// My attempt to remove the row in the array with the empID from deleted row.
// empID is being stored in the table class employeeID
// function exploreThis(){
//     let outputThis = $(this);
//     let outputThis2 = $(this).closest( `td`,`.employeeID` );
//     console.log(`what is outputThis`, outputThis );
//     console.log(`what is outputThis2`, outputThis2 );
//     for (let i = 0; i < employees.length; i++) {
//         let foundYou = employees[i].empID;
//         console.log( foundYou );
//     }
//     if ( foundYou = 65 ) {
//         console.log( `Remove this EmployeeID`, foundYou );
//     }
// }

function addEmployee(){
    // console.log( `Submit Button` );
    let fname = $( `#fnameInput` ).val();
    let lname = $( `#lnameInput` ).val();
    let empID = $( `#empIdInput` ).val();
    let title = $( `#titleInput` ).val();
    let salary = parseFloat($( `#salaryInput` ).val()).toFixed(2);
    // console.log( fname, lname, empID, title, salary );
    // adding fields to an object
    let newEmployee = {
        fname: $( `#fnameInput` ).val(),
        lname: $( `#lnameInput` ).val(),
        empID: $( `#empIdInput` ).val(),
        title: $( `#titleInput` ).val(),
        salary: $( `#salaryInput` ).val()
    };
    // console.log( newEmployee );
    // storing data into an array in order to get sum of salary
    employees.push( newEmployee );
    render();
    // console.log( `this is the employees array`, employees );
    $( `#empRow` ).append(`
        <tr>
            <td>${fname}</td>
            <td>${lname}</td>
            <td class="employeeID">${empID}</td>
            <td>${title}</td>
            <td class="salary">${salary}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
    `)

    $( `#fnameInput` ).val( `` );
    $( `#lnameInput` ).val( `` );
    $( `#empIdInput` ).val( `` );
    $( `#titleInput` ).val( `` );
    $( `#salaryInput` ).val( `` );

    // // Do I need a loop to sum total?
    // monthlySalary += Number(employees.salary);
    // console.log( `this is the monthly salary:`, monthlySalary );

    // for (let i = 0; i < employees.length; i++) {
    //     //let monthlySalary = 0;
    //     monthlySalary += Number(employees[i].salary);
    //     console.log( `this is the monthly salary:`, monthlySalary );
    // }

    // an attempt to clear all fields with only one ID
    //$( `#inputFields` ).val( `` );
}

function render(){
    let monthlySalary = 0;
    for (let i = 0; i < employees.length; i++) {     
        monthlySalary += Number(employees[i].salary/12);     
    }
    let outputSalary = parseFloat(monthlySalary).toFixed(2);
    // console.log( `this is the monthly salary:`, monthlySalary );
    if (monthlySalary > 20000 ) {
    // console.log( `This is 20000` );
        $( `#montlyTotal`).text(outputSalary).css("color", "red");
    } else {
        $( `#montlyTotal`).text(outputSalary).css("color", "black");
    }
}

// Further Updates desired
// apply money format $xxx,xxx,xxx.xx
// Updated total once someone is removed
// validate fields have data before submitting
// validate employee ID is unique
// create either a side container or a nav bar for useful HR/Budget links
// set total monthly output to alter position when changing size of window.

