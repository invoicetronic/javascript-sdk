/**
 * Invoicetronic API
 * The [Invoicetronic API][2] is a RESTful service that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed to be simple and easy to use, abstracting away SDI complexity while providing complete control over the invoice send/receive process. It provides advanced features as encryption at rest, multi-language pre-flight invoice validation, multiple upload formats, webhooks, event logging, client SDKs, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1
 * Contact: support@invoicetronic.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.invoicetronicSdk);
  }
}(this, function(expect, invoicetronicSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new invoicetronicSdk.DettaglioLinee();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DettaglioLinee', function() {
    it('should create an instance of DettaglioLinee', function() {
      // uncomment below and update the code to test DettaglioLinee
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be.a(invoicetronicSdk.DettaglioLinee);
    });

    it('should have the property numeroLinea (base name: "numero_linea")', function() {
      // uncomment below and update the code to test the property numeroLinea
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property tipoCessionePrestazione (base name: "tipo_cessione_prestazione")', function() {
      // uncomment below and update the code to test the property tipoCessionePrestazione
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property codiceArticolo (base name: "codice_articolo")', function() {
      // uncomment below and update the code to test the property codiceArticolo
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property descrizione (base name: "descrizione")', function() {
      // uncomment below and update the code to test the property descrizione
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property quantita (base name: "quantita")', function() {
      // uncomment below and update the code to test the property quantita
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property unitaMisura (base name: "unita_misura")', function() {
      // uncomment below and update the code to test the property unitaMisura
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property dataInizioPeriodo (base name: "data_inizio_periodo")', function() {
      // uncomment below and update the code to test the property dataInizioPeriodo
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property dataFinePeriodo (base name: "data_fine_periodo")', function() {
      // uncomment below and update the code to test the property dataFinePeriodo
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property prezzoUnitario (base name: "prezzo_unitario")', function() {
      // uncomment below and update the code to test the property prezzoUnitario
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property scontoMaggiorazione (base name: "sconto_maggiorazione")', function() {
      // uncomment below and update the code to test the property scontoMaggiorazione
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property prezzoTotale (base name: "prezzo_totale")', function() {
      // uncomment below and update the code to test the property prezzoTotale
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property aliquotaIva (base name: "aliquota_iva")', function() {
      // uncomment below and update the code to test the property aliquotaIva
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property ritenuta (base name: "ritenuta")', function() {
      // uncomment below and update the code to test the property ritenuta
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property natura (base name: "natura")', function() {
      // uncomment below and update the code to test the property natura
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property riferimentoAmministrazione (base name: "riferimento_amministrazione")', function() {
      // uncomment below and update the code to test the property riferimentoAmministrazione
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

    it('should have the property altriDatiGestionali (base name: "altri_dati_gestionali")', function() {
      // uncomment below and update the code to test the property altriDatiGestionali
      //var instance = new invoicetronicSdk.DettaglioLinee();
      //expect(instance).to.be();
    });

  });

}));
