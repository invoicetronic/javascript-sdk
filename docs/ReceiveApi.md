# Invoice_Sdk::ReceiveApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**invoice_v1_receive_get**](ReceiveApi.md#invoice_v1_receive_get) | **GET** /invoice/v1/receive | List incoming invoices |
| [**invoice_v1_receive_id_delete**](ReceiveApi.md#invoice_v1_receive_id_delete) | **DELETE** /invoice/v1/receive/{id} | Delete an incoming invoice by id |
| [**invoice_v1_receive_id_get**](ReceiveApi.md#invoice_v1_receive_id_get) | **GET** /invoice/v1/receive/{id} | Get an incoming invoice by id |


## invoice_v1_receive_get

> <Array<Receive>> invoice_v1_receive_get(opts)

List incoming invoices

Receive invoices are the invoices that are received from other companies.

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

api_instance = Invoice_Sdk::ReceiveApi.new
opts = {
  company_id: 56, # Integer | Company id.
  identifier: 'identifier_example', # String | SDI identifier.
  unread: true, # Boolean | Unread items only.
  committente: 'committente_example', # String | VAT number or fiscal code.
  prestatore: 'prestatore_example', # String | VAT number or fiscal code.
  file_name: 'file_name_example', # String | File name.
  last_update_from: Time.parse('2013-10-20T19:20:30+01:00'), # Time | UTC ISO 8601 (2024-11-29T12:34:56Z)
  last_update_to: Time.parse('2013-10-20T19:20:30+01:00'), # Time | UTC ISO 8601 (2024-11-29T12:34:56Z)
  date_sent_from: Time.parse('2013-10-20T19:20:30+01:00'), # Time | UTC ISO 8601 (2024-11-29T12:34:56Z)
  date_sent_to: Time.parse('2013-10-20T19:20:30+01:00'), # Time | UTC ISO 8601 (2024-11-29T12:34:56Z)
  document_date_from: Time.parse('2013-10-20T19:20:30+01:00'), # Time | UTC ISO 8601 (2024-11-29T12:34:56Z)
  document_date_to: Time.parse('2013-10-20T19:20:30+01:00'), # Time | UTC ISO 8601 (2024-11-29T12:34:56Z)
  document_number: 'document_number_example', # String | Document number.
  page: 56, # Integer | Page number.
  page_size: 56 # Integer | Items per page.
}

begin
  # List incoming invoices
  result = api_instance.invoice_v1_receive_get(opts)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling ReceiveApi->invoice_v1_receive_get: #{e}"
end
```

#### Using the invoice_v1_receive_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Receive>>, Integer, Hash)> invoice_v1_receive_get_with_http_info(opts)

```ruby
begin
  # List incoming invoices
  data, status_code, headers = api_instance.invoice_v1_receive_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Receive>>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling ReceiveApi->invoice_v1_receive_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **company_id** | **Integer** | Company id. | [optional] |
| **identifier** | **String** | SDI identifier. | [optional] |
| **unread** | **Boolean** | Unread items only. | [optional] |
| **committente** | **String** | VAT number or fiscal code. | [optional] |
| **prestatore** | **String** | VAT number or fiscal code. | [optional] |
| **file_name** | **String** | File name. | [optional] |
| **last_update_from** | **Time** | UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] |
| **last_update_to** | **Time** | UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] |
| **date_sent_from** | **Time** | UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] |
| **date_sent_to** | **Time** | UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] |
| **document_date_from** | **Time** | UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] |
| **document_date_to** | **Time** | UTC ISO 8601 (2024-11-29T12:34:56Z) | [optional] |
| **document_number** | **String** | Document number. | [optional] |
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **page_size** | **Integer** | Items per page. | [optional][default to 100] |

### Return type

[**Array&lt;Receive&gt;**](Receive.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## invoice_v1_receive_id_delete

> <Receive> invoice_v1_receive_id_delete(id)

Delete an incoming invoice by id

Receive invoices are the invoices that are received from other companies.

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

api_instance = Invoice_Sdk::ReceiveApi.new
id = 56 # Integer | Item id.

begin
  # Delete an incoming invoice by id
  result = api_instance.invoice_v1_receive_id_delete(id)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling ReceiveApi->invoice_v1_receive_id_delete: #{e}"
end
```

#### Using the invoice_v1_receive_id_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Receive>, Integer, Hash)> invoice_v1_receive_id_delete_with_http_info(id)

```ruby
begin
  # Delete an incoming invoice by id
  data, status_code, headers = api_instance.invoice_v1_receive_id_delete_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Receive>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling ReceiveApi->invoice_v1_receive_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Item id. |  |

### Return type

[**Receive**](Receive.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoice_v1_receive_id_get

> <Receive> invoice_v1_receive_id_get(id)

Get an incoming invoice by id

Receive invoices are the invoices that are received from other companies.

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

api_instance = Invoice_Sdk::ReceiveApi.new
id = 56 # Integer | Item id.

begin
  # Get an incoming invoice by id
  result = api_instance.invoice_v1_receive_id_get(id)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling ReceiveApi->invoice_v1_receive_id_get: #{e}"
end
```

#### Using the invoice_v1_receive_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Receive>, Integer, Hash)> invoice_v1_receive_id_get_with_http_info(id)

```ruby
begin
  # Get an incoming invoice by id
  data, status_code, headers = api_instance.invoice_v1_receive_id_get_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Receive>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling ReceiveApi->invoice_v1_receive_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Item id. |  |

### Return type

[**Receive**](Receive.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

