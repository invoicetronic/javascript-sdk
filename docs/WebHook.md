# Invoice_Sdk::WebHook

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] |
| **created** | **Time** | Creation date. It is set automatically. | [optional] |
| **version** | **Integer** | Row version, for optimistic concurrency. It is set automatically. | [optional] |
| **user_id** | **Integer** | User id. | [optional] |
| **company_id** | **Integer** | Company id. | [optional] |
| **url** | **String** | The url of your application&#39;s endpoint that will receive a POST request when the webhook is fired. | [optional] |
| **enabled** | **Boolean** | Wetehr the webhooks is enabled or not. On creation, this is set to &#x60;true&#x60;. | [optional] |
| **secret** | **String** | The secret used to generate webhook signatures, only returned on creation. You should store this value securely and validate it on every call, to ensure that the caller is InvoiceApi. | [optional] |
| **description** | **String** | An optional description. | [optional] |
| **events** | **Array&lt;String&gt;** | List of events to that trigger the webhook.  See InvoiceApi.SupportedEvents.Available for a list of valid event names. | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::WebHook.new(
  id: null,
  created: null,
  version: null,
  user_id: null,
  company_id: null,
  url: null,
  enabled: null,
  secret: null,
  description: null,
  events: null
)
```

