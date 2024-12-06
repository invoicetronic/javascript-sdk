# invoiceSdk.ReceiveApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoiceV1ReceiveGet**](ReceiveApi.md#invoiceV1ReceiveGet) | **GET** /invoice/v1/receive | List incoming invoices
[**invoiceV1ReceiveIdDelete**](ReceiveApi.md#invoiceV1ReceiveIdDelete) | **DELETE** /invoice/v1/receive/{id} | Delete an incoming invoice by id
[**invoiceV1ReceiveIdGet**](ReceiveApi.md#invoiceV1ReceiveIdGet) | **GET** /invoice/v1/receive/{id} | Get an incoming invoice by id



## invoiceV1ReceiveGet

> [Receive] invoiceV1ReceiveGet(opts)

List incoming invoices

Receive invoices are the invoices that are received from other companies.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.ReceiveApi();
let opts = {
  'companyId': 56, // Number | Company id.
  'identifier': "identifier_example", // String | SDI identifier.
  'unread': true, // Boolean | Unread items only.
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
apiInstance.invoiceV1ReceiveGet(opts).then((data) => {
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
 **unread** | **Boolean**| Unread items only. | [optional] 
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

[**[Receive]**](Receive.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## invoiceV1ReceiveIdDelete

> Receive invoiceV1ReceiveIdDelete(id)

Delete an incoming invoice by id

Receive invoices are the invoices that are received from other companies.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.ReceiveApi();
let id = 56; // Number | Item id.
apiInstance.invoiceV1ReceiveIdDelete(id).then((data) => {
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

[**Receive**](Receive.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoiceV1ReceiveIdGet

> Receive invoiceV1ReceiveIdGet(id)

Get an incoming invoice by id

Receive invoices are the invoices that are received from other companies.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.ReceiveApi();
let id = 56; // Number | Item id.
apiInstance.invoiceV1ReceiveIdGet(id).then((data) => {
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

[**Receive**](Receive.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

