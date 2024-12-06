# Invoice_Sdk::WebHookHistory

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] |
| **created** | **Time** | Creation date. It is set automatically. | [optional] |
| **version** | **Integer** | Row version, for optimistic concurrency. It is set automatically. | [optional] |
| **web_hook_id** | **Integer** | Webhook id. | [optional] |
| **user_id** | **Integer** | User id. | [optional] |
| **event** | **String** | Event name. | [optional] |
| **status_code** | **Integer** | Status code. | [optional] |
| **request_body** | **String** | Webhook request body. | [optional] |
| **response_body** | **String** | Webhook response body. | [optional] |
| **date_time** | **Time** | Date and time of the request. | [optional] |
| **success** | **Boolean** | Wether the request was successful. | [optional][readonly] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::WebHookHistory.new(
  id: null,
  created: null,
  version: null,
  web_hook_id: null,
  user_id: null,
  event: null,
  status_code: null,
  request_body: null,
  response_body: null,
  date_time: null,
  success: null
)
```

