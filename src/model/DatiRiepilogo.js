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
 * The DatiRiepilogo model module.
 * @module model/DatiRiepilogo
 * @version 1
 */
class DatiRiepilogo {
    /**
     * Constructs a new <code>DatiRiepilogo</code>.
     * @alias module:model/DatiRiepilogo
     */
    constructor() { 
        
        DatiRiepilogo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatiRiepilogo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatiRiepilogo} obj Optional instance to populate.
     * @return {module:model/DatiRiepilogo} The populated <code>DatiRiepilogo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatiRiepilogo();

            if (data.hasOwnProperty('aliquota_iva')) {
                obj['aliquota_iva'] = ApiClient.convertToType(data['aliquota_iva'], 'Number');
            }
            if (data.hasOwnProperty('natura')) {
                obj['natura'] = ApiClient.convertToType(data['natura'], 'String');
            }
            if (data.hasOwnProperty('spese_accessorie')) {
                obj['spese_accessorie'] = ApiClient.convertToType(data['spese_accessorie'], 'Number');
            }
            if (data.hasOwnProperty('arrotondamento')) {
                obj['arrotondamento'] = ApiClient.convertToType(data['arrotondamento'], 'Number');
            }
            if (data.hasOwnProperty('imponibile_importo')) {
                obj['imponibile_importo'] = ApiClient.convertToType(data['imponibile_importo'], 'Number');
            }
            if (data.hasOwnProperty('imposta')) {
                obj['imposta'] = ApiClient.convertToType(data['imposta'], 'Number');
            }
            if (data.hasOwnProperty('esigibilita_iva')) {
                obj['esigibilita_iva'] = ApiClient.convertToType(data['esigibilita_iva'], 'String');
            }
            if (data.hasOwnProperty('riferimento_normativo')) {
                obj['riferimento_normativo'] = ApiClient.convertToType(data['riferimento_normativo'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatiRiepilogo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatiRiepilogo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['natura'] && !(typeof data['natura'] === 'string' || data['natura'] instanceof String)) {
            throw new Error("Expected the field `natura` to be a primitive type in the JSON string but got " + data['natura']);
        }
        // ensure the json data is a string
        if (data['esigibilita_iva'] && !(typeof data['esigibilita_iva'] === 'string' || data['esigibilita_iva'] instanceof String)) {
            throw new Error("Expected the field `esigibilita_iva` to be a primitive type in the JSON string but got " + data['esigibilita_iva']);
        }
        // ensure the json data is a string
        if (data['riferimento_normativo'] && !(typeof data['riferimento_normativo'] === 'string' || data['riferimento_normativo'] instanceof String)) {
            throw new Error("Expected the field `riferimento_normativo` to be a primitive type in the JSON string but got " + data['riferimento_normativo']);
        }

        return true;
    }


}



/**
 * @member {Number} aliquota_iva
 */
DatiRiepilogo.prototype['aliquota_iva'] = undefined;

/**
 * @member {String} natura
 */
DatiRiepilogo.prototype['natura'] = undefined;

/**
 * @member {Number} spese_accessorie
 */
DatiRiepilogo.prototype['spese_accessorie'] = undefined;

/**
 * @member {Number} arrotondamento
 */
DatiRiepilogo.prototype['arrotondamento'] = undefined;

/**
 * @member {Number} imponibile_importo
 */
DatiRiepilogo.prototype['imponibile_importo'] = undefined;

/**
 * @member {Number} imposta
 */
DatiRiepilogo.prototype['imposta'] = undefined;

/**
 * @member {String} esigibilita_iva
 */
DatiRiepilogo.prototype['esigibilita_iva'] = undefined;

/**
 * @member {String} riferimento_normativo
 */
DatiRiepilogo.prototype['riferimento_normativo'] = undefined;






export default DatiRiepilogo;

