# Invoice_Sdk::WebhookApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**invoice_v1_webhook_get**](WebhookApi.md#invoice_v1_webhook_get) | **GET** /invoice/v1/webhook | List webhooks |
| [**invoice_v1_webhook_id_delete**](WebhookApi.md#invoice_v1_webhook_id_delete) | **DELETE** /invoice/v1/webhook/{id} | Delete a webhook by id |
| [**invoice_v1_webhook_id_get**](WebhookApi.md#invoice_v1_webhook_id_get) | **GET** /invoice/v1/webhook/{id} | Get a webhook by id |
| [**invoice_v1_webhook_post**](WebhookApi.md#invoice_v1_webhook_post) | **POST** /invoice/v1/webhook | Add a webhook |
| [**invoice_v1_webhook_put**](WebhookApi.md#invoice_v1_webhook_put) | **PUT** /invoice/v1/webhook | Update a webhook |
| [**invoice_v1_webhookhistory_get**](WebhookApi.md#invoice_v1_webhookhistory_get) | **GET** /invoice/v1/webhookhistory | List webhook history items |
| [**invoice_v1_webhookhistory_id_get**](WebhookApi.md#invoice_v1_webhookhistory_id_get) | **GET** /invoice/v1/webhookhistory/{id} | Get a webhook history item by id |


## invoice_v1_webhook_get

> <Array<WebHook>> invoice_v1_webhook_get(opts)

List webhooks

Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.

### Examples

```ruby
require 'time'
require 'invoicetronic_invoice_sdk'
# setup authorization
Invoice_Sdk.configure do |config|
  # Configure HTTP basic authorization: Basic
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = Invoice_Sdk::WebhookApi.new
opts = {
  page: 56, # Integer | Page number.
  page_size: 56 # Integer | Items per page.
}

begin
  # List webhooks
  result = api_instance.invoice_v1_webhook_get(opts)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhook_get: #{e}"
end
```

#### Using the invoice_v1_webhook_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<WebHook>>, Integer, Hash)> invoice_v1_webhook_get_with_http_info(opts)

```ruby
begin
  # List webhooks
  data, status_code, headers = api_instance.invoice_v1_webhook_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<WebHook>>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhook_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **page_size** | **Integer** | Items per page. | [optional][default to 100] |

### Return type

[**Array&lt;WebHook&gt;**](WebHook.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoice_v1_webhook_id_delete

> <WebHook> invoice_v1_webhook_id_delete(id)

Delete a webhook by id

Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.

### Examples

```ruby
require 'time'
require 'invoicetronic_invoice_sdk'
# setup authorization
Invoice_Sdk.configure do |config|
  # Configure HTTP basic authorization: Basic
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = Invoice_Sdk::WebhookApi.new
id = 56 # Integer | Item id.

begin
  # Delete a webhook by id
  result = api_instance.invoice_v1_webhook_id_delete(id)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhook_id_delete: #{e}"
end
```

#### Using the invoice_v1_webhook_id_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WebHook>, Integer, Hash)> invoice_v1_webhook_id_delete_with_http_info(id)

```ruby
begin
  # Delete a webhook by id
  data, status_code, headers = api_instance.invoice_v1_webhook_id_delete_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WebHook>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhook_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Item id. |  |

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoice_v1_webhook_id_get

> <WebHook> invoice_v1_webhook_id_get(id)

Get a webhook by id

Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.

### Examples

```ruby
require 'time'
require 'invoicetronic_invoice_sdk'
# setup authorization
Invoice_Sdk.configure do |config|
  # Configure HTTP basic authorization: Basic
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = Invoice_Sdk::WebhookApi.new
id = 56 # Integer | Item id.

begin
  # Get a webhook by id
  result = api_instance.invoice_v1_webhook_id_get(id)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhook_id_get: #{e}"
end
```

#### Using the invoice_v1_webhook_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WebHook>, Integer, Hash)> invoice_v1_webhook_id_get_with_http_info(id)

```ruby
begin
  # Get a webhook by id
  data, status_code, headers = api_instance.invoice_v1_webhook_id_get_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WebHook>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhook_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Item id. |  |

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoice_v1_webhook_post

> <WebHook> invoice_v1_webhook_post(web_hook)

Add a webhook

Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.

### Examples

```ruby
require 'time'
require 'invoicetronic_invoice_sdk'
# setup authorization
Invoice_Sdk.configure do |config|
  # Configure HTTP basic authorization: Basic
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = Invoice_Sdk::WebhookApi.new
web_hook = Invoice_Sdk::WebHook.new # WebHook | 

begin
  # Add a webhook
  result = api_instance.invoice_v1_webhook_post(web_hook)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhook_post: #{e}"
end
```

#### Using the invoice_v1_webhook_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WebHook>, Integer, Hash)> invoice_v1_webhook_post_with_http_info(web_hook)

```ruby
begin
  # Add a webhook
  data, status_code, headers = api_instance.invoice_v1_webhook_post_with_http_info(web_hook)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WebHook>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhook_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **web_hook** | [**WebHook**](WebHook.md) |  |  |

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invoice_v1_webhook_put

> <WebHook> invoice_v1_webhook_put(web_hook)

Update a webhook

Webhooks are used to notify external services about write events that occur in the API. You can subscribe to specific events and receive a notification when they occur.

### Examples

```ruby
require 'time'
require 'invoicetronic_invoice_sdk'
# setup authorization
Invoice_Sdk.configure do |config|
  # Configure HTTP basic authorization: Basic
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = Invoice_Sdk::WebhookApi.new
web_hook = Invoice_Sdk::WebHook.new # WebHook | 

begin
  # Update a webhook
  result = api_instance.invoice_v1_webhook_put(web_hook)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhook_put: #{e}"
end
```

#### Using the invoice_v1_webhook_put_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WebHook>, Integer, Hash)> invoice_v1_webhook_put_with_http_info(web_hook)

```ruby
begin
  # Update a webhook
  data, status_code, headers = api_instance.invoice_v1_webhook_put_with_http_info(web_hook)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WebHook>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhook_put_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **web_hook** | [**WebHook**](WebHook.md) |  |  |

### Return type

[**WebHook**](WebHook.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invoice_v1_webhookhistory_get

> <Array<WebHookHistory>> invoice_v1_webhookhistory_get(opts)

List webhook history items

### Examples

```ruby
require 'time'
require 'invoicetronic_invoice_sdk'
# setup authorization
Invoice_Sdk.configure do |config|
  # Configure HTTP basic authorization: Basic
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = Invoice_Sdk::WebhookApi.new
opts = {
  page: 56, # Integer | Page number.
  page_size: 56 # Integer | Items per page.
}

begin
  # List webhook history items
  result = api_instance.invoice_v1_webhookhistory_get(opts)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhookhistory_get: #{e}"
end
```

#### Using the invoice_v1_webhookhistory_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<WebHookHistory>>, Integer, Hash)> invoice_v1_webhookhistory_get_with_http_info(opts)

```ruby
begin
  # List webhook history items
  data, status_code, headers = api_instance.invoice_v1_webhookhistory_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<WebHookHistory>>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhookhistory_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **page_size** | **Integer** | Items per page. | [optional][default to 100] |

### Return type

[**Array&lt;WebHookHistory&gt;**](WebHookHistory.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoice_v1_webhookhistory_id_get

> <WebHookHistory> invoice_v1_webhookhistory_id_get(id)

Get a webhook history item by id

### Examples

```ruby
require 'time'
require 'invoicetronic_invoice_sdk'
# setup authorization
Invoice_Sdk.configure do |config|
  # Configure HTTP basic authorization: Basic
  config.username = 'YOUR USERNAME'
  config.password = 'YOUR PASSWORD'
end

api_instance = Invoice_Sdk::WebhookApi.new
id = 56 # Integer | Item id.

begin
  # Get a webhook history item by id
  result = api_instance.invoice_v1_webhookhistory_id_get(id)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhookhistory_id_get: #{e}"
end
```

#### Using the invoice_v1_webhookhistory_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<WebHookHistory>, Integer, Hash)> invoice_v1_webhookhistory_id_get_with_http_info(id)

```ruby
begin
  # Get a webhook history item by id
  data, status_code, headers = api_instance.invoice_v1_webhookhistory_id_get_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <WebHookHistory>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling WebhookApi->invoice_v1_webhookhistory_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Item id. |  |

### Return type

[**WebHookHistory**](WebHookHistory.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

