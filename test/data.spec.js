require('../src/data/worldbank/worldbank');
require('../src/data');

const fixtures = require('./data-fixtures');

describe('World data functions', () => {
  it('should be a function', () => {
    expect(typeof (window.dataLovers.filterCountry)).toBe('function');
  });

  it('Should return filterMxData', () => {
     const dataMx = window.dataLovers.filterCountry('MEX', fixtures.indicatorsPerceptionCult);
     expect(dataMx).toEqual(fixtures.filterMxData);
   });

   // it('Should return filterMxData', () => {
   //    const indMX = window.dataLovers.showIndicatorNamesCountry(fixtures.filterMxData, document.getElementById('country-name'));
   //    expect(indMX).toEqual(document.body.innerHTML =
   //    '<p class="one-indicator"><a data-code="SP.M18.2024.FE.ZS" data-country="MEX" href="#">Mujeres que se casaron por primera vez antes de los 18 (% de mujeres 10-24)</a></p>' +
   //    '<p class="one-indicator"><a data-code="SG.VAW.ARGU.ZS" data-country="MEX" href="#">Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella discute con él (%)</a></p>' +
   //    '<p class="one-indicator"><a data-code="SG.VAW.BURN.ZS" data-country="MEX" href="#">Mujeres que creen que está justificado que un marido golpee a su esposa cuando a ella se le quema la comida (%)</a></p>' +
   //    '<p class="one-indicator"><a data-code="SG.VAW.GOES.ZS" data-country="MEX" href="#">Mujeres que creen que está justificado que un marido golpee a su esposa cuando sale sin avisarle (%)</a></p> '+
   //    '<p class="one-indicator"><a data-code="SG.VAW.NEGL.ZS" data-country="MEX" href="#">Mujeres que creen que está justificado que un marido golpee a su esposa cuando descuida a los hijos (%)</a></p>' +
   //    '<p class="one-indicator"><a data-code="SG.VAW.REAS.ZS" data-country="MEX" href="#">Mujeres que creen que está justificado que un marido golpee a su esposa (cualquiera de las cinco razones) (%)</a></p>' +
   //    '<p class="one-indicator"><a data-code="SG.VAW.REFU.ZS" data-country="MEX" href="#">Mujeres que creen que está justificado que un marido golpee a su esposa cuando ella se niega a tener relaciones sexuales (%)</a></p>)');
   //  });

   it('Should return years of the indicator SG.VAW.REFU.ZS of Perú', () => {
      const yearsPer = window.dataLovers.filterIndicatorYear("SG.VAW.REFU.ZS", "PER", fixtures.indicatorsPerceptionCult);
      expect(yearsPer).toEqual(fixtures.objYears);
    });

    it('Should return an array of objects in ascendant order by the percent', () => {
       const orderAscendant = window.dataLovers.orderAscendant(fixtures.objDisorder);
       expect(orderAscendant).toEqual(fixtures.objAscedant );
     });

     it('Should return an array of objects in descendant order by the percent', () => {
        const orderDescendant = window.dataLovers.orderDescendant(fixtures.objDisorder);
        expect(orderDescendant).toEqual(fixtures.objDescendant );
      });

      it('Should return 20.6 the average of the array of numbers 5, 8, 10, 20, 60', () => {
         const average = window.dataLovers.average([5, 8, 10, 20, 60]);
         expect(average).toEqual(20.6);
       });
});
