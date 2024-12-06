# Invoice_Sdk::DatiDDT

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **numero_ddt** | **String** |  | [optional] |
| **data_ddt** | **Time** |  | [optional] |
| **riferimento_numero_linea** | **Array&lt;Integer&gt;** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiDDT.new(
  numero_ddt: null,
  data_ddt: null,
  riferimento_numero_linea: null
)
```

