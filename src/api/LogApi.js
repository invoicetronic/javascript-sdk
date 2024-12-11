/**
 * Italian eInvoice API
 * The Italian eInvoice API is a RESTful API that allows you to send and receive invoices through the Italian [Servizio di Interscambio (SDI)][1], or Interchange Service. The API is designed by Invoicetronic to be simple and easy to use, abstracting away SDI complexity while still providing complete control over the invoice send/receive process. The API also provides advanced features and a rich toolchain, such as invoice validation, multiple upload methods, webhooks, event logs, CORS support, client SDKs for commonly used languages, and CLI tools.  For more information, see  [Invoicetronic website][2]  [1]: https://www.fatturapa.gov.it/it/sistemainterscambio/cose-il-sdi/ [2]: https://invoicetronic.com/
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@invoicetronic.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Event from '../model/Event';
import ProblemHttpResult from '../model/ProblemHttpResult';

/**
* Log service.
* @module api/LogApi
* @version 1.0.0
*/
export default class LogApi {

    /**
    * Constructs a new LogApi. 
    * @alias module:api/LogApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List events
     * Every API operation is logged and can be retrieved here.
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Page number.
     * @param {Number} [pageSize = 100)] Items per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    invoiceV1LogGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Event];
      return this.apiClient.callApi(
        '/invoice/v1/log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List events
     * Every API operation is logged and can be retrieved here.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number. (default to 1)
     * @param {Number} opts.pageSize Items per page. (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    invoiceV1LogGet(opts) {
      return this.invoiceV1LogGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an event by id
     * Every API operation is logged and can be retrieved here.
     * @param {Number} id Item id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */
    invoiceV1LogIdGetWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling invoiceV1LogIdGet");
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
      let returnType = Event;
      return this.apiClient.callApi(
        '/invoice/v1/log/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get an event by id
     * Every API operation is logged and can be retrieved here.
     * @param {Number} id Item id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    invoiceV1LogIdGet(id) {
      return this.invoiceV1LogIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
