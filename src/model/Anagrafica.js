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

import ApiClient from '../ApiClient';

/**
 * The Anagrafica model module.
 * @module model/Anagrafica
 * @version 1
 */
class Anagrafica {
    /**
     * Constructs a new <code>Anagrafica</code>.
     * @alias module:model/Anagrafica
     */
    constructor() { 
        
        Anagrafica.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Anagrafica</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Anagrafica} obj Optional instance to populate.
     * @return {module:model/Anagrafica} The populated <code>Anagrafica</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Anagrafica();

            if (data.hasOwnProperty('denominazione')) {
                obj['denominazione'] = ApiClient.convertToType(data['denominazione'], 'String');
            }
            if (data.hasOwnProperty('nome')) {
                obj['nome'] = ApiClient.convertToType(data['nome'], 'String');
            }
            if (data.hasOwnProperty('cognome')) {
                obj['cognome'] = ApiClient.convertToType(data['cognome'], 'String');
            }
            if (data.hasOwnProperty('titolo')) {
                obj['titolo'] = ApiClient.convertToType(data['titolo'], 'String');
            }
            if (data.hasOwnProperty('cod_eori')) {
                obj['cod_eori'] = ApiClient.convertToType(data['cod_eori'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Anagrafica</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Anagrafica</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['denominazione'] && !(typeof data['denominazione'] === 'string' || data['denominazione'] instanceof String)) {
            throw new Error("Expected the field `denominazione` to be a primitive type in the JSON string but got " + data['denominazione']);
        }
        // ensure the json data is a string
        if (data['nome'] && !(typeof data['nome'] === 'string' || data['nome'] instanceof String)) {
            throw new Error("Expected the field `nome` to be a primitive type in the JSON string but got " + data['nome']);
        }
        // ensure the json data is a string
        if (data['cognome'] && !(typeof data['cognome'] === 'string' || data['cognome'] instanceof String)) {
            throw new Error("Expected the field `cognome` to be a primitive type in the JSON string but got " + data['cognome']);
        }
        // ensure the json data is a string
        if (data['titolo'] && !(typeof data['titolo'] === 'string' || data['titolo'] instanceof String)) {
            throw new Error("Expected the field `titolo` to be a primitive type in the JSON string but got " + data['titolo']);
        }
        // ensure the json data is a string
        if (data['cod_eori'] && !(typeof data['cod_eori'] === 'string' || data['cod_eori'] instanceof String)) {
            throw new Error("Expected the field `cod_eori` to be a primitive type in the JSON string but got " + data['cod_eori']);
        }

        return true;
    }


}



/**
 * @member {String} denominazione
 */
Anagrafica.prototype['denominazione'] = undefined;

/**
 * @member {String} nome
 */
Anagrafica.prototype['nome'] = undefined;

/**
 * @member {String} cognome
 */
Anagrafica.prototype['cognome'] = undefined;

/**
 * @member {String} titolo
 */
Anagrafica.prototype['titolo'] = undefined;

/**
 * @member {String} cod_eori
 */
Anagrafica.prototype['cod_eori'] = undefined;






export default Anagrafica;

