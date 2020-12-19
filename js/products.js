
// get input element 
let shoeSearch = document.getElementById('shoeSearch');

//Add event listener
shoeSearch.addEventListener('keyup', filterShoes);

function filterShoes(){
    //Get value of inputs
    let filterValue = document.getElementById('shoeSearch').value.toUpperCase();
    console.log('filterValue');
}
