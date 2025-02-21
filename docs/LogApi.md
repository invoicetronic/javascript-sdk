# invoiceSdk.LogApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**logGet**](LogApi.md#logGet) | **GET** /log | List events
[**logIdGet**](LogApi.md#logIdGet) | **GET** /log/{id} | Get an event by id



## logGet

> [Event] logGet(opts)

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
  'pageSize': 100, // Number | Items per page. Defaults to 50. Cannot be greater than 200.
  'sort': "sort_example", // String | Sort by field. Prefix with '-' for descending order.
  'query': "query_example", // String | 
  'success': true, // Boolean | 
  'dateTimeFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | Date and time of the event
  'dateTimeTo': new Date("2013-10-20T19:20:30+01:00") // Date | Date and time of the event
};
apiInstance.logGet(opts).then((data) => {
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
 **sort** | **String**| Sort by field. Prefix with &#39;-&#39; for descending order. | [optional] 
 **query** | **String**|  | [optional] 
 **success** | **Boolean**|  | [optional] 
 **dateTimeFrom** | **Date**| Date and time of the event | [optional] 
 **dateTimeTo** | **Date**| Date and time of the event | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logIdGet

> Event logIdGet(id)

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
apiInstance.logIdGet(id).then((data) => {
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

