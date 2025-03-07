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
import AltriDatiGestionali from './AltriDatiGestionali';
import CodiceArticolo from './CodiceArticolo';
import ScontoMaggiorazione from './ScontoMaggiorazione';

/**
 * The DettaglioLinee model module.
 * @module model/DettaglioLinee
 * @version 1
 */
class DettaglioLinee {
    /**
     * Constructs a new <code>DettaglioLinee</code>.
     * @alias module:model/DettaglioLinee
     */
    constructor() { 
        
        DettaglioLinee.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DettaglioLinee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DettaglioLinee} obj Optional instance to populate.
     * @return {module:model/DettaglioLinee} The populated <code>DettaglioLinee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DettaglioLinee();

            if (data.hasOwnProperty('numero_linea')) {
                obj['numero_linea'] = ApiClient.convertToType(data['numero_linea'], 'Number');
            }
            if (data.hasOwnProperty('tipo_cessione_prestazione')) {
                obj['tipo_cessione_prestazione'] = ApiClient.convertToType(data['tipo_cessione_prestazione'], 'String');
            }
            if (data.hasOwnProperty('codice_articolo')) {
                obj['codice_articolo'] = ApiClient.convertToType(data['codice_articolo'], [CodiceArticolo]);
            }
            if (data.hasOwnProperty('descrizione')) {
                obj['descrizione'] = ApiClient.convertToType(data['descrizione'], 'String');
            }
            if (data.hasOwnProperty('quantita')) {
                obj['quantita'] = ApiClient.convertToType(data['quantita'], 'Number');
            }
            if (data.hasOwnProperty('unita_misura')) {
                obj['unita_misura'] = ApiClient.convertToType(data['unita_misura'], 'String');
            }
            if (data.hasOwnProperty('data_inizio_periodo')) {
                obj['data_inizio_periodo'] = ApiClient.convertToType(data['data_inizio_periodo'], 'Date');
            }
            if (data.hasOwnProperty('data_fine_periodo')) {
                obj['data_fine_periodo'] = ApiClient.convertToType(data['data_fine_periodo'], 'Date');
            }
            if (data.hasOwnProperty('prezzo_unitario')) {
                obj['prezzo_unitario'] = ApiClient.convertToType(data['prezzo_unitario'], 'Number');
            }
            if (data.hasOwnProperty('sconto_maggiorazione')) {
                obj['sconto_maggiorazione'] = ApiClient.convertToType(data['sconto_maggiorazione'], [ScontoMaggiorazione]);
            }
            if (data.hasOwnProperty('prezzo_totale')) {
                obj['prezzo_totale'] = ApiClient.convertToType(data['prezzo_totale'], 'Number');
            }
            if (data.hasOwnProperty('aliquota_iva')) {
                obj['aliquota_iva'] = ApiClient.convertToType(data['aliquota_iva'], 'Number');
            }
            if (data.hasOwnProperty('ritenuta')) {
                obj['ritenuta'] = ApiClient.convertToType(data['ritenuta'], 'String');
            }
            if (data.hasOwnProperty('natura')) {
                obj['natura'] = ApiClient.convertToType(data['natura'], 'String');
            }
            if (data.hasOwnProperty('riferimento_amministrazione')) {
                obj['riferimento_amministrazione'] = ApiClient.convertToType(data['riferimento_amministrazione'], 'String');
            }
            if (data.hasOwnProperty('altri_dati_gestionali')) {
                obj['altri_dati_gestionali'] = ApiClient.convertToType(data['altri_dati_gestionali'], [AltriDatiGestionali]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DettaglioLinee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DettaglioLinee</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['tipo_cessione_prestazione'] && !(typeof data['tipo_cessione_prestazione'] === 'string' || data['tipo_cessione_prestazione'] instanceof String)) {
            throw new Error("Expected the field `tipo_cessione_prestazione` to be a primitive type in the JSON string but got " + data['tipo_cessione_prestazione']);
        }
        if (data['codice_articolo']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['codice_articolo'])) {
                throw new Error("Expected the field `codice_articolo` to be an array in the JSON data but got " + data['codice_articolo']);
            }
            // validate the optional field `codice_articolo` (array)
            for (const item of data['codice_articolo']) {
                CodiceArticolo.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['descrizione'] && !(typeof data['descrizione'] === 'string' || data['descrizione'] instanceof String)) {
            throw new Error("Expected the field `descrizione` to be a primitive type in the JSON string but got " + data['descrizione']);
        }
        // ensure the json data is a string
        if (data['unita_misura'] && !(typeof data['unita_misura'] === 'string' || data['unita_misura'] instanceof String)) {
            throw new Error("Expected the field `unita_misura` to be a primitive type in the JSON string but got " + data['unita_misura']);
        }
        if (data['sconto_maggiorazione']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['sconto_maggiorazione'])) {
                throw new Error("Expected the field `sconto_maggiorazione` to be an array in the JSON data but got " + data['sconto_maggiorazione']);
            }
            // validate the optional field `sconto_maggiorazione` (array)
            for (const item of data['sconto_maggiorazione']) {
                ScontoMaggiorazione.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['ritenuta'] && !(typeof data['ritenuta'] === 'string' || data['ritenuta'] instanceof String)) {
            throw new Error("Expected the field `ritenuta` to be a primitive type in the JSON string but got " + data['ritenuta']);
        }
        // ensure the json data is a string
        if (data['natura'] && !(typeof data['natura'] === 'string' || data['natura'] instanceof String)) {
            throw new Error("Expected the field `natura` to be a primitive type in the JSON string but got " + data['natura']);
        }
        // ensure the json data is a string
        if (data['riferimento_amministrazione'] && !(typeof data['riferimento_amministrazione'] === 'string' || data['riferimento_amministrazione'] instanceof String)) {
            throw new Error("Expected the field `riferimento_amministrazione` to be a primitive type in the JSON string but got " + data['riferimento_amministrazione']);
        }
        if (data['altri_dati_gestionali']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['altri_dati_gestionali'])) {
                throw new Error("Expected the field `altri_dati_gestionali` to be an array in the JSON data but got " + data['altri_dati_gestionali']);
            }
            // validate the optional field `altri_dati_gestionali` (array)
            for (const item of data['altri_dati_gestionali']) {
                AltriDatiGestionali.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} numero_linea
 */
