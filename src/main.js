//let menu = document.getElementsByClassName("header");
const sectionTwo = document.getElementById("entendiendo-violencia");
const sectionFlags = document.getElementById("section-flags");
const sectionIndicator = document.getElementById("section-indicator");
const sectionCountry = document.getElementById('section-country');
const sectionIndicatorCountry = document.getElementById('indicator-country');
const sectionCategories = document.getElementById('categories');
<<<<<<< HEAD
const sectionIndicatorCountries = document.getElementById('indicator-countries');
//const sectionHome= document.getElementsById('home');


function display (elements, display = 'inline-block') {
=======
const sectionIndicatorCountries = document.getElementById('indicator-contries');
const sectionHome = document.getElementById('home');
const sectionWhoAreWe = document.getElementById('who-are-we');
let arrData = [];

const indicatorsPerceptionCult = [
  { indicatorCode: "SG.VAW.REFU.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)" },
  { indicatorCode: "SG.VAW.REAS.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)" },
  { indicatorCode: "SG.VAW.NEGL.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa cuando descuida a los hijos (%)" },
  { indicatorCode: "SG.VAW.GOES.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa cuando sale sin avisarle (%)" },
  { indicatorCode: "SG.VAW.BURN.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa cuando a ella se le quema la comida (%)" },
  { indicatorCode: "SG.VAW.ARGU.ZS",
  indicatorName: "Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella discute con él (%)" },
  { indicatorCode: "SP.M18.2024.FE.ZS",
  indicatorName: "Mujeres que se casaron por primera vez antes de los 18 (% de mujeres 10-24)" },
];

const indicatorsLiteracy = [
  { indicatorCode: 'SE.TER.CUAT.MS.FE.ZS',
   indicatorName: 'Nivel de instrucción, al menos nivel de maestría o equivalente, población de más de 25 años, mujeres (%) (acumulativo)' },
  { indicatorCode: 'SE.TER.CUAT.DO.FE.ZS',
  indicatorName: 'Nivel de instrucción, al menos nivel de doctorado o equivalente, población de más de 25 años, mujeres (%) (acumulativo)' },
  { indicatorCode: 'SE.SEC.CUAT.PO.FE.ZS',
  indicatorName: 'Nivel de instrucción, al menos escuela de nivel posterior a la secundaria completa, población de más de 25 años, mujeres (%) (acumulativo)' },
  { indicatorCode: 'SE.PRM.CUAT.FE.ZS',
  indicatorName: 'Nivel de instrucción, al menos escuela primaria completa, población de más de 25 años, mujeres (%) (acumulativo)' },
  { indicatorCode: 'SE.ADT.LITR.FE.ZS',
  indicatorName: 'Tasa de alfabetización, mujeres adultas (% de mujeres de 15 años o más)' },
];

const indicatorUnemployment = [
  { indicatorCode: "SL.UEM.INTM.FE.ZS",
    indicatorName: "Personas desempleadas con educación intermedia, mujeres"},
  { indicatorCode:  "SL.UEM.BASC.FE.ZS",
    indicatorName: "Personas desempleadas con educación básica, mujeres"},
  { indicatorCode: "SL.UEM.ADVN.FE.ZS",
    indicatorName: "Personas desempleadas con educación avanzada, mujeres"},
  { indicatorCode: "SL.UEM.NEET.FE.ZS",
    indicatorName: "Proporción de jóvenes sin educación, empleo ni capacitación, mujeres (% de la población de mujeres jóvenes)"},
];



function display (elements, display = 'flex') {
>>>>>>> 8c349f674c9e5d8288bb3f775da0fd4b6f575a76
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = display;
  }
}


display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry, sectionIndicatorCountry,
         sectionCategories, sectionIndicatorCountries, sectionWhoAreWe], "none");

document.getElementById('link-info').addEventListener("click", linkInfo);
function linkInfo() {
  display([sectionWhoAreWe]);
  display([sectionHome], "none");
}


document.getElementById("btn-data").addEventListener("click", buttonData);
function buttonData() {
  display([sectionTwo], 'inline-block');
  display([sectionHome], "none");
}


document.getElementById("btn-country").addEventListener("click", buttonCountry);
function buttonCountry() {
  display([sectionTwo, sectionCategories], "none");
  display([sectionFlags]);
}

document.getElementById("peru").addEventListener("click", buttonCountryPeru);
function buttonCountryPeru() {
  display([sectionTwo,sectionFlags], "none");
  display([sectionPeru]);
}

