# invoiceSdk.CompanyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoiceV1CompanyGet**](CompanyApi.md#invoiceV1CompanyGet) | **GET** /invoice/v1/company | List companies
[**invoiceV1CompanyIdDelete**](CompanyApi.md#invoiceV1CompanyIdDelete) | **DELETE** /invoice/v1/company/{id} | Delete a company
[**invoiceV1CompanyIdGet**](CompanyApi.md#invoiceV1CompanyIdGet) | **GET** /invoice/v1/company/{id} | Get a company by id
[**invoiceV1CompanyPost**](CompanyApi.md#invoiceV1CompanyPost) | **POST** /invoice/v1/company | Add a company
[**invoiceV1CompanyPut**](CompanyApi.md#invoiceV1CompanyPut) | **PUT** /invoice/v1/company | Update a company



## invoiceV1CompanyGet

> [Company] invoiceV1CompanyGet(opts)

List companies

Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.CompanyApi();
let opts = {
  'page': 1, // Number | Page number.
  'pageSize': 100 // Number | Items per page.
};
apiInstance.invoiceV1CompanyGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. | [optional] [default to 100]

### Return type

[**[Company]**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoiceV1CompanyIdDelete

> Company invoiceV1CompanyIdDelete(id)

Delete a company

Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.CompanyApi();
let id = 56; // Number | Item id.
apiInstance.invoiceV1CompanyIdDelete(id).then((data) => {
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

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoiceV1CompanyIdGet

> Company invoiceV1CompanyIdGet(id)

Get a company by id

Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.CompanyApi();
let id = 56; // Number | Item id.
apiInstance.invoiceV1CompanyIdGet(id).then((data) => {
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

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoiceV1CompanyPost

> Company invoiceV1CompanyPost(company)

Add a company

Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.CompanyApi();
let company = new invoiceSdk.Company(); // Company | 
apiInstance.invoiceV1CompanyPost(company).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [**Company**](Company.md)|  | 

### Return type

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invoiceV1CompanyPut

> Company invoiceV1CompanyPut(company)

Update a company

Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.CompanyApi();
let company = new invoiceSdk.Company(); // Company | 
apiInstance.invoiceV1CompanyPut(company).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | [**Company**](Company.md)|  | 

### Return type

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

