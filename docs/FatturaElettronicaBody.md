# Invoice_Sdk::FatturaElettronicaBody

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dati_generali** | [**DatiGenerali**](DatiGenerali.md) |  | [optional] |
| **dati_beni_servizi** | [**DatiBeniServizi**](DatiBeniServizi.md) |  | [optional] |
| **dati_veicoli** | [**DatiVeicoli**](DatiVeicoli.md) |  | [optional] |
| **dati_pagamento** | [**Array&lt;DatiPagamento&gt;**](DatiPagamento.md) |  | [optional] |
| **allegati** | [**Array&lt;Allegati&gt;**](Allegati.md) |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::FatturaElettronicaBody.new(
  dati_generali: null,
  dati_beni_servizi: null,
  dati_veicoli: null,
  dati_pagamento: null,
  allegati: null
)
```

