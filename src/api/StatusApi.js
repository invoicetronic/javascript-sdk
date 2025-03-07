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


import ApiClient from "../ApiClient";
import Status from '../model/Status';

/**
* Status service.
* @module api/StatusApi
* @version 1
*/
export default class StatusApi {

    /**
    * Constructs a new StatusApi. 
    * @alias module:api/StatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Account status
     * This endpoint is used to know how many operations (invoices + validations) and signatures are left on your account.   When `signature_left` is 0, you will receive a `403 Forbidden` response if you try to sign an invoice. Likewise, if `operation_left` is 0, you will receive a `403 Forbidden` response when storing or validating an invoice.  You can raise the limits by purchasing operations and/or signatures from the [Dashboard](https://dashboard.invoicetronic.com).  __Please note__ that these values are not enforced if you are on the Sandbox. See the [API Keys & Sandbox](https://invoicetronic.com/apikeys/) documentation section to learn more about the Sandbox.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Status} and HTTP response
     */
    statusGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = Status;
      return this.apiClient.callApi(
        '/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Account status
     * This endpoint is used to know how many operations (invoices + validations) and signatures are left on your account.   When `signature_left` is 0, you will receive a `403 Forbidden` response if you try to sign an invoice. Likewise, if `operation_left` is 0, you will receive a `403 Forbidden` response when storing or validating an invoice.  You can raise the limits by purchasing operations and/or signatures from the [Dashboard](https://dashboard.invoicetronic.com).  __Please note__ that these values are not enforced if you are on the Sandbox. See the [API Keys & Sandbox](https://invoicetronic.com/apikeys/) documentation section to learn more about the Sandbox.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Status}
     */
    statusGet() {
      return this.statusGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
