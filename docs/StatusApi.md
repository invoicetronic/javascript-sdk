# invoicetronicSdk.StatusApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusGet**](StatusApi.md#statusGet) | **GET** /status | Account status



## statusGet

> Status statusGet()

Account status

This endpoint is used to know how many operations (invoices + validations) and signatures are left on your account.   When &#x60;signature_left&#x60; is 0, you will receive a &#x60;403 Forbidden&#x60; response if you try to sign an invoice. Likewise, if &#x60;operation_left&#x60; is 0, you will receive a &#x60;403 Forbidden&#x60; response when storing or validating an invoice.  You can raise the limits by purchasing operations and/or signatures from the [Dashboard](https://dashboard.invoicetronic.com).  __Please note__ that these values are not enforced if you are on the Sandbox. See the [API Keys &amp; Sandbox](https://invoicetronic.com/apikeys/) documentation section to learn more about the Sandbox.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.StatusApi();
apiInstance.statusGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Status**](Status.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

