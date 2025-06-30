# invoicetronicSdk.ReceiveApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receiveGet**](ReceiveApi.md#receiveGet) | **GET** /receive | List incoming invoices
[**receiveIdDelete**](ReceiveApi.md#receiveIdDelete) | **DELETE** /receive/{id} | Delete an incoming invoice by id
[**receiveIdGet**](ReceiveApi.md#receiveIdGet) | **GET** /receive/{id} | Get an incoming invoice by id



## receiveGet

> [Receive] receiveGet(opts)

List incoming invoices

Receive invoices are the invoices that are received from other companies. They are preserved for two years in the live environment and 24 hours in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.ReceiveApi();
let opts = {
  'companyId': 56, // Number | Company id
  'identifier': "identifier_example", // String | SDI identifier.
  'unread': true, // Boolean | Unread items only.
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
  'page': 1, // Number | Page number. Defaults to 1.
  'pageSize': 100, // Number | Items per page. Defaults to 50. Cannot be greater than 200.
  'sort': "sort_example" // String | Sort by field. Prefix with '-' for descending order.
};
apiInstance.receiveGet(opts).then((data) => {
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
 **unread** | **Boolean**| Unread items only. | [optional] 
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
 **page** | **Number**| Page number. Defaults to 1. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. Defaults to 50. Cannot be greater than 200. | [optional] [default to 100]
 **sort** | **String**| Sort by field. Prefix with &#39;-&#39; for descending order. | [optional] 

### Return type

[**[Receive]**](Receive.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## receiveIdDelete

> Receive receiveIdDelete(id)

Delete an incoming invoice by id

Receive invoices are the invoices that are received from other companies. They are preserved for two years in the live environment and 24 hours in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.ReceiveApi();
let id = 56; // Number | Item id
apiInstance.receiveIdDelete(id).then((data) => {
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

[**Receive**](Receive.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## receiveIdGet

> Receive receiveIdGet(id)

Get an incoming invoice by id

Receive invoices are the invoices that are received from other companies. They are preserved for two years in the live environment and 24 hours in the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.ReceiveApi();
let id = 56; // Number | Item id
apiInstance.receiveIdGet(id).then((data) => {
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

[**Receive**](Receive.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

