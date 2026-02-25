# invoicetronicSdk.ReceiveApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receiveGet**](ReceiveApi.md#receiveGet) | **GET** /receive | List incoming invoices
[**receiveIdDelete**](ReceiveApi.md#receiveIdDelete) | **DELETE** /receive/{id} | Delete an incoming invoice by id
[**receiveIdGet**](ReceiveApi.md#receiveIdGet) | **GET** /receive/{id} | Get an incoming invoice by id
[**receiveIdPayloadGet**](ReceiveApi.md#receiveIdPayloadGet) | **GET** /receive/{id}/payload | Get a receive invoice payload by id



## receiveGet

> [Receive] receiveGet(opts)

List incoming invoices

Retrieve a paginated list of receive invoices. Results can be filtered by various criteria such as company, date ranges, sender, and document number. Returns invoice metadata; set &#x60;include_payload&#x60; to true to include the full invoice content. Invoices are marked as read (&#x60;is_read&#x60; &#x3D; true) only when &#x60;include_payload&#x60; is true.  **Receive** invoices are inbound purchase invoices received from suppliers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 24 hours in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
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
  'page': 1, // Number | Page number.
  'pageSize': 100, // Number | Items per page. Cannot be greater than 200.
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
 **page** | **Number**| Page number. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. Cannot be greater than 200. | [optional] [default to 100]
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

Permanently delete a receive invoice by its internal id. This action cannot be undone.  **Receive** invoices are inbound purchase invoices received from suppliers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 24 hours in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
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

> Receive receiveIdGet(id, opts)

Get an incoming invoice by id

Retrieve an incoming invoice by its internal id. The &#x60;id&#x60; is unique and assigned by the system when the invoice is received. Returns invoice metadata; set &#x60;include_payload&#x60; to true to include the full invoice content. The invoice is marked as read (&#x60;is_read&#x60; &#x3D; true) only when &#x60;include_payload&#x60; is true.  **Receive** invoices are inbound purchase invoices received from suppliers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 24 hours in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.ReceiveApi();
let id = 56; // Number | Item id
let opts = {
  'includePayload': false // Boolean | Include payload in the response. Defaults to false.
};
apiInstance.receiveIdGet(id, opts).then((data) => {
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

[**Receive**](Receive.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## receiveIdPayloadGet

> receiveIdPayloadGet(id)

Get a receive invoice payload by id

Retrieve only the payload of a receive invoice, without the full invoice metadata. This is useful when you already have the invoice metadata and only need the XML content.  The response is a &#x60;text/plain&#x60; string, identical to the &#x60;payload&#x60; field returned by the standard GET endpoint with &#x60;include_payload&#x3D;true&#x60;.  The invoice is marked as read (&#x60;is_read&#x60; &#x3D; true) and counted as an operation, same as when retrieving the full invoice with &#x60;include_payload&#x3D;true&#x60;. 

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.ReceiveApi();
let id = 56; // Number | Item id
apiInstance.receiveIdPayloadGet(id).then(() => {
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

