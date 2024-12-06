# Invoice_Sdk::DatiRitenuta

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tipo_ritenuta** | **String** |  | [optional] |
| **importo_ritenuta** | **Float** |  | [optional] |
| **aliquota_ritenuta** | **Float** |  | [optional] |
| **causale_pagamento** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiRitenuta.new(
  tipo_ritenuta: null,
  importo_ritenuta: null,
  aliquota_ritenuta: null,
  causale_pagamento: null
)
```

