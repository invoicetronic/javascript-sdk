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
 * The DatiSAL model module.
 * @module model/DatiSAL
 * @version 1
 */
class DatiSAL {
    /**
     * Constructs a new <code>DatiSAL</code>.
     * @alias module:model/DatiSAL
     */
    constructor() { 
        
        DatiSAL.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatiSAL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatiSAL} obj Optional instance to populate.
     * @return {module:model/DatiSAL} The populated <code>DatiSAL</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatiSAL();

            if (data.hasOwnProperty('riferimento_fase')) {
                obj['riferimento_fase'] = ApiClient.convertToType(data['riferimento_fase'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatiSAL</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatiSAL</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} riferimento_fase
 */
DatiSAL.prototype['riferimento_fase'] = undefined;






export default DatiSAL;

