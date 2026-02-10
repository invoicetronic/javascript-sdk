# invoicetronicSdk.CompanyApi

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

Retrieve a paginated list of companies.  **Companies** are the entities that send and receive invoices. They are automatically created from invoice data when invoices are sent or received.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.CompanyApi();
let opts = {
  'page': 1, // Number | Page number.
  'pageSize': 100, // Number | Items per page. Cannot be greater than 200.
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
 **page** | **Number**| Page number. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. Cannot be greater than 200. | [optional] [default to 100]
 **sort** | **String**| Sort by field. Prefix with &#39;-&#39; for descending order. | [optional] 

### Return type

[**[Company]**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## companyIdDelete

> Company companyIdDelete(id, opts)

Delete a company

Delete a company by its internal id.  **Companies** are the entities that send and receive invoices. They are automatically created from invoice data when invoices are sent or received.  **Warning:** Deleting a company will permanently remove all associated data, including sent invoices, received invoices, invoice updates from SDI, logs, and webhooks.  If the company has any linked invoices, you must explicitly confirm deletion by adding &#x60;?force&#x3D;true&#x60; to the request. Without this parameter, the API will return &#x60;409 Conflict&#x60; with details about the linked data.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.CompanyApi();
let id = 56; // Number | Item id
let opts = {
  'force': false // Boolean | Force delete including all related data.
};
apiInstance.companyIdDelete(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Item id | 
 **force** | **Boolean**| Force delete including all related data. | [optional] [default to false]

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

Retrieve a company by its internal id.  **Companies** are the entities that send and receive invoices. They are automatically created from invoice data when invoices are sent or received.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.CompanyApi();
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

Add a new company.  **Companies** are the entities that send and receive invoices. They are automatically created from invoice data when invoices are sent or received.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.CompanyApi();
let company = new invoicetronicSdk.Company(); // Company | 
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

Update an existing company.  **Companies** are the entities that send and receive invoices. They are automatically created from invoice data when invoices are sent or received.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.CompanyApi();
let company = new invoicetronicSdk.Company(); // Company | 
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

