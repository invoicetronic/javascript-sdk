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

import ApiClient from '../ApiClient';

/**
 * The ScontoMaggiorazione model module.
 * @module model/ScontoMaggiorazione
 * @version 1.0.0
 */
class ScontoMaggiorazione {
    /**
     * Constructs a new <code>ScontoMaggiorazione</code>.
     * @alias module:model/ScontoMaggiorazione
     */
    constructor() { 
        
        ScontoMaggiorazione.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScontoMaggiorazione</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScontoMaggiorazione} obj Optional instance to populate.
     * @return {module:model/ScontoMaggiorazione} The populated <code>ScontoMaggiorazione</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScontoMaggiorazione();

            if (data.hasOwnProperty('tipo')) {
                obj['tipo'] = ApiClient.convertToType(data['tipo'], 'String');
            }
            if (data.hasOwnProperty('percentuale')) {
                obj['percentuale'] = ApiClient.convertToType(data['percentuale'], 'Number');
            }
            if (data.hasOwnProperty('importo')) {
                obj['importo'] = ApiClient.convertToType(data['importo'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScontoMaggiorazione</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScontoMaggiorazione</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tipo'] && !(typeof data['tipo'] === 'string' || data['tipo'] instanceof String)) {
            throw new Error("Expected the field `tipo` to be a primitive type in the JSON string but got " + data['tipo']);
        }

        return true;
    }


}



/**
 * @member {String} tipo
 */
ScontoMaggiorazione.prototype['tipo'] = undefined;

/**
 * @member {Number} percentuale
 */
ScontoMaggiorazione.prototype['percentuale'] = undefined;

/**
 * @member {Number} importo
 */
ScontoMaggiorazione.prototype['importo'] = undefined;






export default ScontoMaggiorazione;

