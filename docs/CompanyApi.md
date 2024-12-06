# Invoice_Sdk::CompanyApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**invoice_v1_company_get**](CompanyApi.md#invoice_v1_company_get) | **GET** /invoice/v1/company | List companies |
| [**invoice_v1_company_id_delete**](CompanyApi.md#invoice_v1_company_id_delete) | **DELETE** /invoice/v1/company/{id} | Delete a company |
| [**invoice_v1_company_id_get**](CompanyApi.md#invoice_v1_company_id_get) | **GET** /invoice/v1/company/{id} | Get a company by id |
| [**invoice_v1_company_post**](CompanyApi.md#invoice_v1_company_post) | **POST** /invoice/v1/company | Add a company |
| [**invoice_v1_company_put**](CompanyApi.md#invoice_v1_company_put) | **PUT** /invoice/v1/company | Update a company |


## invoice_v1_company_get

> <Array<Company>> invoice_v1_company_get(opts)

List companies

Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.

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

api_instance = Invoice_Sdk::CompanyApi.new
opts = {
  page: 56, # Integer | Page number.
  page_size: 56 # Integer | Items per page.
}

begin
  # List companies
  result = api_instance.invoice_v1_company_get(opts)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling CompanyApi->invoice_v1_company_get: #{e}"
end
```

#### Using the invoice_v1_company_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<Company>>, Integer, Hash)> invoice_v1_company_get_with_http_info(opts)

```ruby
begin
  # List companies
  data, status_code, headers = api_instance.invoice_v1_company_get_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<Company>>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling CompanyApi->invoice_v1_company_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page** | **Integer** | Page number. | [optional][default to 1] |
| **page_size** | **Integer** | Items per page. | [optional][default to 100] |

### Return type

[**Array&lt;Company&gt;**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoice_v1_company_id_delete

> <Company> invoice_v1_company_id_delete(id)

Delete a company

Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.

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

api_instance = Invoice_Sdk::CompanyApi.new
id = 56 # Integer | Item id.

begin
  # Delete a company
  result = api_instance.invoice_v1_company_id_delete(id)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling CompanyApi->invoice_v1_company_id_delete: #{e}"
end
```

#### Using the invoice_v1_company_id_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Company>, Integer, Hash)> invoice_v1_company_id_delete_with_http_info(id)

```ruby
begin
  # Delete a company
  data, status_code, headers = api_instance.invoice_v1_company_id_delete_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Company>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling CompanyApi->invoice_v1_company_id_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Item id. |  |

### Return type

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoice_v1_company_id_get

> <Company> invoice_v1_company_id_get(id)

Get a company by id

Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.

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

api_instance = Invoice_Sdk::CompanyApi.new
id = 56 # Integer | Item id.

begin
  # Get a company by id
  result = api_instance.invoice_v1_company_id_get(id)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling CompanyApi->invoice_v1_company_id_get: #{e}"
end
```

#### Using the invoice_v1_company_id_get_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Company>, Integer, Hash)> invoice_v1_company_id_get_with_http_info(id)

```ruby
begin
  # Get a company by id
  data, status_code, headers = api_instance.invoice_v1_company_id_get_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Company>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling CompanyApi->invoice_v1_company_id_get_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Item id. |  |

### Return type

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## invoice_v1_company_post

> <Company> invoice_v1_company_post(company)

Add a company

Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.

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

api_instance = Invoice_Sdk::CompanyApi.new
company = Invoice_Sdk::Company.new({vat: 'IT01234567891', fiscal_code: 'RSSMRA70A01F205V', name: 'Mario Rossi Srl'}) # Company | 

begin
  # Add a company
  result = api_instance.invoice_v1_company_post(company)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling CompanyApi->invoice_v1_company_post: #{e}"
end
```

#### Using the invoice_v1_company_post_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Company>, Integer, Hash)> invoice_v1_company_post_with_http_info(company)

```ruby
begin
  # Add a company
  data, status_code, headers = api_instance.invoice_v1_company_post_with_http_info(company)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Company>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling CompanyApi->invoice_v1_company_post_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **company** | [**Company**](Company.md) |  |  |

### Return type

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## invoice_v1_company_put

> <Company> invoice_v1_company_put(company)

Update a company

Companies are the entities that send and receive invoices. At least one company is required in order to send and receive invoices.

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

api_instance = Invoice_Sdk::CompanyApi.new
company = Invoice_Sdk::Company.new({vat: 'IT01234567891', fiscal_code: 'RSSMRA70A01F205V', name: 'Mario Rossi Srl'}) # Company | 

begin
  # Update a company
  result = api_instance.invoice_v1_company_put(company)
  p result
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling CompanyApi->invoice_v1_company_put: #{e}"
end
```

#### Using the invoice_v1_company_put_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Company>, Integer, Hash)> invoice_v1_company_put_with_http_info(company)

```ruby
begin
  # Update a company
  data, status_code, headers = api_instance.invoice_v1_company_put_with_http_info(company)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Company>
rescue Invoice_Sdk::ApiError => e
  puts "Error when calling CompanyApi->invoice_v1_company_put_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **company** | [**Company**](Company.md) |  |  |

### Return type

[**Company**](Company.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

