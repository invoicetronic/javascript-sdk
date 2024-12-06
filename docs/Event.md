# Invoice_Sdk::Event

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] |
| **created** | **Time** | Creation date. It is set automatically. | [optional] |
| **version** | **Integer** | Row version, for optimistic concurrency. It is set automatically. | [optional] |
| **company_id** | **Integer** | Company id. | [optional] |
| **method** | **String** | Request method. | [optional] |
| **query** | **String** | Request query. | [optional] |
| **endpoint** | **String** | API endpoint. | [optional] |
| **api_version** | **Integer** | Api version. | [optional] |
| **status_code** | **Integer** | Status code returned by the API. | [optional] |
| **date_time** | **Time** | Date and time of the request. | [optional] |
| **error** | **String** | Response error. | [optional] |
| **request_body** | **String** | Request payload. It is guaranteed to be cyphered at rest. | [optional] |
| **response_body** | **String** | Response payload. It is guaranteed to be cyphered at rest. | [optional] |
| **success** | **Boolean** | Wether the request was successful. | [optional][readonly] |
| **user_id** | **Integer** | User id. | [optional] |
| **api_key_id** | **Integer** | Api key id. | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::Event.new(
  id: null,
  created: null,
  version: null,
  company_id: null,
  method: null,
  query: null,
  endpoint: null,
  api_version: null,
  status_code: null,
  date_time: null,
  error: null,
  request_body: null,
  response_body: null,
  success: null,
  user_id: null,
  api_key_id: null
)
```

