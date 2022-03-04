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
    console.log( fname, lname, empID, title );
    $( `#empRow` ).append(`
    <tr>
        <td>${fname}</td>
        <td>${lname}</td>
        <td>${empID}</td>
        <td>${title}</td>
        <td>${salary}</td>
    </tr>
    `)
}
