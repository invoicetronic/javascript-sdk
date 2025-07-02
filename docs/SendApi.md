# invoicetronicSdk.SendApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendFilePost**](SendApi.md#sendFilePost) | **POST** /send/file | Add an invoice by file
[**sendGet**](SendApi.md#sendGet) | **GET** /send | List invoices
[**sendIdGet**](SendApi.md#sendIdGet) | **GET** /send/{id} | Get a invoice by id
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

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
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

test **markdown**.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
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

> Send sendIdGet(id)

Get a invoice by id

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let id = 56; // Number | Item id
apiInstance.sendIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Item id | 

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

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
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

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
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

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
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

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
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

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
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

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
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

Send invoices are the invoices that are sent to the SDI. They are preserved for two years in the live environment and 15 days in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
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

