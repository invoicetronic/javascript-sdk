# Invoice_Sdk::DatiAnagraficiCedentePrestatore

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id_fiscale_iva** | [**IdFiscaleIVA**](IdFiscaleIVA.md) |  | [optional] |
| **codice_fiscale** | **String** |  | [optional] |
| **anagrafica** | [**Anagrafica**](Anagrafica.md) |  | [optional] |
| **albo_professionale** | **String** |  | [optional] |
| **provincia_albo** | **String** |  | [optional] |
| **numero_iscrizione_albo** | **String** |  | [optional] |
| **data_iscrizione_albo** | **Time** |  | [optional] |
| **regime_fiscale** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiAnagraficiCedentePrestatore.new(
  id_fiscale_iva: null,
  codice_fiscale: null,
  anagrafica: null,
  albo_professionale: null,
  provincia_albo: null,
  numero_iscrizione_albo: null,
  data_iscrizione_albo: null,
  regime_fiscale: null
)
```

