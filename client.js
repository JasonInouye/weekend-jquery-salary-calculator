console.log( `js` );

$(readyNow);

function readyNow(){
    console.log( `JQuery is loaded` );
    $( `.submitBtn`).on( `click`, addEmployee );
    //$( `.sumSalary`).on( `click`, monthlySalarySum );
    // you need to load an existing DOM object and use the dynamic ID or CLASS in the parent > child tree
    $( `#empRow`).on( `click`, `.deleteBtn`, deleteEmployee );

    render();
    
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
    // storing data into an array in order to get sum of salary
    employees.push( newEmployee );
    render();

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
        monthlySalary += Number(employees[i].salary);     
    }

    // console.log( `this is the monthly salary:`, monthlySalary );
    if (monthlySalary > 20000 ) {
        console.log( `This is 20000` );
        $( `#montlyTotal`).text(monthlySalary).css("color", "red");
    } else {
        $( `#montlyTotal`).text(monthlySalary).css("color", "black");
    }
}