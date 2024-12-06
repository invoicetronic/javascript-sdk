# Invoice_Sdk::UpdateApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**invoice_v1_update_get**](UpdateApi.md#invoice_v1_update_get) | **GET** /invoice/v1/update | List updates |
| [**invoice_v1_update_id_get**](UpdateApi.md#invoice_v1_update_id_get) | **GET** /invoice/v1/update/{id} | Get an update by id |


## invoice_v1_update_get

> <Array<Update>> invoice_v1_update_get(opts)

List updates

Updates are notifications that are sent by the SDI about the status of sent invoices.

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

api_instance = Invoice_Sdk::UpdateApi.new
opts = {
  company_id: 56, # Integer | Company id.
  identifier: 'identifier_example', # String | SDI identifier.
  unread: true, # Boolean | Only unread items.
  send_id: 56, # Integer | Send item's id.
  state: 'Inviato', # String | SDI state
  last_update_from: Time.parse('2013-10-20T19:20:30+01:00'), # Time | UTC ISO 8601 (2024-11-29T12:34:56Z)
  last_update_to: Time.parse('2013-10-20T19:20:30+01:00'), # Time | UTC ISO 8601 (2024-11-29T12:34:56Z)
  date_sent_from: Time.parse('2013-10-20T19:20:30+01:00'), # Time | UTC ISO 8601 (2024-11-29T12:34:56Z)
  date_sent_to: Time.parse('2013-10-20T19:20:30+01:00'), # Time | UTC ISO 8601 format (2024-11-29T12:34:56Z)
  page: 56, # Integer | Page number.
  page_size: 56 # Integer | Items per page.
}

begin
  # List updates
  result = api_instance.invoice_v1_update_get(opts)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling UpdateApi->invoice_v1_update_get: #{e}"
end
```

#### Using the invoice_v1_update_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Update>>, Integer, Hash)> invoice_v1_update_get_with_http_info(opts)

```ruby
begin
  # List updates
  data, status_code, headers = api_instance.invoice_v1_update_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Update>>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling UpdateApi->invoice_v1_update_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **company_id** | **Integer** | Company id. | [optional] |
| **identifier** | **String** | SDI identifier. | [optional] |
| **unread** | **Boolean** | Only unread items. | [optional] |
| **send_id** | **Integer** | Send item&#39;s id. | [optional] |
| **state** | **String** | SDI state | [optional] |
| **last_update_from** | **Time** | UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] |
| **last_update_to** | **Time** | UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] |
| **date_sent_from** | **Time** | UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] |
| **date_sent_to** | **Time** | UTC ISO 8601 format (2024-11-29T12:34:56Z) | [optional] |
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **page_size** | **Integer** | Items per page. | [optional][default to 100] |

### Return type

[**Array&lt;Update&gt;**](Update.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoice_v1_update_id_get

> <Update> invoice_v1_update_id_get(id)

Get an update by id

Updates are notifications that are sent by the SDI about the status of sent invoices.

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

api_instance = Invoice_Sdk::UpdateApi.new
id = 56 # Integer | Item id.

begin
  # Get an update by id
  result = api_instance.invoice_v1_update_id_get(id)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling UpdateApi->invoice_v1_update_id_get: #{e}"
end
```

#### Using the invoice_v1_update_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Update>, Integer, Hash)> invoice_v1_update_id_get_with_http_info(id)

```ruby
begin
  # Get an update by id
  data, status_code, headers = api_instance.invoice_v1_update_id_get_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Update>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling UpdateApi->invoice_v1_update_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Item id. |  |

### Return type

[**Update**](Update.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

