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
 * The DatiOrdineAcquisto model module.
 * @module model/DatiOrdineAcquisto
 * @version 1
 */
class DatiOrdineAcquisto {
    /**
     * Constructs a new <code>DatiOrdineAcquisto</code>.
     * @alias module:model/DatiOrdineAcquisto
     */
    constructor() { 
        
        DatiOrdineAcquisto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatiOrdineAcquisto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatiOrdineAcquisto} obj Optional instance to populate.
     * @return {module:model/DatiOrdineAcquisto} The populated <code>DatiOrdineAcquisto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatiOrdineAcquisto();

            if (data.hasOwnProperty('riferimento_numero_linea')) {
                obj['riferimento_numero_linea'] = ApiClient.convertToType(data['riferimento_numero_linea'], ['Number']);
            }
            if (data.hasOwnProperty('id_documento')) {
                obj['id_documento'] = ApiClient.convertToType(data['id_documento'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'Date');
            }
            if (data.hasOwnProperty('num_item')) {
                obj['num_item'] = ApiClient.convertToType(data['num_item'], 'String');
            }
            if (data.hasOwnProperty('codice_commessa_convenzione')) {
                obj['codice_commessa_convenzione'] = ApiClient.convertToType(data['codice_commessa_convenzione'], 'String');
            }
            if (data.hasOwnProperty('codice_cup')) {
                obj['codice_cup'] = ApiClient.convertToType(data['codice_cup'], 'String');
            }
            if (data.hasOwnProperty('codice_cig')) {
                obj['codice_cig'] = ApiClient.convertToType(data['codice_cig'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatiOrdineAcquisto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatiOrdineAcquisto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['riferimento_numero_linea'])) {
            throw new Error("Expected the field `riferimento_numero_linea` to be an array in the JSON data but got " + data['riferimento_numero_linea']);
        }
        // ensure the json data is a string
        if (data['id_documento'] && !(typeof data['id_documento'] === 'string' || data['id_documento'] instanceof String)) {
            throw new Error("Expected the field `id_documento` to be a primitive type in the JSON string but got " + data['id_documento']);
        }
        // ensure the json data is a string
        if (data['num_item'] && !(typeof data['num_item'] === 'string' || data['num_item'] instanceof String)) {
            throw new Error("Expected the field `num_item` to be a primitive type in the JSON string but got " + data['num_item']);
        }
        // ensure the json data is a string
        if (data['codice_commessa_convenzione'] && !(typeof data['codice_commessa_convenzione'] === 'string' || data['codice_commessa_convenzione'] instanceof String)) {
            throw new Error("Expected the field `codice_commessa_convenzione` to be a primitive type in the JSON string but got " + data['codice_commessa_convenzione']);
        }
        // ensure the json data is a string
        if (data['codice_cup'] && !(typeof data['codice_cup'] === 'string' || data['codice_cup'] instanceof String)) {
            throw new Error("Expected the field `codice_cup` to be a primitive type in the JSON string but got " + data['codice_cup']);
        }
        // ensure the json data is a string
        if (data['codice_cig'] && !(typeof data['codice_cig'] === 'string' || data['codice_cig'] instanceof String)) {
            throw new Error("Expected the field `codice_cig` to be a primitive type in the JSON string but got " + data['codice_cig']);
        }

        return true;
    }


}



/**
 * @member {Array.<Number>} riferimento_numero_linea
 */
DatiOrdineAcquisto.prototype['riferimento_numero_linea'] = undefined;

/**
 * @member {String} id_documento
 */
DatiOrdineAcquisto.prototype['id_documento'] = undefined;

/**
 * @member {Date} data
 */
DatiOrdineAcquisto.prototype['data'] = undefined;

/**
 * @member {String} num_item
 */
DatiOrdineAcquisto.prototype['num_item'] = undefined;

/**
 * @member {String} codice_commessa_convenzione
 */
DatiOrdineAcquisto.prototype['codice_commessa_convenzione'] = undefined;

/**
 * @member {String} codice_cup
 */
DatiOrdineAcquisto.prototype['codice_cup'] = undefined;

/**
 * @member {String} codice_cig
 */
DatiOrdineAcquisto.prototype['codice_cig'] = undefined;






export default DatiOrdineAcquisto;

