# Invoice_Sdk::ModelSend

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] |
| **created** | **Time** | Creation date. It is set automatically. | [optional] |
| **version** | **Integer** | Row version, for optimistic concurrency. It is set automatically. | [optional] |
| **user_id** | **Integer** | User id. | [optional] |
| **company_id** | **Integer** | Company id. On send, this is the sender and must be set in advance. On receive, it will be  automatically set based on the recipient&#39;s VAT number. If a matching company is not found, the invoice will be rejected until the company is created. | [optional] |
| **committente** | **String** | VAT number of the Cessionario/Committente (customer). This is automatically set based on the recipient&#39;s VAT number. | [optional] |
| **prestatore** | **String** | VAT number of the Cedente/Prestatore (vendor). This is automatically set based on the sender&#39;s VAT number. | [optional] |
| **identifier** | **String** | SDI identifier. This is set by the SDI and is guaranted to be unique within the SDI system. | [optional] |
| **file_name** | **String** | Xml file name. | [optional] |
| **format** | **String** | SDI format (FPA12, FPR12, FSM10, ...) | [optional] |
| **payload** | **String** | Xml payloaad. This is the actual xml content, as string. On send, it can be base64 encoded. If it&#39;s not, it will be encoded before sending. It is guaranteed to be cyphered at rest. | [optional] |
| **last_update** | **Time** | Last update from SDI. | [optional] |
| **date_sent** | **Time** | When the invoice was sent to SDI. | [optional] |
| **documents** | [**Array&lt;DocumentData&gt;**](DocumentData.md) | The invoices included in the payload. This is set by the system, based on the xml content. | [optional] |
| **meta_data** | **Hash&lt;String, String&gt;** | Optional metadata, as json. | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::ModelSend.new(
  id: null,
  created: null,
  version: null,
  user_id: null,
  company_id: null,
  committente: null,
  prestatore: null,
  identifier: null,
  file_name: null,
  format: null,
  payload: null,
  last_update: null,
  date_sent: null,
  documents: null,
  meta_data: null
)
```

