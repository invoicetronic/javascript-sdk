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
import DatiContratto from './DatiContratto';
import DatiConvenzione from './DatiConvenzione';
import DatiDDT from './DatiDDT';
import DatiFattureCollegate from './DatiFattureCollegate';
import DatiGeneraliDocumento from './DatiGeneraliDocumento';
import DatiOrdineAcquisto from './DatiOrdineAcquisto';
import DatiRicezione from './DatiRicezione';
import DatiSAL from './DatiSAL';
import DatiTrasporto from './DatiTrasporto';
import FatturaPrincipale from './FatturaPrincipale';

/**
 * The DatiGenerali model module.
 * @module model/DatiGenerali
 * @version 1.0.0
 */
class DatiGenerali {
    /**
     * Constructs a new <code>DatiGenerali</code>.
     * @alias module:model/DatiGenerali
     */
    constructor() { 
        
        DatiGenerali.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DatiGenerali</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DatiGenerali} obj Optional instance to populate.
     * @return {module:model/DatiGenerali} The populated <code>DatiGenerali</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DatiGenerali();

            if (data.hasOwnProperty('dati_generali_documento')) {
                obj['dati_generali_documento'] = DatiGeneraliDocumento.constructFromObject(data['dati_generali_documento']);
            }
            if (data.hasOwnProperty('dati_ordine_acquisto')) {
                obj['dati_ordine_acquisto'] = ApiClient.convertToType(data['dati_ordine_acquisto'], [DatiOrdineAcquisto]);
            }
            if (data.hasOwnProperty('dati_contratto')) {
                obj['dati_contratto'] = ApiClient.convertToType(data['dati_contratto'], [DatiContratto]);
            }
            if (data.hasOwnProperty('dati_convenzione')) {
                obj['dati_convenzione'] = ApiClient.convertToType(data['dati_convenzione'], [DatiConvenzione]);
            }
            if (data.hasOwnProperty('dati_ricezione')) {
                obj['dati_ricezione'] = ApiClient.convertToType(data['dati_ricezione'], [DatiRicezione]);
            }
            if (data.hasOwnProperty('dati_fatture_collegate')) {
                obj['dati_fatture_collegate'] = ApiClient.convertToType(data['dati_fatture_collegate'], [DatiFattureCollegate]);
            }
            if (data.hasOwnProperty('dati_sal')) {
                obj['dati_sal'] = ApiClient.convertToType(data['dati_sal'], [DatiSAL]);
            }
            if (data.hasOwnProperty('dati_ddt')) {
                obj['dati_ddt'] = ApiClient.convertToType(data['dati_ddt'], [DatiDDT]);
            }
            if (data.hasOwnProperty('dati_trasporto')) {
                obj['dati_trasporto'] = DatiTrasporto.constructFromObject(data['dati_trasporto']);
            }
            if (data.hasOwnProperty('fattura_principale')) {
                obj['fattura_principale'] = FatturaPrincipale.constructFromObject(data['fattura_principale']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DatiGenerali</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DatiGenerali</code>.
     */
    static validateJSON(data) {
        // validate the optional field `dati_generali_documento`
        if (data['dati_generali_documento']) { // data not null
          DatiGeneraliDocumento.validateJSON(data['dati_generali_documento']);
        }
        if (data['dati_ordine_acquisto']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['dati_ordine_acquisto'])) {
                throw new Error("Expected the field `dati_ordine_acquisto` to be an array in the JSON data but got " + data['dati_ordine_acquisto']);
            }
            // validate the optional field `dati_ordine_acquisto` (array)
            for (const item of data['dati_ordine_acquisto']) {
                DatiOrdineAcquisto.validateJSON(item);
            };
        }
        if (data['dati_contratto']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['dati_contratto'])) {
                throw new Error("Expected the field `dati_contratto` to be an array in the JSON data but got " + data['dati_contratto']);
            }
            // validate the optional field `dati_contratto` (array)
            for (const item of data['dati_contratto']) {
                DatiContratto.validateJSON(item);
            };
        }
        if (data['dati_convenzione']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['dati_convenzione'])) {
                throw new Error("Expected the field `dati_convenzione` to be an array in the JSON data but got " + data['dati_convenzione']);
            }
            // validate the optional field `dati_convenzione` (array)
            for (const item of data['dati_convenzione']) {
                DatiConvenzione.validateJSON(item);
            };
        }
        if (data['dati_ricezione']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['dati_ricezione'])) {
                throw new Error("Expected the field `dati_ricezione` to be an array in the JSON data but got " + data['dati_ricezione']);
            }
            // validate the optional field `dati_ricezione` (array)
            for (const item of data['dati_ricezione']) {
                DatiRicezione.validateJSON(item);
            };
        }
        if (data['dati_fatture_collegate']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['dati_fatture_collegate'])) {
                throw new Error("Expected the field `dati_fatture_collegate` to be an array in the JSON data but got " + data['dati_fatture_collegate']);
            }
            // validate the optional field `dati_fatture_collegate` (array)
            for (const item of data['dati_fatture_collegate']) {
                DatiFattureCollegate.validateJSON(item);
            };
        }
        if (data['dati_sal']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['dati_sal'])) {
                throw new Error("Expected the field `dati_sal` to be an array in the JSON data but got " + data['dati_sal']);
            }
            // validate the optional field `dati_sal` (array)
            for (const item of data['dati_sal']) {
                DatiSAL.validateJSON(item);
            };
        }
        if (data['dati_ddt']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['dati_ddt'])) {
                throw new Error("Expected the field `dati_ddt` to be an array in the JSON data but got " + data['dati_ddt']);
            }
            // validate the optional field `dati_ddt` (array)
            for (const item of data['dati_ddt']) {
                DatiDDT.validateJSON(item);
            };
        }
        // validate the optional field `dati_trasporto`
        if (data['dati_trasporto']) { // data not null
          DatiTrasporto.validateJSON(data['dati_trasporto']);
        }
        // validate the optional field `fattura_principale`
        if (data['fattura_principale']) { // data not null
          FatturaPrincipale.validateJSON(data['fattura_principale']);
        }

        return true;
    }


}



