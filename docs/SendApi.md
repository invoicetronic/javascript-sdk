# invoicetronicSdk.SendApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sendFilePost**](SendApi.md#sendFilePost) | **POST** /send/file | Add an invoice by file
[**sendGet**](SendApi.md#sendGet) | **GET** /send | List invoices
[**sendIdGet**](SendApi.md#sendIdGet) | **GET** /send/{id} | Get a invoice by id
[**sendIdPayloadGet**](SendApi.md#sendIdPayloadGet) | **GET** /send/{id}/payload | Get a send invoice payload by id
[**sendIdentifierGet**](SendApi.md#sendIdentifierGet) | **GET** /send/{identifier} | Get a invoice by identifier
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

Add a new invoice by uploading a file. Supported formats are XML (FatturaPA) and P7M (signed). The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the &#x60;update&#x60; endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).  ### Idempotency  To protect against duplicate submissions caused by network retries, you can send an optional &#x60;Idempotency-Key&#x60; header with any unique, client-generated value (up to 255 characters).  - The first request with a given key is processed normally, and its response (status, body and &#x60;Location&#x60;) is stored for 24 hours. - Any subsequent request that reuses the same key within that window replays the original response instead of sending a second invoice to SDI. - If a request with the same key is still being processed, the retry receives &#x60;409 Conflict&#x60;. - If the same key is reused with a **different** invoice payload, the request is rejected with &#x60;422 Unprocessable Entity&#x60;: a given key must always map to the same request.  Keys are scoped per account, so different accounts can use the same key value without interfering. If the idempotency store is temporarily unavailable, the request is processed normally without idempotency protection.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let file = "/path/to/file"; // File | 
let opts = {
  'validate': false, // Boolean | Validate the document first, and reject it on failure.
  'signature': "'Auto'", // String | Whether to digitally sign the document.
  'idempotencyKey': "idempotencyKey_example" // String | Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice.
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
 **idempotencyKey** | **String**| Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. | [optional] 

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

Retrieve a paginated list of send invoices. Results can be filtered by various criteria such as company, date ranges, document number, current SDI state (&#x60;latest_state&#x60;), and free-text search (&#x60;q&#x60;). Use &#x60;ids&#x60; to fetch specific Send records in a single call (comma-separated, up to 100). Returns invoice metadata; set &#x60;include_payload&#x60; to true to include the full invoice content.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
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
  'latestState': "latestState_example", // String | Filter by the most recent SDI state for the invoice. Matches the `latest_state` field exposed inline on each Send.
  'includePayload': true, // Boolean | Include payload in the response. Defaults to false.
  'ids': "ids_example", // String | Comma-separated list of Send ids (max 100). Filters the collection to the matching rows; unknown or unauthorized ids are silently skipped.
  'page': 1, // Number | Page number.
  'pageSize': 100, // Number | Items per page. Cannot be greater than 200.
  'sort': "sort_example", // String | Sort by field. Prefix with '-' for descending order.
  'q': "q_example" // String | Full-text search across committente, prestatore, identifier, and file name.
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
 **latestState** | **String**| Filter by the most recent SDI state for the invoice. Matches the &#x60;latest_state&#x60; field exposed inline on each Send. | [optional] 
 **includePayload** | **Boolean**| Include payload in the response. Defaults to false. | [optional] 
 **ids** | **String**| Comma-separated list of Send ids (max 100). Filters the collection to the matching rows; unknown or unauthorized ids are silently skipped. | [optional] 
 **page** | **Number**| Page number. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. Cannot be greater than 200. | [optional] [default to 100]
 **sort** | **String**| Sort by field. Prefix with &#39;-&#39; for descending order. | [optional] 
 **q** | **String**| Full-text search across committente, prestatore, identifier, and file name. | [optional] 

### Return type

[**[Send]**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendIdGet

> Send sendIdGet(id, opts)

Get a invoice by id

Retrieve a send invoice by its internal id. The &#x60;id&#x60; is unique and assigned by the system when the invoice is created. Returns invoice metadata; set &#x60;include_payload&#x60; to true to include the full invoice content.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let id = 56; // Number | Item id
let opts = {
  'includePayload': false // Boolean | Include payload in the response. Defaults to false.
};
apiInstance.sendIdGet(id, opts).then((data) => {
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

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendIdPayloadGet

> sendIdPayloadGet(id)

Get a send invoice payload by id

Retrieve only the payload of a send invoice, without the full invoice metadata. This is useful when you already have the invoice metadata and only need the XML content.  The response is a &#x60;text/plain&#x60; string, identical to the &#x60;payload&#x60; field returned by the standard GET endpoint with &#x60;include_payload&#x3D;true&#x60;. Depending on how the invoice was originally submitted, the payload may be Base64-encoded or plain XML. 

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let id = 56; // Number | Item id
apiInstance.sendIdPayloadGet(id).then(() => {
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


## sendIdentifierGet

> Send sendIdentifierGet(identifier, opts)

Get a invoice by identifier

Retrieve a send invoice by its SDI identifier. The &#x60;identifier&#x60; is assigned by the SDI and becomes available after the invoice has been accepted. Returns invoice metadata; set &#x60;include_payload&#x60; to true to include the full invoice content.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let identifier = "identifier_example"; // String | 
let opts = {
  'includePayload': false // Boolean | Include payload in the response. Defaults to false.
};
apiInstance.sendIdentifierGet(identifier, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identifier** | **String**|  | 
 **includePayload** | **Boolean**| Include payload in the response. Defaults to false. | [optional] [default to false]

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendJsonPost

> Send sendJsonPost(body, opts)

Add an invoice by json

Add a new invoice using a FatturaPA JSON representation. Property names mirror the FatturaPA XML schema (PascalCase, e.g. &#x60;FatturaElettronicaHeader&#x60;). The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the &#x60;update&#x60; endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).  ### Idempotency  To protect against duplicate submissions caused by network retries, you can send an optional &#x60;Idempotency-Key&#x60; header with any unique, client-generated value (up to 255 characters).  - The first request with a given key is processed normally, and its response (status, body and &#x60;Location&#x60;) is stored for 24 hours. - Any subsequent request that reuses the same key within that window replays the original response instead of sending a second invoice to SDI. - If a request with the same key is still being processed, the retry receives &#x60;409 Conflict&#x60;. - If the same key is reused with a **different** invoice payload, the request is rejected with &#x60;422 Unprocessable Entity&#x60;: a given key must always map to the same request.  Keys are scoped per account, so different accounts can use the same key value without interfering. If the idempotency store is temporarily unavailable, the request is processed normally without idempotency protection.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let body = {key: null}; // Object | 
let opts = {
  'validate': false, // Boolean | Validate the document first, and reject it on failure.
  'signature': "'Auto'", // String | Whether to digitally sign the document.
  'idempotencyKey': "idempotencyKey_example" // String | Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice.
};
apiInstance.sendJsonPost(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 
 **validate** | **Boolean**| Validate the document first, and reject it on failure. | [optional] [default to false]
 **signature** | **String**| Whether to digitally sign the document. | [optional] [default to &#39;Auto&#39;]
 **idempotencyKey** | **String**| Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. | [optional] 

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

Add a new invoice using a structured Send object. The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the &#x60;update&#x60; endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).  ### Idempotency  To protect against duplicate submissions caused by network retries, you can send an optional &#x60;Idempotency-Key&#x60; header with any unique, client-generated value (up to 255 characters).  - The first request with a given key is processed normally, and its response (status, body and &#x60;Location&#x60;) is stored for 24 hours. - Any subsequent request that reuses the same key within that window replays the original response instead of sending a second invoice to SDI. - If a request with the same key is still being processed, the retry receives &#x60;409 Conflict&#x60;. - If the same key is reused with a **different** invoice payload, the request is rejected with &#x60;422 Unprocessable Entity&#x60;: a given key must always map to the same request.  Keys are scoped per account, so different accounts can use the same key value without interfering. If the idempotency store is temporarily unavailable, the request is processed normally without idempotency protection.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let send = new invoicetronicSdk.Send(); // Send | 
let opts = {
  'validate': false, // Boolean | Validate the document first, and reject it on failure.
  'signature': "'Auto'", // String | Whether to digitally sign the document.
  'idempotencyKey': "idempotencyKey_example" // String | Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice.
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
 **idempotencyKey** | **String**| Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. | [optional] 

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

Validate an invoice file without sending it to SDI. Supported formats are XML (FatturaPA) and P7M (signed). Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
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

> sendValidateJsonPost(body)

Validate an invoice by json

Validate a FatturaPA JSON invoice without sending it to SDI. Property names mirror the FatturaPA XML schema (PascalCase, e.g. &#x60;FatturaElettronicaHeader&#x60;). Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let body = {key: null}; // Object | 
apiInstance.sendValidateJsonPost(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 

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

Validate an invoice without sending it to SDI. Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
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

> sendValidateXmlPost(body)

Validate an invoice by xml

Validate an XML invoice document without sending it to SDI. Use this to check for errors before actual submission. Returns validation results with any errors found.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let body = <?xml version="1.0" encoding="UTF-8"?>
<p:FatturaElettronica versione="FPR12" xmlns:p="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2 http://www.fatturapa.gov.it/export/fatturazione/sdi/fatturapa/v1.2/Schema_del_file_xml_FatturaPA_versione_1.2.xsd">
  <FatturaElettronicaHeader>
    <DatiTrasmissione>
      <IdTrasmittente>
        <IdPaese>IT</IdPaese>
        <IdCodice>01234567890</IdCodice>
      </IdTrasmittente>
      <ProgressivoInvio>00001</ProgressivoInvio>
      <FormatoTrasmissione>FPR12</FormatoTrasmissione>
      <CodiceDestinatario>0000000</CodiceDestinatario>
    </DatiTrasmissione>
    <CedentePrestatore>
      <DatiAnagrafici>
        <IdFiscaleIVA>
          <IdPaese>IT</IdPaese>
          <IdCodice>01234567890</IdCodice>
        </IdFiscaleIVA>
        <Anagrafica>
          <Denominazione>Prestatore Srl</Denominazione>
        </Anagrafica>
        <RegimeFiscale>RF01</RegimeFiscale>
      </DatiAnagrafici>
      <Sede>
        <Indirizzo>Via Roma 1</Indirizzo>
        <CAP>00100</CAP>
        <Comune>Roma</Comune>
        <Provincia>RM</Provincia>
        <Nazione>IT</Nazione>
      </Sede>
    </CedentePrestatore>
    <CessionarioCommittente>
      <DatiAnagrafici>
        <IdFiscaleIVA>
          <IdPaese>IT</IdPaese>
          <IdCodice>09876543210</IdCodice>
        </IdFiscaleIVA>
        <Anagrafica>
          <Denominazione>Committente Srl</Denominazione>
        </Anagrafica>
      </DatiAnagrafici>
      <Sede>
        <Indirizzo>Via Milano 2</Indirizzo>
        <CAP>20100</CAP>
        <Comune>Milano</Comune>
        <Provincia>MI</Provincia>
        <Nazione>IT</Nazione>
      </Sede>
    </CessionarioCommittente>
  </FatturaElettronicaHeader>
  <FatturaElettronicaBody>
    <DatiGenerali>
      <DatiGeneraliDocumento>
        <TipoDocumento>TD01</TipoDocumento>
        <Divisa>EUR</Divisa>
        <Data>2025-01-01</Data>
        <Numero>1</Numero>
        <ImportoTotaleDocumento>122.00</ImportoTotaleDocumento>
      </DatiGeneraliDocumento>
    </DatiGenerali>
    <DatiBeniServizi>
      <DettaglioLinee>
        <NumeroLinea>1</NumeroLinea>
        <Descrizione>Servizio di consulenza</Descrizione>
        <Quantita>1.00</Quantita>
        <PrezzoUnitario>100.00</PrezzoUnitario>
        <PrezzoTotale>100.00</PrezzoTotale>
        <AliquotaIVA>22.00</AliquotaIVA>
      </DettaglioLinee>
      <DatiRiepilogo>
        <AliquotaIVA>22.00</AliquotaIVA>
        <ImponibileImporto>100.00</ImponibileImporto>
        <Imposta>22.00</Imposta>
        <EsigibilitaIVA>I</EsigibilitaIVA>
      </DatiRiepilogo>
    </DatiBeniServizi>
    <DatiPagamento>
      <CondizioniPagamento>TP02</CondizioniPagamento>
      <DettaglioPagamento>
        <ModalitaPagamento>MP05</ModalitaPagamento>
        <DataScadenzaPagamento>2025-01-31</DataScadenzaPagamento>
        <ImportoPagamento>122.00</ImportoPagamento>
      </DettaglioPagamento>
    </DatiPagamento>
  </FatturaElettronicaBody>
</p:FatturaElettronica>; // Object | 
apiInstance.sendValidateXmlPost(body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/xml
- **Accept**: application/json


## sendXmlPost

> Send sendXmlPost(body, opts)

Add an invoice by xml

Add a new invoice using a raw XML document in FatturaPA format. The invoice will be signed (if requested), validated (if requested), and queued for delivery to SDI. Status updates from SDI will be available in the &#x60;update&#x60; endpoint.  **Send** invoices are outbound sales invoices transmitted to customers through Italy&#39;s SDI (Sistema di Interscambio). Preserved for two years in the live environment and 15 days in the [Sandbox](https://invoicetronic.com/en/docs/sandbox/).  You can also upload invoices via the [Dashboard](https://dashboard.invoicetronic.com).  ### Idempotency  To protect against duplicate submissions caused by network retries, you can send an optional &#x60;Idempotency-Key&#x60; header with any unique, client-generated value (up to 255 characters).  - The first request with a given key is processed normally, and its response (status, body and &#x60;Location&#x60;) is stored for 24 hours. - Any subsequent request that reuses the same key within that window replays the original response instead of sending a second invoice to SDI. - If a request with the same key is still being processed, the retry receives &#x60;409 Conflict&#x60;. - If the same key is reused with a **different** invoice payload, the request is rejected with &#x60;422 Unprocessable Entity&#x60;: a given key must always map to the same request.  Keys are scoped per account, so different accounts can use the same key value without interfering. If the idempotency store is temporarily unavailable, the request is processed normally without idempotency protection.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.SendApi();
let body = <?xml version="1.0" encoding="UTF-8"?>
<p:FatturaElettronica versione="FPR12" xmlns:p="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2 http://www.fatturapa.gov.it/export/fatturazione/sdi/fatturapa/v1.2/Schema_del_file_xml_FatturaPA_versione_1.2.xsd">
  <FatturaElettronicaHeader>
    <DatiTrasmissione>
      <IdTrasmittente>
        <IdPaese>IT</IdPaese>
        <IdCodice>01234567890</IdCodice>
      </IdTrasmittente>
      <ProgressivoInvio>00001</ProgressivoInvio>
      <FormatoTrasmissione>FPR12</FormatoTrasmissione>
      <CodiceDestinatario>0000000</CodiceDestinatario>
    </DatiTrasmissione>
    <CedentePrestatore>
      <DatiAnagrafici>
        <IdFiscaleIVA>
          <IdPaese>IT</IdPaese>
          <IdCodice>01234567890</IdCodice>
        </IdFiscaleIVA>
        <Anagrafica>
          <Denominazione>Prestatore Srl</Denominazione>
        </Anagrafica>
        <RegimeFiscale>RF01</RegimeFiscale>
      </DatiAnagrafici>
      <Sede>
        <Indirizzo>Via Roma 1</Indirizzo>
        <CAP>00100</CAP>
        <Comune>Roma</Comune>
        <Provincia>RM</Provincia>
        <Nazione>IT</Nazione>
      </Sede>
    </CedentePrestatore>
    <CessionarioCommittente>
      <DatiAnagrafici>
        <IdFiscaleIVA>
          <IdPaese>IT</IdPaese>
          <IdCodice>09876543210</IdCodice>
        </IdFiscaleIVA>
        <Anagrafica>
          <Denominazione>Committente Srl</Denominazione>
        </Anagrafica>
      </DatiAnagrafici>
      <Sede>
        <Indirizzo>Via Milano 2</Indirizzo>
        <CAP>20100</CAP>
        <Comune>Milano</Comune>
        <Provincia>MI</Provincia>
        <Nazione>IT</Nazione>
      </Sede>
    </CessionarioCommittente>
  </FatturaElettronicaHeader>
  <FatturaElettronicaBody>
    <DatiGenerali>
      <DatiGeneraliDocumento>
        <TipoDocumento>TD01</TipoDocumento>
        <Divisa>EUR</Divisa>
        <Data>2025-01-01</Data>
        <Numero>1</Numero>
        <ImportoTotaleDocumento>122.00</ImportoTotaleDocumento>
      </DatiGeneraliDocumento>
    </DatiGenerali>
    <DatiBeniServizi>
      <DettaglioLinee>
        <NumeroLinea>1</NumeroLinea>
        <Descrizione>Servizio di consulenza</Descrizione>
        <Quantita>1.00</Quantita>
        <PrezzoUnitario>100.00</PrezzoUnitario>
        <PrezzoTotale>100.00</PrezzoTotale>
        <AliquotaIVA>22.00</AliquotaIVA>
      </DettaglioLinee>
      <DatiRiepilogo>
        <AliquotaIVA>22.00</AliquotaIVA>
        <ImponibileImporto>100.00</ImponibileImporto>
        <Imposta>22.00</Imposta>
        <EsigibilitaIVA>I</EsigibilitaIVA>
      </DatiRiepilogo>
    </DatiBeniServizi>
    <DatiPagamento>
      <CondizioniPagamento>TP02</CondizioniPagamento>
      <DettaglioPagamento>
        <ModalitaPagamento>MP05</ModalitaPagamento>
        <DataScadenzaPagamento>2025-01-31</DataScadenzaPagamento>
        <ImportoPagamento>122.00</ImportoPagamento>
      </DettaglioPagamento>
    </DatiPagamento>
  </FatturaElettronicaBody>
</p:FatturaElettronica>; // Object | 
let opts = {
  'validate': false, // Boolean | Validate the document first, and reject it on failure.
  'signature': "'Auto'", // String | Whether to digitally sign the document.
  'idempotencyKey': "idempotencyKey_example" // String | Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice.
};
apiInstance.sendXmlPost(body, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 
 **validate** | **Boolean**| Validate the document first, and reject it on failure. | [optional] [default to false]
 **signature** | **String**| Whether to digitally sign the document. | [optional] [default to &#39;Auto&#39;]
 **idempotencyKey** | **String**| Optional client-generated key that makes the submission idempotent. Retrying the same request with the same key within 24 hours returns the original response instead of creating a duplicate invoice. | [optional] 

### Return type

[**Send**](Send.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/xml
- **Accept**: application/json