document.getElementById("mexico").addEventListener("click", buttonCountryMex);
function buttonCountryMex() {
  display([sectionTwo,sectionFlags,sectionPeru], "none");
  display([sectionMex]);
}

document.getElementById("btn-indicator").addEventListener("click", buttonIndicator);
function buttonIndicator() {
  display([sectionTwo, sectionFlags, sectionCategories], "none");
  display([sectionIndicator]);
}

let country = "";

document.getElementById("mexico").addEventListener("click", buttonFlagMexico);
function buttonFlagMexico() {
  display([sectionTwo, sectionFlags, sectionIndicator,sectionCategories], "none");
  display([sectionCountry]);
<<<<<<< HEAD
  country = document.getElementById("mexico").dataset.country
 const result = filterCountry(country);

=======
  country = document.getElementById("mexico").dataset.country;
  let result = window.dataLovers.filterCountry(country, indicatorsPerceptionCult);
>>>>>>> 8c349f674c9e5d8288bb3f775da0fd4b6f575a76
  const countryNameElement = document.getElementById('country-name');
  window.dataLovers.showIndicatorNamesCountry(result, countryNameElement);
  document.getElementById('title-country').innerHTML = 'Mexico';
  getElementsforEvents('one-indicator', linkIndicator);
}

document.getElementById("peru").addEventListener("click", buttonFlagPeru);
function buttonFlagPeru() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCategories], "none");
  display([sectionCountry]);
  country = document.getElementById("peru").dataset.country;
  let result = window.dataLovers.filterCountry(country, indicatorsPerceptionCult);
  const countryNameElement = document.getElementById('country-name');
  window.dataLovers.showIndicatorNamesCountry(result, countryNameElement);
  document.getElementById('title-country').innerHTML = 'Perú';
  getElementsforEvents('one-indicator', linkIndicator);
}

document.getElementById("chile").addEventListener("click", buttonFlagChile);
function buttonFlagChile() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCategories], "none");
  display([sectionCountry]);
  country = document.getElementById("chile").dataset.country;
  let result = window.dataLovers.filterCountry(country, indicatorsPerceptionCult);
  const countryNameElement = document.getElementById('country-name');
  window.dataLovers.showIndicatorNamesCountry(result, countryNameElement);
  document.getElementById('title-country').innerHTML = 'Chile';
  getElementsforEvents('one-indicator', linkIndicator);
}

document.getElementById("brasil").addEventListener("click", buttonFlagBrasil);
function buttonFlagBrasil() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCategories], "none");
  display([sectionCountry]);
  country = document.getElementById("brasil").dataset.country;
  let result = window.dataLovers.filterCountry(country, indicatorsPerceptionCult);
  const countryNameElement = document.getElementById('country-name');
  window.dataLovers.showIndicatorNamesCountry(result, countryNameElement);
  document.getElementById('title-country').innerHTML = 'Brasil';
  getElementsforEvents('one-indicator', linkIndicator);
}

function linkIndicator() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionIndicatorCountry]);
  //agregar títutlo
  //console.log(event);
  document.getElementById('title-indicator').innerHTML = event.target.innerText;
    //obtener años por indicador por país
  const codeIndicator = event.srcElement.dataset.code;
  const countryIndicator = event.srcElement.dataset.country;
  const objData = window.dataLovers.filterIndicatorYear(codeIndicator, countryIndicator, indicatorsPerceptionCult);

  arrData = [];
  const years = Object.keys(objData);
  const percents = Object.values(objData);

  for (let i = 0; i < years.length; i++) {
    arrData.push({ year: years[i], percent: percents[i]});
  }

  const yearsPercentOrdered = arrData;
  createTableYears(yearsPercentOrdered);
}

