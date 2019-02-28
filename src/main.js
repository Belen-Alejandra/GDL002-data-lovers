//let menu = document.getElementsByClassName("header");
let sectionTwo = document.getElementById("entendiendo-violencia");
let sectionFlags = document.getElementById("section-flags");
let sectionIndicator = document.getElementById("section-indicator");
let sectionCountry = document.getElementById('section-country');
let sectionIndicatorCountry = document.getElementById('indicator-country');
const sectionCategories = document.getElementById('categories');
const sectionIndicatorCountries = document.getElementById('indicator-countries');


function display (elements, display = 'inline-block') {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = display;
  }
}

display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry, sectionIndicatorCountry, sectionCategories, sectionIndicatorCountries], "none");


document.getElementById("btn-data").addEventListener("click", buttonData);
function buttonData() {
  display([sectionTwo]);
}


document.getElementById("btn-country").addEventListener("click", buttonCountry);
function buttonCountry() {
  display([sectionTwo, sectionCategories], "none");
  display([sectionFlags]);
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
  country = document.getElementById("mexico").dataset.country
  let result = filterCountry(country)
  const countryNameElement = document.getElementById('country-name');
  showIndicatorNames(result, countryNameElement)
  document.getElementById('title-country').innerHTML = 'Mexico';
  getElementsforEvents('one-indicator', linkIndicator);
}

document.getElementById("peru").addEventListener("click", buttonFlagPeru);
function buttonFlagPeru() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCategories], "none");
  display([sectionCountry]);
  country = document.getElementById("peru").dataset.country
  let result = filterCountry(country)
  const countryNameElement = document.getElementById('country-name');
  showIndicatorNames(result, countryNameElement)
  document.getElementById('title-country').innerHTML = 'Perú';
  getElementsforEvents('one-indicator', linkIndicator);
}

document.getElementById("chile").addEventListener("click", buttonFlagChile);
function buttonFlagChile() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCategories], "none");
  display([sectionCountry]);
  country = document.getElementById("chile").dataset.country
  let result = filterCountry(country)
  const countryNameElement = document.getElementById('country-name');
  showIndicatorNames(result, countryNameElement)
  document.getElementById('title-country').innerHTML = 'Chile';
  getElementsforEvents('one-indicator', linkIndicator);
}

document.getElementById("brasil").addEventListener("click", buttonFlagBrasil);
function buttonFlagBrasil() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCategories], "none");
  display([sectionCountry]);
  country = document.getElementById("brasil").dataset.country
  let result = filterCountry(country);
  const countryNameElement = document.getElementById('country-name');
  showIndicatorNames(result, countryNameElement);
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
  const objData = filterIndicatorYear(codeIndicator, countryIndicator);
  console.log(objData);
  createTableYears(objData);
}

//función para crear tabla de años y sus porcentajes por país
function createTableYears(years) {
        // get the reference for the body
  const mybody = document.getElementById("indicator-table-country");

  // creates <table> and <tbody> elements
  table     = document.createElement("table");
  tablebody = document.createElement("tbody");

  const header = document.createElement("tr");

  const cellYears = document.createElement("th");
  const cellPercent = document.createElement("th");

  header.appendChild(cellYears);
  header.appendChild(cellPercent);

  table.appendChild(header);

  // creating all cells
  for(var j = 0; j < Object.keys(years).length; j++) {
    var year = Object.keys(years)[j];
    var percent = Object.values(years)[j];
    // creates a <tr> element
      mycurrent_row = document.createElement("tr");
          // creates a <td> element's
          year_cell = document.createElement("td");
          percent_cell = document.createElement("td");
          // creates a Text Node
    if (percent == "") { currenttext2 = document.createTextNode("no info.");
      } else {
        currenttext2 = document.createTextNode(percent);
      }
          currenttext = document.createTextNode(year);
          // appends the Text Node we created into the cell <td>
          year_cell.appendChild(currenttext);
          percent_cell.appendChild(currenttext2);

          // appends the cell <td> into the row <tr>
          mycurrent_row.appendChild(year_cell);
          mycurrent_row.appendChild(percent_cell);

      // appends the row <tr> into <tbody>
      tablebody.appendChild(mycurrent_row);
  }


          titleYears = document.createTextNode("Años");
          titlePercents = document.createTextNode("Porcentaje %");

          cellYears.appendChild(titleYears);
          cellPercent.appendChild(titlePercents);


  // appends <tbody> into <table>
  table.appendChild(tablebody);
  // appends <table> into <body>
  mybody.appendChild(table);
  // sets the border attribute of mytable to 2;
  table.setAttribute("border","2");
};

