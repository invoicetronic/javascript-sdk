# Invoice_Sdk::DatiAnagraficiVettore

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id_fiscale_iva** | [**IdFiscaleIVA**](IdFiscaleIVA.md) |  | [optional] |
| **codice_fiscale** | **String** |  | [optional] |
| **anagrafica** | [**Anagrafica**](Anagrafica.md) |  | [optional] |
| **numero_licenza_guida** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiAnagraficiVettore.new(
  id_fiscale_iva: null,
  codice_fiscale: null,
  anagrafica: null,
  numero_licenza_guida: null
)
```