//función para crear tabla de años y sus porcentajes por país
function createTableYears(yearsPercentOrdered) {
  // get the reference for the body
  const mybody = document.getElementById("indicator-table-country");

  // creates <table> and <tbody> elements
  const table = document.createElement("table");
  table.setAttribute("id", "table-data");
  const tablebody = document.createElement("tbody");

  const header = document.createElement("tr");

  const cellYears = document.createElement("th");
  const cellPercent = document.createElement("th");

  header.appendChild(cellYears);
  header.appendChild(cellPercent);

  table.appendChild(header);

  // creating all cells
  for(let j = 0; j < yearsPercentOrdered.length; j++) {
    var year = yearsPercentOrdered[j].year;
    var percent = yearsPercentOrdered[j].percent;
    // creates a <tr> element
    const mycurrent_row = document.createElement("tr");
    // creates a <td> element's
    const year_cell = document.createElement("td");
    const percent_cell = document.createElement("td");
    // creates a Text Node
    let currenttext2 = "";
    if (percent == "") { currenttext2 = document.createTextNode("no info.");
      } else {
        currenttext2 = document.createTextNode(percent);
      }
    let currenttext = document.createTextNode(year);
    // appends the Text Node we created into the cell <td>
    year_cell.appendChild(currenttext);
    percent_cell.appendChild(currenttext2);

    // appends the cell <td> into the row <tr>
    mycurrent_row.appendChild(year_cell);
    mycurrent_row.appendChild(percent_cell);

      // appends the row <tr> into <tbody>
      tablebody.appendChild(mycurrent_row);
  }

  const titleYears = document.createTextNode("Años");
  const titlePercents = document.createTextNode("Porcentaje %");

  cellYears.appendChild(titleYears);
  cellPercent.appendChild(titlePercents);

  // appends <tbody> into <table>
  table.appendChild(tablebody);
  // appends <table> into <body>
  mybody.appendChild(table);
  // sets the border attribute of mytable to 2;
  table.setAttribute("border","2");
}

document.getElementById('example').addEventListener('change', sortByAscendant);
function sortByAscendant(event) {
  const value = event.target.value;
  if (value === 'descendant') {
    removeOldTable(document.getElementById('table-data'));
    arrData = window.dataLovers.orderDescendant(arrData);
  } else if (value === 'ascendant') {
    removeOldTable(document.getElementById('table-data'));
    arrData = window.dataLovers.orderAscendant(arrData);
  }

  // removeOldTable();
  createTableYears(arrData);
}

function removeOldTable (element) {
  element.parentNode.removeChild(element);
}

document.getElementById("perception-cultural").addEventListener('click', linkPerceptionCultural);
function linkPerceptionCultural() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionCategories]);
  const elementNode = document.getElementById('section-categories');
  window.dataLovers.showAllIndicators(indicatorsPerceptionCult, elementNode);
  getElementsforEvents('each-indicator', linkIndicatorsAllContries);
}

document.getElementById("literacy").addEventListener('click', linkLiteracy);
function linkLiteracy() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionCategories]);
  const elementNode = document.getElementById('section-categories');
  window.dataLovers.showAllIndicators(indicatorsLiteracy, elementNode);
  getElementsforEvents('each-indicator', linkIndicatorsAllContries);
}

document.getElementById("unemployment").addEventListener('click', linkUnemployment);
function linkUnemployment() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionCategories]);
  const elementNode = document.getElementById('section-categories');
  window.dataLovers.showAllIndicators(indicatorUnemployment, elementNode);
  getElementsforEvents('each-indicator', linkIndicatorsAllContries);
}

//// de data.js
let indicatorGrales = (code) => {
      const indiPer = WORLDBANK.PER.indicators.filter(indicator => indicator.indicatorCode == code);
      const indiMex = WORLDBANK.MEX.indicators.filter(indicator => indicator.indicatorCode == code);
      const indiBra = WORLDBANK.BRA.indicators.filter(indicator => indicator.indicatorCode == code);
      const indiChl = WORLDBANK.CHL.indicators.filter(indicator => indicator.indicatorCode == code);
      const indiGral = [indiBra,indiChl,indiMex,indiPer];
       return indiGral;
    };

//retorna nombre paises
const indicatorTableCountry = (code) => {
  const pruebas21=[];
  indicatorGrales(code).forEach(function(e) {
    pruebas21.push(e[0]);
  });
   let fullNames = pruebas21.map(inventor => inventor.countryName);
   return fullNames;
  };

//retorna data
const indicatorTableData = (code) => {
  const pruebas12=[];
  indicatorGrales(code).forEach(function(e) {
    pruebas12.push(e[0]);
  });
   let fullData = pruebas12.map(inventor => inventor.data);
   return fullData;
  };

//
function linkIndicatorsAllContries() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry, sectionCategories], "none");
  display([sectionIndicatorCountries]);
  // console.log(filterIndicatorCategory(event.srcElement.dataset.code));
  //console.log(event);
  event.srcElement.dataset.code;
  // muestra el nombre del indicador en pantaalla
  document.getElementById('title-indicator-grap').innerHTML = event.target.innerText;
  const rangeYears = range(1960,2017);  //crea un arrglo con un min y un max
  selectYear(rangeYears); //crea un select con el rango dado
}


