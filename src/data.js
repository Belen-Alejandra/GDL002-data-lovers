window.dataLovers = {
  filterCountry: function filterCountry(country, indicatorsPerceptionCult) {
    const dataCountry = WORLDBANK[country];

    const indicatorsCountry = dataCountry.indicators.filter(function (indicator) {
      const indicatorCode = indicator.indicatorCode;
      const indicatorCodePerception = indicatorsPerceptionCult.map(ind => ind.indicatorCode);
      const isIn = indicatorCodePerception.findIndex(function (val) {
        return val === indicatorCode;
      });

      return isIn !== -1;
    });

    return indicatorsCountry;
  },


  showIndicatorNamesCountry: function showIndicatorNamesCountry(indicators, parentElement) {
    indicators.forEach(function(element) {
      const indicatorValue = element;
      const newP = document.createElement("p");
      const link = document.createElement("a");
      newP.setAttribute("class", "one-indicator");
      link.setAttribute("data-code", indicatorValue.indicatorCode);
      link.setAttribute("data-country", indicatorValue.countryCode);
      link.href = '#';
      const content = document.createTextNode(indicatorValue.indicatorName);
      newP.appendChild(link);
      link.appendChild(content);
      parentElement.parentNode.insertBefore(newP, parentElement.nextSibling);
    });

  },


  filterIndicatorYear: function filterIndicatorYear(code, country, indicatorsPerceptionCult) {
    const countryInd = window.dataLovers.filterCountry(country, indicatorsPerceptionCult);
    const dataYear = countryInd.filter(indicator => indicator.indicatorCode == code);

    return dataYear[0].data;
  },


  //Mostrar en pantalla Indicadores por categoria
  showAllIndicators: function showAllIndicators(category, parentElement) {
    category.forEach(function(element) {
      const indicatorValue = element;
      const newP = document.createElement("p");
      const link = document.createElement("a");
      link.setAttribute("class", "each-indicator");
      link.setAttribute("data-code", indicatorValue.indicatorCode);
      // const newPSetCountry = link.setAttribute("data-country", indicatorValue.countryCode)
      link.href = '#';
      const content = document.createTextNode(indicatorValue.indicatorName);
      newP.appendChild(link);
      link.appendChild(content);
      parentElement.parentNode.insertBefore(newP, parentElement.nextSibling);

    });

  },

  orderAscendant: function orderAscendant(array) {
    array.sort(function(a, b) {
      return a.percent - b.percent;
    });
    return array;
  },

  orderDescendant: function orderDescendant(array) {
    array.sort(function(a, b) {
      return b.percent - a.percent;
    });
    return array;
  },

  filterYearAllContries: function filterYearAllContries(year,data) {
      let mapYears = [];
      data.forEach(function(e) {
        mapYears.push(e[year]);
      });
      return mapYears;
  },

  //Elimina espacios vacios en un arreglo para poder sumar, devuelve un arreglo sin espacios nulos
  forSum: function forSum(array){
      const numSum = array.filter(num => num >=0.0001);
      return numSum;
    },

  average: (numbers) => {
    let sum = 0;
    const total = numbers.length;
    numbers.forEach(function(item) {
      //if(item == ""){
      //  item == 0;
    //  }
      sum += item;
    });
    return sum/total;
  },

};
