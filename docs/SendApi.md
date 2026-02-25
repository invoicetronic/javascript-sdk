# invoicetronicSdk.SendApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendFilePost**](SendApi.md#sendFilePost) | **POST** /send/file | Add an invoice by file
[**sendGet**](SendApi.md#sendGet) | **GET** /send | List invoices
[**sendIdGet**](SendApi.md#sendIdGet) | **GET** /send/{id} | Get a invoice by id
[**sendIdPayloadGet**](SendApi.md#sendIdPayloadGet) | **GET** /send/{id}/payload | Get a send invoice payload by id
[**sendIdentifierGet**](SendApi.md#sendIdentifierGet) | **GET** /send/{identifier} | Get a invoice by identifier
[**sendJsonPost**](SendApi.md#sendJsonPost) | **POST** /send/json | Add an invoice by json
[**sendPost**](SendApi.md#sendPost) | **POST** /send | Add an invoice
[**sendValidateFilePost**](SendApi.md#sendValidateFilePost) | **POST** /send/validate/file | Validate an invoice file
[**sendValidateJsonPost**](SendApi.md#sendValidateJsonPost) | **POST** /send/validate/json | Validate an invoice by json
[**sendValidatePost**](SendApi.md#sendValidatePost) | **POST** /send/validate | Validate an invoice
[**sendValidateXmlPost**](SendApi.md#sendValidateXmlPost) | **POST** /send/validate/xml | Validate an invoice by xml
[**sendXmlPost**](SendApi.md#sendXmlPost) | **POST** /send/xml | Add an invoice by xml



## sendFilePost

> Send sendFilePost(file, opts)

Add an invoice by file

Add a new invoice by uploading a file. Supported formats are XML (FatturaPA) and P7M (signed). The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the &#x60;update&#x60; endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let file = "/path/to/file"; // File | 
let opts = {
  'validate': false, // Boolean | Validate the document first, and reject it on failure.
  'signature': "'Auto'" // String | Whether to digitally sign the document.
};
apiInstance.sendFilePost(file, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**|  | 
 **validate** | **Boolean**| Validate the document first, and reject it on failure. | [optional] [default to false]
 **signature** | **String**| Whether to digitally sign the document. | [optional] [default to &#39;Auto&#39;]

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## sendGet

> [Send] sendGet(opts)

List invoices

Retrieve a paginated list of send invoices. Results can be filtered by various criteria such as company, date ranges, and document number. Returns invoice metadata; set &#x60;include_payload&#x60; to true to include the full invoice content.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let opts = {
  'companyId': 56, // Number | Company id
  'identifier': "identifier_example", // String | SDI identifier.
  'committente': "committente_example", // String | Vat number or fiscal code.
  'prestatore': "prestatore_example", // String | Vat number or fiscal code.
  'fileName': "fileName_example", // String | File name.
  'lastUpdateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'lastUpdateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'dateSentFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'dateSentTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'documentDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'documentDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'documentNumber': "documentNumber_example", // String | Document number.
  'includePayload': true, // Boolean | Include payload in the response. Defaults to false.
  'page': 1, // Number | Page number.
  'pageSize': 100, // Number | Items per page. Cannot be greater than 200.
  'sort': "sort_example" // String | Sort by field. Prefix with '-' for descending order.
};
apiInstance.sendGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| Company id | [optional] 
 **identifier** | **String**| SDI identifier. | [optional] 
 **committente** | **String**| Vat number or fiscal code. | [optional] 
 **prestatore** | **String**| Vat number or fiscal code. | [optional] 
 **fileName** | **String**| File name. | [optional] 
 **lastUpdateFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **lastUpdateTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **dateSentFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **dateSentTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **documentDateFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **documentDateTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **documentNumber** | **String**| Document number. | [optional] 
 **includePayload** | **Boolean**| Include payload in the response. Defaults to false. | [optional] 
 **page** | **Number**| Page number. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. Cannot be greater than 200. | [optional] [default to 100]
 **sort** | **String**| Sort by field. Prefix with &#39;-&#39; for descending order. | [optional] 

### Return type

[**[Send]**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendIdGet

> Send sendIdGet(id, opts)

Get a invoice by id

Retrieve a send invoice by its internal id. The &#x60;id&#x60; is unique and assigned by the system when the invoice is created. Returns invoice metadata; set &#x60;include_payload&#x60; to true to include the full invoice content.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let id = 56; // Number | Item id
let opts = {
  'includePayload': false // Boolean | Include payload in the response. Defaults to false.
};
apiInstance.sendIdGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Item id | 
 **includePayload** | **Boolean**| Include payload in the response. Defaults to false. | [optional] [default to false]

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendIdPayloadGet

> sendIdPayloadGet(id)

Get a send invoice payload by id

Retrieve only the payload of a send invoice, without the full invoice metadata. This is useful when you already have the invoice metadata and only need the XML content.  The response is a &#x60;text/plain&#x60; string, identical to the &#x60;payload&#x60; field returned by the standard GET endpoint with &#x60;include_payload&#x3D;true&#x60;. Depending on how the invoice was originally submitted, the payload may be Base64-encoded or plain XML. 

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let id = 56; // Number | Item id
apiInstance.sendIdPayloadGet(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Item id | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json


## sendIdentifierGet

> Send sendIdentifierGet(identifier, opts)

Get a invoice by identifier

Retrieve a send invoice by its SDI identifier. The &#x60;identifier&#x60; is assigned by the SDI and becomes available after the invoice has been accepted. Returns invoice metadata; set &#x60;include_payload&#x60; to true to include the full invoice content.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let identifier = "identifier_example"; // String | 
let opts = {
  'includePayload': false // Boolean | Include payload in the response. Defaults to false.
};
apiInstance.sendIdentifierGet(identifier, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**|  | 
 **includePayload** | **Boolean**| Include payload in the response. Defaults to false. | [optional] [default to false]

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendJsonPost

> Send sendJsonPost(fatturaOrdinaria, opts)

Add an invoice by json

Add a new invoice using a FatturaPA JSON representation. The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the &#x60;update&#x60; endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let fatturaOrdinaria = new invoicetronicSdk.FatturaOrdinaria(); // FatturaOrdinaria | 
let opts = {
  'validate': false, // Boolean | Validate the document first, and reject it on failure.
  'signature': "'Auto'" // String | Whether to digitally sign the document.
};
apiInstance.sendJsonPost(fatturaOrdinaria, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fatturaOrdinaria** | [**FatturaOrdinaria**](FatturaOrdinaria.md)|  | 
 **validate** | **Boolean**| Validate the document first, and reject it on failure. | [optional] [default to false]
 **signature** | **String**| Whether to digitally sign the document. | [optional] [default to &#39;Auto&#39;]

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendPost

> Send sendPost(send, opts)

Add an invoice

Add a new invoice using a structured Send object. The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the &#x60;update&#x60; endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let send = new invoicetronicSdk.Send(); // Send | 
let opts = {
  'validate': false, // Boolean | Validate the document first, and reject it on failure.
  'signature': "'Auto'" // String | Whether to digitally sign the document.
};
apiInstance.sendPost(send, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send** | [**Send**](Send.md)|  | 
 **validate** | **Boolean**| Validate the document first, and reject it on failure. | [optional] [default to false]
 **signature** | **String**| Whether to digitally sign the document. | [optional] [default to &#39;Auto&#39;]

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendValidateFilePost

> sendValidateFilePost(file)

Validate an invoice file

Validate an invoice file without sending it to SDI. Supported formats are XML (FatturaPA) and P7M (signed). Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let file = "/path/to/file"; // File | 
apiInstance.sendValidateFilePost(file).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## sendValidateJsonPost

> sendValidateJsonPost(fatturaOrdinaria)

Validate an invoice by json

Validate a JSON invoice without sending it to SDI. Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let fatturaOrdinaria = new invoicetronicSdk.FatturaOrdinaria(); // FatturaOrdinaria | 
apiInstance.sendValidateJsonPost(fatturaOrdinaria).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fatturaOrdinaria** | [**FatturaOrdinaria**](FatturaOrdinaria.md)|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendValidatePost

> sendValidatePost(send)

Validate an invoice

Validate an invoice without sending it to SDI. Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let send = new invoicetronicSdk.Send(); // Send | 
apiInstance.sendValidatePost(send).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **send** | [**Send**](Send.md)|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendValidateXmlPost

> sendValidateXmlPost(fatturaOrdinaria)

Validate an invoice by xml

Validate an XML invoice document without sending it to SDI. Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let fatturaOrdinaria = new invoicetronicSdk.FatturaOrdinaria(); // FatturaOrdinaria | 
apiInstance.sendValidateXmlPost(fatturaOrdinaria).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fatturaOrdinaria** | [**FatturaOrdinaria**](FatturaOrdinaria.md)|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/xml
- **Accept**: application/json


## sendXmlPost

> Send sendXmlPost(fatturaOrdinaria, opts)

Add an invoice by xml

Add a new invoice using a raw XML document in FatturaPA format. The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the &#x60;update&#x60; endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let fatturaOrdinaria = new invoicetronicSdk.FatturaOrdinaria(); // FatturaOrdinaria | 
let opts = {
  'validate': false, // Boolean | Validate the document first, and reject it on failure.
  'signature': "'Auto'" // String | Whether to digitally sign the document.
};
apiInstance.sendXmlPost(fatturaOrdinaria, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fatturaOrdinaria** | [**FatturaOrdinaria**](FatturaOrdinaria.md)|  | 
 **validate** | **Boolean**| Validate the document first, and reject it on failure. | [optional] [default to false]
 **signature** | **String**| Whether to digitally sign the document. | [optional] [default to &#39;Auto&#39;]

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/xml
- **Accept**: application/json

