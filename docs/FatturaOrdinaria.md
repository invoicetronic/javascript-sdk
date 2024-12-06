# Invoice_Sdk::FatturaOrdinaria

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **sistema_emittente** | **String** |  | [optional] |
| **fattura_elettronica_header** | [**FatturaElettronicaHeader**](FatturaElettronicaHeader.md) |  | [optional] |
| **fattura_elettronica_body** | [**Array&lt;FatturaElettronicaBody&gt;**](FatturaElettronicaBody.md) |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::FatturaOrdinaria.new(
  sistema_emittente: null,
  fattura_elettronica_header: null,
  fattura_elettronica_body: null
)
```

