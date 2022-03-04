console.log( `js` );

$(readyNow);

function readyNow(){
    console.log( `JQuery is loaded` );
    $( `.submitBtn`).on( `click`, addEmployee );
}

function addEmployee(){
    console.log( `Submit Button` );
}
