# invoiceSdk.SendApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoiceV1SendFilesPost**](SendApi.md#invoiceV1SendFilesPost) | **POST** /invoice/v1/send/files | Add an invoice by file
[**invoiceV1SendGet**](SendApi.md#invoiceV1SendGet) | **GET** /invoice/v1/send | List invoices
[**invoiceV1SendIdGet**](SendApi.md#invoiceV1SendIdGet) | **GET** /invoice/v1/send/{id} | Get a invoice by id
[**invoiceV1SendJsonPost**](SendApi.md#invoiceV1SendJsonPost) | **POST** /invoice/v1/send/json | Add an invoice by json
[**invoiceV1SendPost**](SendApi.md#invoiceV1SendPost) | **POST** /invoice/v1/send | Add an invoice
[**invoiceV1SendValidateFilesPost**](SendApi.md#invoiceV1SendValidateFilesPost) | **POST** /invoice/v1/send/validate/files | Validate an invoice by file
[**invoiceV1SendValidateJsonPost**](SendApi.md#invoiceV1SendValidateJsonPost) | **POST** /invoice/v1/send/validate/json | Validate an invoice by json
[**invoiceV1SendValidatePost**](SendApi.md#invoiceV1SendValidatePost) | **POST** /invoice/v1/send/validate | Validate an invoice
[**invoiceV1SendValidateXmlPost**](SendApi.md#invoiceV1SendValidateXmlPost) | **POST** /invoice/v1/send/validate/xml | Validate an invoice by xml
[**invoiceV1SendXmlPost**](SendApi.md#invoiceV1SendXmlPost) | **POST** /invoice/v1/send/xml | Add an invoice by xml



## invoiceV1SendFilesPost

> Send invoiceV1SendFilesPost(files, opts)

Add an invoice by file

Send invoices are the invoices that are sent to the SDI.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.SendApi();
let files = ["null"]; // [File] | 
let opts = {
  'validate': false // Boolean | Validate the document first, and reject it on failure.
};
apiInstance.invoiceV1SendFilesPost(files, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **[File]**|  | 
 **validate** | **Boolean**| Validate the document first, and reject it on failure. | [optional] [default to false]

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## invoiceV1SendGet

> [Send] invoiceV1SendGet(opts)

List invoices

test **markdown**.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.SendApi();
let opts = {
  'companyId': 56, // Number | Company id.
  'identifier': "identifier_example", // String | SDI identifier.
  'committente': "committente_example", // String | VAT number or fiscal code.
  'prestatore': "prestatore_example", // String | VAT number or fiscal code.
  'fileName': "fileName_example", // String | File name.
  'lastUpdateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'lastUpdateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'dateSentFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'dateSentTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'documentDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'documentDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'documentNumber': "documentNumber_example", // String | Document number.
  'page': 1, // Number | Page number.
  'pageSize': 100 // Number | Items per page.
};
apiInstance.invoiceV1SendGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| Company id. | [optional] 
 **identifier** | **String**| SDI identifier. | [optional] 
 **committente** | **String**| VAT number or fiscal code. | [optional] 
 **prestatore** | **String**| VAT number or fiscal code. | [optional] 
 **fileName** | **String**| File name. | [optional] 
 **lastUpdateFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **lastUpdateTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **dateSentFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **dateSentTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **documentDateFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **documentDateTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **documentNumber** | **String**| Document number. | [optional] 
 **page** | **Number**| Page number. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. | [optional] [default to 100]

### Return type

[**[Send]**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoiceV1SendIdGet

> Send invoiceV1SendIdGet(id)

Get a invoice by id

Send invoices are the invoices that are sent to the SDI.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.SendApi();
let id = 56; // Number | Item id.
apiInstance.invoiceV1SendIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Item id. | 

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoiceV1SendJsonPost

> Send invoiceV1SendJsonPost(fatturaOrdinaria, opts)

Add an invoice by json

Send invoices are the invoices that are sent to the SDI.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.SendApi();
let fatturaOrdinaria = new invoiceSdk.FatturaOrdinaria(); // FatturaOrdinaria | 
let opts = {
  'validate': false // Boolean | Validate the document first, and reject it on failure.
};
apiInstance.invoiceV1SendJsonPost(fatturaOrdinaria, opts).then((data) => {
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

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invoiceV1SendPost

> Send invoiceV1SendPost(send, opts)

Add an invoice

Send invoices are the invoices that are sent to the SDI.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.SendApi();
let send = new invoiceSdk.Send(); // Send | 
let opts = {
  'validate': false // Boolean | Validate the document first, and reject it on failure.
};
apiInstance.invoiceV1SendPost(send, opts).then((data) => {
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

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invoiceV1SendValidateFilesPost

> invoiceV1SendValidateFilesPost(files)

Validate an invoice by file

Send invoices are the invoices that are sent to the SDI.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.SendApi();
let files = ["null"]; // [File] | 
apiInstance.invoiceV1SendValidateFilesPost(files).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **files** | **[File]**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## invoiceV1SendValidateJsonPost

> invoiceV1SendValidateJsonPost(fatturaOrdinaria)

Validate an invoice by json

Send invoices are the invoices that are sent to the SDI.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.SendApi();
let fatturaOrdinaria = new invoiceSdk.FatturaOrdinaria(); // FatturaOrdinaria | 
apiInstance.invoiceV1SendValidateJsonPost(fatturaOrdinaria).then(() => {
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


## invoiceV1SendValidatePost

> invoiceV1SendValidatePost(send)

Validate an invoice

Send invoices are the invoices that are sent to the SDI.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.SendApi();
let send = new invoiceSdk.Send(); // Send | 
apiInstance.invoiceV1SendValidatePost(send).then(() => {
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


## invoiceV1SendValidateXmlPost

> invoiceV1SendValidateXmlPost(fatturaOrdinaria)

Validate an invoice by xml

Send invoices are the invoices that are sent to the SDI.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.SendApi();
let fatturaOrdinaria = new invoiceSdk.FatturaOrdinaria(); // FatturaOrdinaria | 
apiInstance.invoiceV1SendValidateXmlPost(fatturaOrdinaria).then(() => {
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


## invoiceV1SendXmlPost

> Send invoiceV1SendXmlPost(fatturaOrdinaria, opts)

Add an invoice by xml

Send invoices are the invoices that are sent to the SDI.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.SendApi();
let fatturaOrdinaria = new invoiceSdk.FatturaOrdinaria(); // FatturaOrdinaria | 
let opts = {
  'validate': false // Boolean | Validate the document first, and reject it on failure.
};
apiInstance.invoiceV1SendXmlPost(fatturaOrdinaria, opts).then((data) => {
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

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/xml
- **Accept**: application/json

