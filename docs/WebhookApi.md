# invoicetronicSdk.WebhookApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookGet**](WebhookApi.md#webhookGet) | **GET** /webhook | List webhooks
[**webhookIdDelete**](WebhookApi.md#webhookIdDelete) | **DELETE** /webhook/{id} | Delete a webhook by id
[**webhookIdGet**](WebhookApi.md#webhookIdGet) | **GET** /webhook/{id} | Get a webhook by id
[**webhookPost**](WebhookApi.md#webhookPost) | **POST** /webhook | Add a webhook
[**webhookPut**](WebhookApi.md#webhookPut) | **PUT** /webhook | Update a webhook
[**webhookhistoryGet**](WebhookApi.md#webhookhistoryGet) | **GET** /webhookhistory | List webhook history items
[**webhookhistoryIdGet**](WebhookApi.md#webhookhistoryIdGet) | **GET** /webhookhistory/{id} | Get a webhook history item by id



## webhookGet

> [WebHook] webhookGet(opts)

List webhooks

Retrieve a paginated list of webhooks. Results can be filtered by company, description, enabled status, events, and URL.  **Webhooks** allow you to receive notifications to an external service when specific events occur, such as invoice creation or status updates. You can subscribe to specific events and receive a notification when they occur.  You can also manage webhooks via the [Dashboard](https://dashboard.invoicetronic.com).  For more information, see the **[Webhooks documentation page](https://invoicetronic.com/en/docs/webhooks/)**.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.WebhookApi();
let opts = {
  'companyId': 56, // Number | Company id
  'page': 1, // Number | Page number.
  'pageSize': 100, // Number | Items per page. Cannot be greater than 200.
  'sort': "sort_example", // String | Sort by field. Prefix with '-' for descending order.
  'description': "description_example", // String | 
  'enabled': true, // Boolean | 
  'events': "events_example", // String | 
  'url': "url_example" // String | 
};
apiInstance.webhookGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| Company id | [optional] 
 **page** | **Number**| Page number. | [optional] [default to 1]
 **pageSize** | **Number**| Items per page. Cannot be greater than 200. | [optional] [default to 100]
 **sort** | **String**| Sort by field. Prefix with &#39;-&#39; for descending order. | [optional] 
 **description** | **String**|  | [optional] 
 **enabled** | **Boolean**|  | [optional] 
 **events** | **String**|  | [optional] 
 **url** | **String**|  | [optional] 

### Return type

[**[WebHook]**](WebHook.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookIdDelete

> WebHook webhookIdDelete(id)

Delete a webhook by id

Delete a webhook subscription by its internal id.  **Webhooks** allow you to receive notifications to an external service when specific events occur, such as invoice creation or status updates. You can subscribe to specific events and receive a notification when they occur.  You can also manage webhooks via the [Dashboard](https://dashboard.invoicetronic.com).  For more information, see the **[Webhooks documentation page](https://invoicetronic.com/en/docs/webhooks/)**.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.WebhookApi();
let id = 56; // Number | Item id
apiInstance.webhookIdDelete(id).then((data) => {
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

[**WebHook**](WebHook.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookIdGet

> WebHook webhookIdGet(id)

Get a webhook by id

Retrieve a webhook by its internal id.  **Webhooks** allow you to receive notifications to an external service when specific events occur, such as invoice creation or status updates. You can subscribe to specific events and receive a notification when they occur.  You can also manage webhooks via the [Dashboard](https://dashboard.invoicetronic.com).  For more information, see the **[Webhooks documentation page](https://invoicetronic.com/en/docs/webhooks/)**.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.WebhookApi();
let id = 56; // Number | Item id
apiInstance.webhookIdGet(id).then((data) => {
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

[**WebHook**](WebHook.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookPost

> WebHook webhookPost(webHook)

Add a webhook

Create a new webhook subscription.  **Webhooks** allow you to receive notifications to an external service when specific events occur, such as invoice creation or status updates. You can subscribe to specific events and receive a notification when they occur.  You can also manage webhooks via the [Dashboard](https://dashboard.invoicetronic.com).  For more information, see the **[Webhooks documentation page](https://invoicetronic.com/en/docs/webhooks/)**.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.WebhookApi();
let webHook = new invoicetronicSdk.WebHook(); // WebHook | 
apiInstance.webhookPost(webHook).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webHook** | [**WebHook**](WebHook.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## webhookPut

> WebHook webhookPut(webHook)

Update a webhook

Update an existing webhook subscription.  **Webhooks** allow you to receive notifications to an external service when specific events occur, such as invoice creation or status updates. You can subscribe to specific events and receive a notification when they occur.  You can also manage webhooks via the [Dashboard](https://dashboard.invoicetronic.com).  For more information, see the **[Webhooks documentation page](https://invoicetronic.com/en/docs/webhooks/)**.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.WebhookApi();
let webHook = new invoicetronicSdk.WebHook(); // WebHook | 
apiInstance.webhookPut(webHook).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webHook** | [**WebHook**](WebHook.md)|  | 

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## webhookhistoryGet

> [WebHookHistory] webhookhistoryGet(opts)

List webhook history items

Webhook history items are stored in the database and can be accessed via the API. They are preserved for 15 in both the live and sandbox environments.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.WebhookApi();
let opts = {
  'page': 1, // Number | Page number.
  'pageSize': 100, // Number | Items per page. Cannot be greater than 200.
  'sort': "sort_example", // String | Sort by field. Prefix with '-' for descending order.
  'webhookId': 56 // Number | WebHook id
};
apiInstance.webhookhistoryGet(opts).then((data) => {
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
 **webhookId** | **Number**| WebHook id | [optional] 

### Return type

[**[WebHookHistory]**](WebHookHistory.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookhistoryIdGet

> WebHookHistory webhookhistoryIdGet(id)

Get a webhook history item by id

Webhook history items are stored in the database and can be accessed via the API. They are preserved for 15 in both the live and sandbox environments.

### Example

```javascript
import invoicetronicSdk from '@invoicetronic/js-sdk';
let defaultClient = invoicetronicSdk.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new invoicetronicSdk.WebhookApi();
let id = 56; // Number | Item id
apiInstance.webhookhistoryIdGet(id).then((data) => {
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

[**WebHookHistory**](WebHookHistory.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

