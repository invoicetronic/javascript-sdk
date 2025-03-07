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
import Anagrafica from './Anagrafica';
import IdFiscaleIVA from './IdFiscaleIVA';

/**
 * The DatiAnagraficiCessionarioCommittente model module.
 * @module model/DatiAnagraficiCessionarioCommittente
 * @version 1
 */
class DatiAnagraficiCessionarioCommittente {
    /**
     * Constructs a new <code>DatiAnagraficiCessionarioCommittente</code>.
     * @alias module:model/DatiAnagraficiCessionarioCommittente
     */
    constructor() { 
        
        DatiAnagraficiCessionarioCommittente.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatiAnagraficiCessionarioCommittente</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatiAnagraficiCessionarioCommittente} obj Optional instance to populate.
     * @return {module:model/DatiAnagraficiCessionarioCommittente} The populated <code>DatiAnagraficiCessionarioCommittente</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatiAnagraficiCessionarioCommittente();

            if (data.hasOwnProperty('id_fiscale_iva')) {
                obj['id_fiscale_iva'] = IdFiscaleIVA.constructFromObject(data['id_fiscale_iva']);
            }
            if (data.hasOwnProperty('codice_fiscale')) {
                obj['codice_fiscale'] = ApiClient.convertToType(data['codice_fiscale'], 'String');
            }
            if (data.hasOwnProperty('anagrafica')) {
                obj['anagrafica'] = Anagrafica.constructFromObject(data['anagrafica']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatiAnagraficiCessionarioCommittente</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatiAnagraficiCessionarioCommittente</code>.
     */
    static validateJSON(data) {
        // validate the optional field `id_fiscale_iva`
        if (data['id_fiscale_iva']) { // data not null
          IdFiscaleIVA.validateJSON(data['id_fiscale_iva']);
        }
        // ensure the json data is a string
        if (data['codice_fiscale'] && !(typeof data['codice_fiscale'] === 'string' || data['codice_fiscale'] instanceof String)) {
            throw new Error("Expected the field `codice_fiscale` to be a primitive type in the JSON string but got " + data['codice_fiscale']);
        }
        // validate the optional field `anagrafica`
        if (data['anagrafica']) { // data not null
          Anagrafica.validateJSON(data['anagrafica']);
        }

        return true;
    }


}



/**
 * @member {module:model/IdFiscaleIVA} id_fiscale_iva
 */
DatiAnagraficiCessionarioCommittente.prototype['id_fiscale_iva'] = undefined;

/**
 * @member {String} codice_fiscale
 */
DatiAnagraficiCessionarioCommittente.prototype['codice_fiscale'] = undefined;

/**
 * @member {module:model/Anagrafica} anagrafica
 */
DatiAnagraficiCessionarioCommittente.prototype['anagrafica'] = undefined;






export default DatiAnagraficiCessionarioCommittente;

