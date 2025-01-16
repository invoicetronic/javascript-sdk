# invoiceSdk.LogApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoiceV1LogGet**](LogApi.md#invoiceV1LogGet) | **GET** /invoice/v1/log | List events
[**invoiceV1LogIdGet**](LogApi.md#invoiceV1LogIdGet) | **GET** /invoice/v1/log/{id} | Get an event by id



## invoiceV1LogGet

> [Event] invoiceV1LogGet(opts)

List events

Every API operation is logged and can be retrieved here.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.LogApi();
let opts = {
  'companyId': 56, // Number | Company id
  'endpoint': "endpoint_example", // String | 
  'method': "method_example", // String | 
  'apiVerion': 56, // Number | Api version
  'statusCode': 56, // Number | Response status code
  'dateCreatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'dateCreatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'page': 1, // Number | Page number. Defaults to 1.
  'pageSize': 100 // Number | Items per page. Defaults to 50. Cannot be greater than 200.
};
apiInstance.invoiceV1LogGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| Company id | [optional] 
 **endpoint** | **String**|  | [optional] 
 **method** | **String**|  | [optional] 
 **apiVerion** | **Number**| Api version | [optional] 
 **statusCode** | **Number**| Response status code | [optional] 
 **dateCreatedFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **dateCreatedTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **page** | **Number**| Page number. Defaults to 1. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. Defaults to 50. Cannot be greater than 200. | [optional] [default to 100]

### Return type

[**[Event]**](Event.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoiceV1LogIdGet

> Event invoiceV1LogIdGet(id)

Get an event by id

Every API operation is logged and can be retrieved here.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.LogApi();
let id = 56; // Number | Item id
apiInstance.invoiceV1LogIdGet(id).then((data) => {
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

[**Event**](Event.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

