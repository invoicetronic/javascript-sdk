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
import DatiAnagrafici from './DatiAnagrafici';

/**
 * The RappresentanteFiscale model module.
 * @module model/RappresentanteFiscale
 * @version 1.0.0
 */
class RappresentanteFiscale {
    /**
     * Constructs a new <code>RappresentanteFiscale</code>.
     * @alias module:model/RappresentanteFiscale
     */
    constructor() { 
        
        RappresentanteFiscale.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RappresentanteFiscale</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RappresentanteFiscale} obj Optional instance to populate.
     * @return {module:model/RappresentanteFiscale} The populated <code>RappresentanteFiscale</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RappresentanteFiscale();

            if (data.hasOwnProperty('dati_anagrafici')) {
                obj['dati_anagrafici'] = DatiAnagrafici.constructFromObject(data['dati_anagrafici']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RappresentanteFiscale</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RappresentanteFiscale</code>.
     */
    static validateJSON(data) {
        // validate the optional field `dati_anagrafici`
        if (data['dati_anagrafici']) { // data not null
          DatiAnagrafici.validateJSON(data['dati_anagrafici']);
        }

        return true;
    }


}



/**
 * @member {module:model/DatiAnagrafici} dati_anagrafici
 */
RappresentanteFiscale.prototype['dati_anagrafici'] = undefined;






export default RappresentanteFiscale;

