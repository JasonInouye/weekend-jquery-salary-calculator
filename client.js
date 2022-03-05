console.log( `js` );

$(readyNow);

function readyNow(){
    console.log( `JQuery is loaded` );
    $( `.submitBtn`).on( `click`, addEmployee );
    // you need to load an existing DOM object and use the dynamic ID or CLASS in the parent > child tree
    $( `#empRow`).on( `click`, `.deleteBtn`, deleteEmployee )
    
}

const employees = [];

function deleteEmployee(){
    let rowName = $(this).closest( `tr` )
    console.log( `inside deleteEmployee` );
    console.log( rowName );
    $(this).closest( `tr` ).remove();
}

function addEmployee(){
    console.log( `Submit Button` );
    

    // storing data into an array in order to get sum of salary
   

    let fname = $( `#fnameInput` ).val();
    let lname = $( `#lnameInput` ).val();
    let empID = $( `#empIdInput` ).val();
    let title = $( `#titleInput` ).val();
    let salary = $( `#salaryInput` ).val();

    console.log( fname, lname, empID, title, salary );

    // adding fields to an object
    let newEmployee = {
        fname: $( `#fnameInput` ).val(),
        lname: $( `#lnameInput` ).val(),
        empID: $( `#empIdInput` ).val(),
        title: $( `#titleInput` ).val(),
        salary: $( `#salaryInput` ).val()
    };

    console.log( newEmployee );

    employees.push( newEmployee );

    console.log( `this is the employees array`, employees );
    
    $( `#empRow` ).append(`
        <tr>
            <td>${fname}</td>
            <td>${lname}</td>
            <td>${empID}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
    `)

    $( `#fnameInput` ).val( `` );
    $( `#lnameInput` ).val( `` );
    $( `#empIdInput` ).val( `` );
    $( `#titleInput` ).val( `` );
    $( `#salaryInput` ).val( `` );
    // an attempt to clear all fields with only one ID
    //$( `#inputFields` ).val( `` );
}
