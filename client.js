console.log( `js` );

$(readyNow);

function readyNow(){
    console.log( `JQuery is loaded` );
    $( `.submitBtn`).on( `click`, addEmployee );

    
}

function addEmployee(){
    console.log( `Submit Button` );
    let fname = $( `#fnameInput` ).val();
    let lname = $( `#lnameInput` ).val();
    let empID = $( `#empIdInput` ).val();
    let title = $( `#titleInput` ).val();
    let salary = $( `#salaryInput` ).val();
    console.log( fname, lname, empID, title, salary );
    $( `#empRow` ).append(`
        <tr id="${empID}">
            <td>${fname}</td>
            <td>${lname}</td>
            <td>${empID}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button id="${empID}">Delete</button></td>
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
