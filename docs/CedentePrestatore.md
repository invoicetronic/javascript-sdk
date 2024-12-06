# Invoice_Sdk::CedentePrestatore

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dati_anagrafici** | [**DatiAnagraficiCedentePrestatore**](DatiAnagraficiCedentePrestatore.md) |  | [optional] |
| **sede** | [**SedeCedentePrestatore**](SedeCedentePrestatore.md) |  | [optional] |
| **stabile_organizzazione** | [**StabileOrganizzazione**](StabileOrganizzazione.md) |  | [optional] |
| **iscrizione_rea** | [**IscrizioneREA**](IscrizioneREA.md) |  | [optional] |
| **contatti** | [**Contatti**](Contatti.md) |  | [optional] |
| **riferimento_amministrazione** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::CedentePrestatore.new(
  dati_anagrafici: null,
  sede: null,
  stabile_organizzazione: null,
  iscrizione_rea: null,
  contatti: null,
  riferimento_amministrazione: null
)
```

