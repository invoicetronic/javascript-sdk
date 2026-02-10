# invoicetronicSdk.UpdateApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateGet**](UpdateApi.md#updateGet) | **GET** /update | List updates
[**updateIdGet**](UpdateApi.md#updateIdGet) | **GET** /update/{id} | Get an update by id



## updateGet

> [Update] updateGet(opts)

List updates

Retrieve a paginated list of updates. Results can be filtered by various criteria such as company, send item, SDI state, and date ranges.  **Updates** are status notifications from Italy&#39;s SDI (Sistema di Interscambio) about invoices you sent. Multiple updates can exist for the same send item as the invoice progresses through the SDI workflow.  The &#x60;state&#x60; field is the most important property and can have the following values:  | Value | Name | Description | |-------|------|-------------| | 2 | &#x60;Inviato&#x60; | Sent to the SDI. | | 5 | &#x60;Consegnato&#x60; | Delivered to the recipient. | | 6 | &#x60;NonConsegnato&#x60; | Not delivered to the recipient. Only relevant for public administration entities. | | 7 | &#x60;Scartato&#x60; | Rejected by the SDI. | | 8 | &#x60;AccettatoDalDestinatario&#x60; | Accepted by the recipient. Only relevant for public administration entities. | | 9 | &#x60;RifiutatoDalDestinatario&#x60; | Rejected by the recipient. Only relevant for public administration entities. | | 10 | &#x60;ImpossibilitaDiRecapito&#x60; | Available on the recipient&#39;s tax drawer, but it was not possible to deliver it to the recipient&#39;s reception system. | | 11 | &#x60;DecorrenzaTermini&#x60; | A public administration entity has not responded for more than 15 days. The document is considered delivered. | | 12 | &#x60;AttestazioneTrasmissioneFattura&#x60; | A public administration entity has received the document, but has not yet processed it. |  **Important:** Always monitor the state of your sent invoices. A state of &#x60;Inviato&#x60; only means the invoice has been submitted to SDI, not that it has been delivered. A state like &#x60;Scartato&#x60; indicates that the invoice was **not** successfully delivered and may require corrective action, such as fixing validation errors and resubmitting. In that case, &#x60;description&#x60; contains the reason for the rejection.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.UpdateApi();
let opts = {
  'companyId': 56, // Number | Company id
  'identifier': "identifier_example", // String | SDI identifier.
  'prestatore': "prestatore_example", // String | Vat number or fiscal code.
  'unread': true, // Boolean | Unread items only.
  'sendId': 56, // Number | Send item's id.
  'state': "state_example", // String | SDI state
  'lastUpdateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'lastUpdateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'dateSentFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'dateSentTo': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'page': 1, // Number | Page number.
  'pageSize': 100, // Number | Items per page. Cannot be greater than 200.
  'sort': "'last_update'" // String | Sort by field. Prefix with '-' for descending order.
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
 **prestatore** | **String**| Vat number or fiscal code. | [optional] 
 **unread** | **Boolean**| Unread items only. | [optional] 
 **sendId** | **Number**| Send item&#39;s id. | [optional] 
 **state** | **String**| SDI state | [optional] 
 **lastUpdateFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **lastUpdateTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **dateSentFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **dateSentTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **page** | **Number**| Page number. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. Cannot be greater than 200. | [optional] [default to 100]
 **sort** | **String**| Sort by field. Prefix with &#39;-&#39; for descending order. | [optional] [default to &#39;last_update&#39;]

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

Retrieve an update by its internal id.  **Updates** are status notifications from Italy&#39;s SDI (Sistema di Interscambio) about invoices you sent. Multiple updates can exist for the same send item as the invoice progresses through the SDI workflow.  The &#x60;state&#x60; field is the most important property and can have the following values:  | Value | Name | Description | |-------|------|-------------| | 2 | &#x60;Inviato&#x60; | Sent to the SDI. | | 5 | &#x60;Consegnato&#x60; | Delivered to the recipient. | | 6 | &#x60;NonConsegnato&#x60; | Not delivered to the recipient. Only relevant for public administration entities. | | 7 | &#x60;Scartato&#x60; | Rejected by the SDI. | | 8 | &#x60;AccettatoDalDestinatario&#x60; | Accepted by the recipient. Only relevant for public administration entities. | | 9 | &#x60;RifiutatoDalDestinatario&#x60; | Rejected by the recipient. Only relevant for public administration entities. | | 10 | &#x60;ImpossibilitaDiRecapito&#x60; | Available on the recipient&#39;s tax drawer, but it was not possible to deliver it to the recipient&#39;s reception system. | | 11 | &#x60;DecorrenzaTermini&#x60; | A public administration entity has not responded for more than 15 days. The document is considered delivered. | | 12 | &#x60;AttestazioneTrasmissioneFattura&#x60; | A public administration entity has received the document, but has not yet processed it. |  **Important:** Always monitor the state of your sent invoices. A state of &#x60;Inviato&#x60; only means the invoice has been submitted to SDI, not that it has been delivered. A state like &#x60;Scartato&#x60; indicates that the invoice was **not** successfully delivered and may require corrective action, such as fixing validation errors and resubmitting. In that case, &#x60;description&#x60; contains the reason for the rejection.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.UpdateApi();
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