document.getElementById("perception-cultural").addEventListener('click', linkPerceptionCultural);
function linkPerceptionCultural() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionCategories]);
  const elementNode = document.getElementById('section-categories');
  showAllIndicators(indicatorsPerceptionCult, elementNode)
  getElementsforEvents('each-indicator', linkIndicatorsAllContries);
}

document.getElementById("literacy").addEventListener('click', linkLiteracy);
function linkLiteracy() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionCategories]);
  const elementNode = document.getElementById('section-categories');
  showAllIndicators(indicatorsLiteracy, elementNode);
  getElementsforEvents('each-indicator', linkIndicatorsAllContries);
}

document.getElementById("unemployment").addEventListener('click', linkUnemployment);
function linkUnemployment() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry], "none");
  display([sectionCategories]);
  const elementNode = document.getElementById('section-categories');
  showAllIndicators(indicatorUnemployment, elementNode);
  getElementsforEvents('each-indicator', linkIndicatorsAllContries);
}

//
function linkIndicatorsAllContries() {
  display([sectionTwo, sectionFlags, sectionIndicator, sectionCountry, sectionCategories], "none");
  display([sectionIndicatorCountries]);
  // console.log(filterIndicatorCategory(event.srcElement.dataset.code));
  //console.log(event);
  const codeIndicator = event.srcElement.dataset.code;
  // filterIndicatorCategory(indicatorsLiteracy, 'SE.TER.CUAT.MS.FE.ZS');
  const contries = indicatorTableCountry(codeIndicator);
  start(contries)
  const data = indicatorTableData(codeIndicator)
  console.log(data);
  // console.log(filterYearAllContries("1980"));
}

function start(codigo) {
               // get the reference for the body
               const mybody = document.getElementById("table-years");


               // creates <table> and <tbody> elements
               table     = document.createElement("table");
               tablebody = document.createElement("tbody");

              const header = document.createElement("tr");

             const cellYears = document.createElement("th");
             const cellPercent = document.createElement("th");

             header.appendChild(cellYears);
             header.appendChild(cellPercent);

             table.appendChild(header);

           //console.log(auxiliar)

               // creating all cells
               for(var j = 0; j < 4; j++) {
                let year = codigo[j];
                   //var percent = Object.values(data)[j];
                   //year = 5;
                  var percent = 2;
                 // creates a <tr> element
                   mycurrent_row = document.createElement("tr");


                       // creates a <td> element's
                       year_cell = document.createElement("td");
                       percent_cell = document.createElement("td");
                       // creates a Text Node
                 if (percent == "") { currenttext2 = document.createTextNode("no info.");
                   } else {
                     currenttext2 = document.createTextNode(percent);
                   }
                       currenttext = document.createTextNode(year);
                       // appends the Text Node we created into the cell <td>
                       year_cell.appendChild(currenttext);
                       percent_cell.appendChild(currenttext2);

                       // appends the cell <td> into the row <tr>
                       mycurrent_row.appendChild(year_cell);
                       mycurrent_row.appendChild(percent_cell);

                   // appends the row <tr> into <tbody>
                   tablebody.appendChild(mycurrent_row);
               }


                       years = document.createTextNode("Anos");
                       percents = document.createTextNode("Porcentaje %");

                       cellYears.appendChild(years);
                       cellPercent.appendChild(percents);


               // appends <tbody> into <table>
               table.appendChild(tablebody);
               // appends <table> into <body>
               mybody.appendChild(table);
               // sets the border attribute of mytable to 2;
               table.setAttribute("border","2");
             }

//iterar elementos por clase para los eventos click
function getElementsforEvents(className, functionName) {
  const eachIndicator = document.getElementsByClassName(className);
  const arrayEachIndicator = Object.values(eachIndicator);
  arrayEachIndicator.forEach(function(element) {
        element.addEventListener('click', functionName);
      });
}