/**
 * @member {module:model/DatiGeneraliDocumento} dati_generali_documento
 */
DatiGenerali.prototype['dati_generali_documento'] = undefined;

/**
 * @member {Array.<module:model/DatiOrdineAcquisto>} dati_ordine_acquisto
 */
DatiGenerali.prototype['dati_ordine_acquisto'] = undefined;

/**
 * @member {Array.<module:model/DatiContratto>} dati_contratto
 */
DatiGenerali.prototype['dati_contratto'] = undefined;

/**
 * @member {Array.<module:model/DatiConvenzione>} dati_convenzione
 */
DatiGenerali.prototype['dati_convenzione'] = undefined;

/**
 * @member {Array.<module:model/DatiRicezione>} dati_ricezione
 */
DatiGenerali.prototype['dati_ricezione'] = undefined;

/**
 * @member {Array.<module:model/DatiFattureCollegate>} dati_fatture_collegate
 */
DatiGenerali.prototype['dati_fatture_collegate'] = undefined;

/**
 * @member {Array.<module:model/DatiSAL>} dati_sal
 */
DatiGenerali.prototype['dati_sal'] = undefined;

/**
 * @member {Array.<module:model/DatiDDT>} dati_ddt
 */
DatiGenerali.prototype['dati_ddt'] = undefined;

/**
 * @member {module:model/DatiTrasporto} dati_trasporto
 */
DatiGenerali.prototype['dati_trasporto'] = undefined;

/**
 * @member {module:model/FatturaPrincipale} fattura_principale
 */
DatiGenerali.prototype['fattura_principale'] = undefined;






export default DatiGenerali;

