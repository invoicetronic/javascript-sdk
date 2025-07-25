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


import ApiClient from "../ApiClient";
import ProblemHttpResult from '../model/ProblemHttpResult';
import Update from '../model/Update';

/**
* Update service.
* @module api/UpdateApi
* @version 1.0.0
*/
export default class UpdateApi {

    /**
    * Constructs a new UpdateApi. 
    * @alias module:api/UpdateApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List updates
     * Updates are notifications sent by the SDI about the status of invoices you sent.
     * @param {Object} opts Optional parameters
     * @param {Number} [companyId] Company id
     * @param {String} [identifier] SDI identifier.
     * @param {String} [prestatore] Vat number or fiscal code.
     * @param {Boolean} [unread] Unread items only.
     * @param {Number} [sendId] Send item's id.
     * @param {module:model/String} [state] SDI state
     * @param {Date} [lastUpdateFrom] UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {Date} [lastUpdateTo] UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {Date} [dateSentFrom] UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {Date} [dateSentTo] UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {Number} [page = 1)] Page number.
     * @param {Number} [pageSize = 100)] Items per page. Cannot be greater than 200.
     * @param {String} [sort = 'last_update')] Sort by field. Prefix with '-' for descending order.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Update>} and HTTP response
     */
    updateGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'company_id': opts['companyId'],
        'identifier': opts['identifier'],
        'prestatore': opts['prestatore'],
        'unread': opts['unread'],
        'send_id': opts['sendId'],
        'state': opts['state'],
        'last_update_from': opts['lastUpdateFrom'],
        'last_update_to': opts['lastUpdateTo'],
        'date_sent_from': opts['dateSentFrom'],
        'date_sent_to': opts['dateSentTo'],
        'page': opts['page'],
        'page_size': opts['pageSize'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Update];
      return this.apiClient.callApi(
        '/update', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List updates
     * Updates are notifications sent by the SDI about the status of invoices you sent.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.companyId Company id
     * @param {String} opts.identifier SDI identifier.
     * @param {String} opts.prestatore Vat number or fiscal code.
     * @param {Boolean} opts.unread Unread items only.
     * @param {Number} opts.sendId Send item's id.
     * @param {module:model/String} opts.state SDI state
     * @param {Date} opts.lastUpdateFrom UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {Date} opts.lastUpdateTo UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {Date} opts.dateSentFrom UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {Date} opts.dateSentTo UTC ISO 8601 (2024-11-29T12:34:56Z)
     * @param {Number} opts.page Page number. (default to 1)
     * @param {Number} opts.pageSize Items per page. Cannot be greater than 200. (default to 100)
     * @param {String} opts.sort Sort by field. Prefix with '-' for descending order. (default to 'last_update')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Update>}
     */
    updateGet(opts) {
      return this.updateGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an update by id
     * Updates are notifications sent by the SDI about the status of invoices you sent.
     * @param {Number} id Item id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Update} and HTTP response
     */
    updateIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Update;
      return this.apiClient.callApi(
        '/update/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get an update by id
     * Updates are notifications sent by the SDI about the status of invoices you sent.
     * @param {Number} id Item id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Update}
     */
    updateIdGet(id) {
      return this.updateIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
