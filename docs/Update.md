# Invoice_Sdk::Update

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] |
| **created** | **Time** | Creation date. It is set automatically. | [optional] |
| **version** | **Integer** | Row version, for optimistic concurrency. It is set automatically. | [optional] |
| **user_id** | **Integer** | User id. | [optional] |
| **company_id** | **Integer** | Company id. | [optional] |
| **send_id** | **Integer** | Send id. This is the id of the sent invoice to which this update refers to. | [optional] |
| **date_sent** | **Time** | When the document was sent to the SDI. | [optional] |
| **last_update** | **Time** | Last update from SDI. | [optional] |
| **identifier** | **String** | SDI identifier. This is set by the SDI and it is unique within the SDI system. | [optional] |
| **state** | **String** | State of the document. Theses are the possible values, as per the SDI documentation: | [optional] |
| **description** | **String** | Description for the state. | [optional] |
| **message_id** | **String** | SDI message id. | [optional] |
| **errors** | [**Array&lt;Error&gt;**](Error.md) | SDI errors, if any. | [optional] |
| **is_read** | **Boolean** | Wether the item has been read at least once. | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::Update.new(
  id: null,
  created: null,
  version: null,
  user_id: null,
  company_id: null,
  send_id: null,
  date_sent: null,
  last_update: null,
  identifier: null,
  state: null,
  description: null,
  message_id: null,
  errors: null,
  is_read: null
)
```