DettaglioLinee.prototype['numero_linea'] = undefined;

/**
 * @member {String} tipo_cessione_prestazione
 */
DettaglioLinee.prototype['tipo_cessione_prestazione'] = undefined;

/**
 * @member {Array.<module:model/CodiceArticolo>} codice_articolo
 */
DettaglioLinee.prototype['codice_articolo'] = undefined;

/**
 * @member {String} descrizione
 */
DettaglioLinee.prototype['descrizione'] = undefined;

/**
 * @member {Number} quantita
 */
DettaglioLinee.prototype['quantita'] = undefined;

/**
 * @member {String} unita_misura
 */
DettaglioLinee.prototype['unita_misura'] = undefined;

/**
 * @member {Date} data_inizio_periodo
 */
DettaglioLinee.prototype['data_inizio_periodo'] = undefined;

/**
 * @member {Date} data_fine_periodo
 */
DettaglioLinee.prototype['data_fine_periodo'] = undefined;

/**
 * @member {Number} prezzo_unitario
 */
DettaglioLinee.prototype['prezzo_unitario'] = undefined;

/**
 * @member {Array.<module:model/ScontoMaggiorazione>} sconto_maggiorazione
 */
DettaglioLinee.prototype['sconto_maggiorazione'] = undefined;

/**
 * @member {Number} prezzo_totale
 */
DettaglioLinee.prototype['prezzo_totale'] = undefined;

/**
 * @member {Number} aliquota_iva
 */
DettaglioLinee.prototype['aliquota_iva'] = undefined;

/**
 * @member {String} ritenuta
 */
DettaglioLinee.prototype['ritenuta'] = undefined;

/**
 * @member {String} natura
 */
DettaglioLinee.prototype['natura'] = undefined;

/**
 * @member {String} riferimento_amministrazione
 */
DettaglioLinee.prototype['riferimento_amministrazione'] = undefined;

/**
 * @member {Array.<module:model/AltriDatiGestionali>} altri_dati_gestionali
 */
DettaglioLinee.prototype['altri_dati_gestionali'] = undefined;






export default DettaglioLinee;

