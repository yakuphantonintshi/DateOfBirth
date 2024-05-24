//Please create an application that will let users submit their ID number using an element and check to see if it is 13 characters long and it is a number
//Display the following data:
// Day/Month/Year
//Gender : Male or Female

function Submit() {
  let idNumb = document.querySelector(".id").value;
  let output = document.querySelector(".output");
  let results = document.querySelector(".results");

    console.log(idNumb.length);
  if (idNumb.length != 13 || idNumb.slice(4 , 6) > 31 || idNumb.slice(2 , 4) > 12 ){
    output.innerText = `ID number not valid`;
    results.innerText = ""
   
   } else {
    if ((idNumb.length == 13) && (idNumb[0] >-1 && idNumb[0] < 3))  {
        output.innerHTML = `Date of birth: ${idNumb.slice(4, 6)}/${idNumb.slice(2,4)}/20${idNumb.slice(0, 2)}`;
      } 
      else{
        output.innerHTML =`Date of birth: ${idNumb.slice(4, 6)}/${idNumb.slice(2,4)}/19${idNumb.slice(0, 2)}`;
    }

    if(idNumb.slice(6, 10) > 5000){
        results.innerHTML = `Gender: Male`;
    }else{
        results.innerHTML = "Gender: Female"
    }
   }
}


