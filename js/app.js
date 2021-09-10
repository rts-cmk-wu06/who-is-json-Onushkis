//--------------------------------------------------- 6 opgaver

//Fetch promise based
//request and respon... promis
fetch("js/team.json")
  .then((response) => response.json())
//   .then((date) => console.log(date));
.then((date) => {
    console.log(date)});
//------------------------------------------------ 1st opgave

// I made an array of 4 json objects

// dataArray is an array of jsons objects

/* const dataArray = [
    {
    fornavn: "Ona",
    efternavn:"Girdzijauskaite",
    alder:33,
    hårfarve: "brun",
    skostørrelse: 40
},

{
    fornavn: "Mario",
    efternavn:"Girdzi",
    alder:35,
    hårfarve: "brun",
    skostørrelse: 45
},

{
    fornavn: "ROna",
    efternavn:"Girdzijau",
    alder:23,
    hårfarve: "brun",
    skostørrelse: 42
},

{
    fornavn: "Cona",
    efternavn:"Girdzija",
    alder:38,
    hårfarve: "brun",
    skostørrelse: 49
}

] */

//-------------------------------------------------------2nd opgaver

// loop over the array of Json
//Loop for each means: repeat one after one

// dataArray.forEach(fornavn => { I CAN WRITE ALSO
/*  dataArray.forEach(element => {

    //and print in the console each element fornav  value. Use the stringify method to convert
    // a JavaScript value to a Jsaon string.
    console.log(JSON.stringify(element.fornavn))
 });  */

// //-------------------------------------------------------3nd opgaver

/* 

 dataArray.forEach(element => {

    //and print in the console each element fornav  value. Use the stringify method to convert
    // a JavaScript value to a Jsaon string.
    console.log(JSON.stringify(element.fornavn + " " + element.efternavn))

    //   console.log(JSON.stringify(element.fornavn, element.efternavn))
    console.log(`${element.fornavn} ${element.efternavn}`);
 });  */

/* //example with + for each, ellement could be a number or age or no matter what

var agesArray = [23, 56, 78]
 
agesArray.forEach(element => {
    console.log(element + 2);
}) 
 */

//--------------------------------------------------- 4 opgaver

//prins as an array , BUt NO list
/* 
 let arr = [{name: "Jack"}, { efternavn:"Girdzijauskaite",}, {alder:33,}];
document.getElementById("arrPrint").innerHTML = JSON.stringify(arr, null, 2);  */

/* let ul = document.querySelector("#list");

dataArray.forEach((element) => {
  let listitem = document.createElement("li");
  listitem.textContent = `${element.fornavn} ${element.efternavn}`;
  ul.appendChild(listitem); */
/* 
    //   console.log(JSON.stringify(element.fornavn, element.efternavn))
    console.log(`${element.fornavn} ${element.efternavn}`); */
/* });
 */
