# Invoice_Sdk::LogApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**invoice_v1_log_get**](LogApi.md#invoice_v1_log_get) | **GET** /invoice/v1/log | List events |
| [**invoice_v1_log_id_get**](LogApi.md#invoice_v1_log_id_get) | **GET** /invoice/v1/log/{id} | Get an event by id |


## invoice_v1_log_get

> <Array<Event>> invoice_v1_log_get(opts)

List events

Every API operation is logged and can be retrieved here.

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

api_instance = Invoice_Sdk::LogApi.new
opts = {
  page: 56, # Integer | Page number.
  page_size: 56 # Integer | Items per page.
}

begin
  # List events
  result = api_instance.invoice_v1_log_get(opts)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling LogApi->invoice_v1_log_get: #{e}"
end
```

#### Using the invoice_v1_log_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Event>>, Integer, Hash)> invoice_v1_log_get_with_http_info(opts)

```ruby
begin
  # List events
  data, status_code, headers = api_instance.invoice_v1_log_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Event>>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling LogApi->invoice_v1_log_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **page_size** | **Integer** | Items per page. | [optional][default to 100] |

### Return type

[**Array&lt;Event&gt;**](Event.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoice_v1_log_id_get

> <Event> invoice_v1_log_id_get(id)

Get an event by id

Every API operation is logged and can be retrieved here.

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

api_instance = Invoice_Sdk::LogApi.new
id = 56 # Integer | Item id.

begin
  # Get an event by id
  result = api_instance.invoice_v1_log_id_get(id)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling LogApi->invoice_v1_log_id_get: #{e}"
end
```

#### Using the invoice_v1_log_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Event>, Integer, Hash)> invoice_v1_log_id_get_with_http_info(id)

```ruby
begin
  # Get an event by id
  data, status_code, headers = api_instance.invoice_v1_log_id_get_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Event>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling LogApi->invoice_v1_log_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Item id. |  |

### Return type

[**Event**](Event.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

