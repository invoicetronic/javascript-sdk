# invoiceSdk.UpdateApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateGet**](UpdateApi.md#updateGet) | **GET** /update | List updates
[**updateIdGet**](UpdateApi.md#updateIdGet) | **GET** /update/{id} | Get an update by id



## updateGet

> [Update] updateGet(opts)

List updates

Updates are notifications that are sent by the SDI about the status of sent invoices.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.UpdateApi();
let opts = {
  'companyId': 56, // Number | Company id
  'identifier': "identifier_example", // String | SDI identifier.
  'unread': true, // Boolean | Unread items only.
  'sendId': 56, // Number | Send item's id.
  'state': "state_example", // String | SDI state
  'lastUpdateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'lastUpdateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'dateSentFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'dateSentTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'page': 1, // Number | Page number. Defaults to 1.
  'pageSize': 100, // Number | Items per page. Defaults to 50. Cannot be greater than 200.
  'sort': "sort_example" // String | Sort by field. Prefix with '-' for descending order.
};
apiInstance.updateGet(opts).then((data) => {
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
 **sendId** | **Number**| Send item&#39;s id. | [optional] 
 **state** | **String**| SDI state | [optional] 
 **lastUpdateFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **lastUpdateTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **dateSentFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **dateSentTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **page** | **Number**| Page number. Defaults to 1. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. Defaults to 50. Cannot be greater than 200. | [optional] [default to 100]
 **sort** | **String**| Sort by field. Prefix with &#39;-&#39; for descending order. | [optional] 

### Return type

[**[Update]**](Update.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateIdGet

> Update updateIdGet(id)

Get an update by id

Updates are notifications that are sent by the SDI about the status of sent invoices.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.UpdateApi();
let id = 56; // Number | Item id
apiInstance.updateIdGet(id).then((data) => {
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

[**Update**](Update.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

