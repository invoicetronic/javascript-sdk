# invoicetronicSdk.ExportApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportGet**](ExportApi.md#exportGet) | **GET** /export | Export invoices as a ZIP archive



## exportGet

> exportGet(opts)

Export invoices as a ZIP archive

Export invoices as a ZIP archive of FatturaPA XML files, suitable for import into accounting software (TeamSystem, Zucchetti, etc.).  **Sent invoices** are only included when they have reached a definitive state (e.g., &#x60;Consegnato&#x60; for private recipients, &#x60;AccettatoDalDestinatario&#x60;, &#x60;DecorrenzaTermini&#x60;, etc.). Invoices still being processed by SDI are excluded.  **Received invoices** are always included. Unread invoices are automatically marked as read and counted as operations.  ### Period filters  You can filter by period using either: - &#x60;year&#x60; + &#x60;month&#x60; (e.g., &#x60;year&#x3D;2026&amp;month&#x3D;3&#x60; for March 2026) - &#x60;year&#x60; + &#x60;quarter&#x60; (e.g., &#x60;year&#x3D;2026&amp;quarter&#x3D;1&#x60; for Q1 Jan-Mar) - &#x60;document_date_from&#x60; / &#x60;document_date_to&#x60; for a custom date range  These options are mutually exclusive. The &#x60;year&#x60; parameter alone is not valid and requires either &#x60;month&#x60; or &#x60;quarter&#x60;.  ### Response  Returns &#x60;200&#x60; with a ZIP archive, or &#x60;204 No Content&#x60; if no invoices match the given filters. Files in the archive are organized by company VAT number (&#x60;{vat}/send/&#x60;, &#x60;{vat}/receive/&#x60;).  ### Rate limiting  This endpoint has a dedicated rate limit: only one export request per user can be processed at a time. Concurrent requests will receive a &#x60;429 Too Many Requests&#x60; response.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.ExportApi();
let opts = {
  'type': "'Both'", // String | 
  'companyId': 56, // Number | Company id
  'year': 56, // Number | 
  'month': 56, // Number | 
  'quarter': 56, // Number | 
  'documentDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
  'documentDateTo': new Date("2013-10-20T19:20:30+01:00") // Date | UTC ISO 8601 (2024-11-29T12:34:56Z)
};
apiInstance.exportGet(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | [optional] [default to &#39;Both&#39;]
 **companyId** | **Number**| Company id | [optional] 
 **year** | **Number**|  | [optional] 
 **month** | **Number**|  | [optional] 
 **quarter** | **Number**|  | [optional] 
 **documentDateFrom** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 
 **documentDateTo** | **Date**| UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json

