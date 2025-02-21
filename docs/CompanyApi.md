# invoiceSdk.CompanyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companyGet**](CompanyApi.md#companyGet) | **GET** /company | List companies
[**companyIdDelete**](CompanyApi.md#companyIdDelete) | **DELETE** /company/{id} | Delete a company
[**companyIdGet**](CompanyApi.md#companyIdGet) | **GET** /company/{id} | Get a company by id
[**companyPost**](CompanyApi.md#companyPost) | **POST** /company | Add a company
[**companyPut**](CompanyApi.md#companyPut) | **PUT** /company | Update a company



## companyGet

> [Company] companyGet(opts)

List companies

Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.

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
  'page': 1, // Number | Page number. Defaults to 1.
  'pageSize': 100, // Number | Items per page. Defaults to 50. Cannot be greater than 200.
  'sort': "sort_example" // String | Sort by field. Prefix with '-' for descending order.
};
apiInstance.companyGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number. Defaults to 1. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. Defaults to 50. Cannot be greater than 200. | [optional] [default to 100]
 **sort** | **String**| Sort by field. Prefix with &#39;-&#39; for descending order. | [optional] 

### Return type

[**[Company]**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyIdDelete

> Company companyIdDelete(id)

Delete a company

Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.CompanyApi();
let id = 56; // Number | Item id
apiInstance.companyIdDelete(id).then((data) => {
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

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyIdGet

> Company companyIdGet(id)

Get a company by id

Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.

### Example

```javascript
import invoiceSdk from '@invoicetronic/invoice-sdk';
let defaultClient = invoiceSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoiceSdk.CompanyApi();
let id = 56; // Number | Item id
apiInstance.companyIdGet(id).then((data) => {
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

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyPost

> Company companyPost(company)

Add a company

Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.

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
apiInstance.companyPost(company).then((data) => {
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


## companyPut

> Company companyPut(company)

Update a company

Companies are the entities that send and receive invoices. As you send invoices, companies are added as needed. **You can only receive invoices for existing companies**.

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
apiInstance.companyPut(company).then((data) => {
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

