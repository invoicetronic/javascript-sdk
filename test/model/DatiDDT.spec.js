/**
 * Italian eInvoice API
 * The Italian eInvoice API is a RESTful API that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple and easy to use, abstracting away SDI complexity while still providing complete control over the invoice send/receive process. The API also provides advanced features and a rich toolchain, such as invoice validation, multiple upload methods, webhooks, event logs, CORS support, client SDKs for commonly used languages, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1.0.0
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
    factory(root.expect, root.invoiceSdk);
  }
}(this, function(expect, invoiceSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new invoiceSdk.DatiDDT();
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

  describe('DatiDDT', function() {
    it('should create an instance of DatiDDT', function() {
      // uncomment below and update the code to test DatiDDT
      //var instance = new invoiceSdk.DatiDDT();
      //expect(instance).to.be.a(invoiceSdk.DatiDDT);
    });

    it('should have the property numeroDdt (base name: "numero_ddt")', function() {
      // uncomment below and update the code to test the property numeroDdt
      //var instance = new invoiceSdk.DatiDDT();
      //expect(instance).to.be();
    });

    it('should have the property dataDdt (base name: "data_ddt")', function() {
      // uncomment below and update the code to test the property dataDdt
      //var instance = new invoiceSdk.DatiDDT();
      //expect(instance).to.be();
    });

    it('should have the property riferimentoNumeroLinea (base name: "riferimento_numero_linea")', function() {
      // uncomment below and update the code to test the property riferimentoNumeroLinea
      //var instance = new invoiceSdk.DatiDDT();
      //expect(instance).to.be();
    });

  });

}));
