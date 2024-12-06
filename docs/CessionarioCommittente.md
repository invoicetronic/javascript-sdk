# Invoice_Sdk::CessionarioCommittente

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dati_anagrafici** | [**DatiAnagraficiCessionarioCommittente**](DatiAnagraficiCessionarioCommittente.md) |  | [optional] |
| **sede** | [**SedeCessionarioCommittente**](SedeCessionarioCommittente.md) |  | [optional] |
| **stabile_organizzazione** | [**StabileOrganizzazione**](StabileOrganizzazione.md) |  | [optional] |
| **rappresentante_fiscale** | [**RappresentanteFiscaleCessionarioCommittente**](RappresentanteFiscaleCessionarioCommittente.md) |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::CessionarioCommittente.new(
  dati_anagrafici: null,
  sede: null,
  stabile_organizzazione: null,
  rappresentante_fiscale: null
)
```

