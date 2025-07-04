/**
 * Invoicetronic API
 * The [Invoicetronic API][2] is a RESTful service that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed to be simple and easy to use, abstracting away SDI complexity while providing complete control over the invoice send/receive process. It provides advanced features as encryption at rest, multi-language pre-flight invoice validation, multiple upload formats, webhooks, event logging, client SDKs, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1
 * Contact: info@invoicetronic.com
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
    instance = new invoicetronicSdk.Receive();
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

  describe('Receive', function() {
    it('should create an instance of Receive', function() {
      // uncomment below and update the code to test Receive
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be.a(invoicetronicSdk.Receive);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "user_id")', function() {
      // uncomment below and update the code to test the property userId
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property companyId (base name: "company_id")', function() {
      // uncomment below and update the code to test the property companyId
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property committente (base name: "committente")', function() {
      // uncomment below and update the code to test the property committente
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property prestatore (base name: "prestatore")', function() {
      // uncomment below and update the code to test the property prestatore
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property fileName (base name: "file_name")', function() {
      // uncomment below and update the code to test the property fileName
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdate (base name: "last_update")', function() {
      // uncomment below and update the code to test the property lastUpdate
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property dateSent (base name: "date_sent")', function() {
      // uncomment below and update the code to test the property dateSent
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property documents (base name: "documents")', function() {
      // uncomment below and update the code to test the property documents
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property encoding (base name: "encoding")', function() {
      // uncomment below and update the code to test the property encoding
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property isRead (base name: "is_read")', function() {
      // uncomment below and update the code to test the property isRead
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

    it('should have the property messageId (base name: "message_id")', function() {
      // uncomment below and update the code to test the property messageId
      //var instance = new invoicetronicSdk.Receive();
      //expect(instance).to.be();
    });

  });

}));
