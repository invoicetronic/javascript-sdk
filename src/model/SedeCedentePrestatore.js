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
 * The SedeCedentePrestatore model module.
 * @module model/SedeCedentePrestatore
 * @version 1
 */
class SedeCedentePrestatore {
    /**
     * Constructs a new <code>SedeCedentePrestatore</code>.
     * @alias module:model/SedeCedentePrestatore
     */
    constructor() { 
        
        SedeCedentePrestatore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['nazione'] = 'IT';
    }

    /**
     * Constructs a <code>SedeCedentePrestatore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SedeCedentePrestatore} obj Optional instance to populate.
     * @return {module:model/SedeCedentePrestatore} The populated <code>SedeCedentePrestatore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SedeCedentePrestatore();

            if (data.hasOwnProperty('indirizzo')) {
                obj['indirizzo'] = ApiClient.convertToType(data['indirizzo'], 'String');
            }
            if (data.hasOwnProperty('numero_civico')) {
                obj['numero_civico'] = ApiClient.convertToType(data['numero_civico'], 'String');
            }
            if (data.hasOwnProperty('cap')) {
                obj['cap'] = ApiClient.convertToType(data['cap'], 'String');
            }
            if (data.hasOwnProperty('comune')) {
                obj['comune'] = ApiClient.convertToType(data['comune'], 'String');
            }
            if (data.hasOwnProperty('provincia')) {
                obj['provincia'] = ApiClient.convertToType(data['provincia'], 'String');
            }
            if (data.hasOwnProperty('nazione')) {
                obj['nazione'] = ApiClient.convertToType(data['nazione'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SedeCedentePrestatore</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SedeCedentePrestatore</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['indirizzo'] && !(typeof data['indirizzo'] === 'string' || data['indirizzo'] instanceof String)) {
            throw new Error("Expected the field `indirizzo` to be a primitive type in the JSON string but got " + data['indirizzo']);
        }
        // ensure the json data is a string
        if (data['numero_civico'] && !(typeof data['numero_civico'] === 'string' || data['numero_civico'] instanceof String)) {
            throw new Error("Expected the field `numero_civico` to be a primitive type in the JSON string but got " + data['numero_civico']);
        }
        // ensure the json data is a string
        if (data['cap'] && !(typeof data['cap'] === 'string' || data['cap'] instanceof String)) {
            throw new Error("Expected the field `cap` to be a primitive type in the JSON string but got " + data['cap']);
        }
        // ensure the json data is a string
        if (data['comune'] && !(typeof data['comune'] === 'string' || data['comune'] instanceof String)) {
            throw new Error("Expected the field `comune` to be a primitive type in the JSON string but got " + data['comune']);
        }
        // ensure the json data is a string
        if (data['provincia'] && !(typeof data['provincia'] === 'string' || data['provincia'] instanceof String)) {
            throw new Error("Expected the field `provincia` to be a primitive type in the JSON string but got " + data['provincia']);
        }
        // ensure the json data is a string
        if (data['nazione'] && !(typeof data['nazione'] === 'string' || data['nazione'] instanceof String)) {
            throw new Error("Expected the field `nazione` to be a primitive type in the JSON string but got " + data['nazione']);
        }

        return true;
    }


}



/**
 * @member {String} indirizzo
 */
SedeCedentePrestatore.prototype['indirizzo'] = undefined;

/**
 * @member {String} numero_civico
 */
SedeCedentePrestatore.prototype['numero_civico'] = undefined;

/**
 * @member {String} cap
 */
SedeCedentePrestatore.prototype['cap'] = undefined;

/**
 * @member {String} comune
 */
SedeCedentePrestatore.prototype['comune'] = undefined;

/**
 * @member {String} provincia
 */
SedeCedentePrestatore.prototype['provincia'] = undefined;

/**
 * @member {String} nazione
 * @default 'IT'
 */
SedeCedentePrestatore.prototype['nazione'] = 'IT';






export default SedeCedentePrestatore;

