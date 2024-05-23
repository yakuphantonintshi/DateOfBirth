//Please create an application that will let users submit their ID number using an element and check to see if it is 13 characters long and it is a number
//Display the following data:
// Day/Month/Year
//Gender : Male or Female

function Submit() {
  let idNumb = document.querySelector(".id").value;
  let output = document.querySelector(".output");
  let results = document.querySelector(".results");
  console.log(output)
//   console.log(typeof idNumb)
  if (idNumb.length == 13) {
    output.innerHTML = `Date of birth: ${idNumb.slice(4, 6)}/${idNumb.slice(2,4)}/20${idNumb.slice(0, 2)}`;
    if(idNumb.slice(6, 10) > 5000){
        results.innerHTML = `Gender: Male`;
    }
    else{
        results.innerHTML = "Gender: Female"
    }
}
else{
    output.innerHTML = "ID number not valid";
}
}
