# Invoice_Sdk::RappresentanteFiscaleCessionarioCommittente

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **denominazione** | **String** |  | [optional] |
| **nome** | **String** |  | [optional] |
| **cognome** | **String** |  | [optional] |
| **id_fiscale_iva** | [**IdFiscaleIVA**](IdFiscaleIVA.md) |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::RappresentanteFiscaleCessionarioCommittente.new(
  denominazione: null,
  nome: null,
  cognome: null,
  id_fiscale_iva: null
)
```