//iterar elementos por clase para los eventos click
function getElementsforEvents(className, functionName) {
  const eachIndicator = document.getElementsByClassName(className);
  const arrayEachIndicator = Object.values(eachIndicator);
  arrayEachIndicator.forEach(function(element) {
        element.addEventListener('click', functionName);
      });
}


document.getElementById('show-table').addEventListener('click', capturarValor);
   function capturarValor(){
     //console.log(linkIndicatorsAllContries())
     const yearValue= document.getElementById("Select1").value;
    const codeIndicator = "SL.UEM.INTM.FE.ZS";
      //const codeIndicator = linkIndicatorsAllContries();

    //nos da un array con los paises para dicho indicador
    const contries = indicatorTableCountry(codeIndicator);
      //da un arreglo con los datos de cada pais para el indicador
    const data = indicatorTableData(codeIndicator);
    const dataYears = window.dataLovers.filterYearAllContries(yearValue,data);//regresa un arreglo con la informacion para el ano seleccionado
    tableYear(contries,dataYears);  //crea la tabla
    const dataSum = window.dataLovers.forSum(dataYears); //toma los valores y checa espacios vacios y los quita
    window.dataLovers.average(dataSum); //da el promedio
    // removeOldTable(document.getElementById("table-years-table"));
}

function range(min, max) {
  let ran=[];
  for(let i=min; i<=max; i++){
    ran = ran.concat(i);
}
  return ran;
}

//crea un select dado un arreglo de valores determinado
function selectYear(rangeYears){
const select1 = document.getElementById("select1");
let sel = document.createElement('select');
sel.name = 'drop1';
sel.id = 'Select1';

let options_num = "";

rangeYears.forEach( function(year) {
  options_num += '<option value="' + year + '">' + year + '</option>';
});
sel.innerHTML = options_num;
  //document.body.appendChild(sel);
  select1.appendChild(sel);
}

//Crea una tabla dado un ano seleccionado y su lista de informacion
function tableYear(contries,porcentaje) {
// get the reference for the body
const mybody = document.getElementById("table-years");


// creates <table> and <tbody> elements
const table = document.createElement("table");
table.setAttribute("id", "table-years-table");
const tablebody = document.createElement("tbody");

const header = document.createElement("tr");

const cellYears = document.createElement("th");
const cellPercent = document.createElement("th");

header.appendChild(cellYears);
header.appendChild(cellPercent);

table.appendChild(header);

// creating all cells
for(var j = 0; j < 4; j++) {
let countriesName = contries[j];
let percent = porcentaje[j];
 // creates a <tr> element
 const mycurrent_row = document.createElement("tr");
 // creates a <td> element's
 const year_cell = document.createElement("td");
 const percent_cell = document.createElement("td");
 // creates a Text Node
 let currenttext2 = null;
 if (percent == "") { currenttext2 = document.createTextNode("no info.");
   } else {
     currenttext2 = document.createTextNode(percent);
   }
       const currenttext = document.createTextNode(countriesName);
       // appends the Text Node we created into the cell <td>
       year_cell.appendChild(currenttext);
       percent_cell.appendChild(currenttext2);

       // appends the cell <td> into the row <tr>
       mycurrent_row.appendChild(year_cell);
       mycurrent_row.appendChild(percent_cell);

   // appends the row <tr> into <tbody>
   tablebody.appendChild(mycurrent_row);
}

const footer = document.createElement("tr");

const cellAverage = document.createElement("th");
const average = document.createElement("th");

footer.appendChild(cellAverage);
footer.appendChild(average);

tablebody.appendChild(footer);

 const years = document.createTextNode("País");
 const percents = document.createTextNode("Porcentaje %");

 cellYears.appendChild(years);
 cellPercent.appendChild(percents);
 const yearsAverage = document.createTextNode("Promedio");
 const percentsAverage = document.createTextNode(window.dataLovers.average(window.dataLovers.forSum(porcentaje)));

 cellAverage.appendChild(yearsAverage);
 average.appendChild(percentsAverage);

// appends <tbody> into <table>
table.appendChild(tablebody);
// appends <table> into <body>
mybody.appendChild(table);
// sets the border attribute of mytable to 2;
table.setAttribute("border","10");
//table.setAttribute("align","center");
}
