# Invoice_Sdk::DatiGeneraliDocumento

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tipo_documento** | **String** |  | [optional] |
| **divisa** | **String** |  | [optional] |
| **data** | **Time** |  | [optional] |
| **numero** | **String** |  | [optional] |
| **dati_ritenuta** | [**Array&lt;DatiRitenuta&gt;**](DatiRitenuta.md) |  | [optional] |
| **dati_bollo** | [**DatiBollo**](DatiBollo.md) |  | [optional] |
| **dati_cassa_previdenziale** | [**Array&lt;DatiCassaPrevidenziale&gt;**](DatiCassaPrevidenziale.md) |  | [optional] |
| **sconto_maggiorazione** | [**Array&lt;ScontoMaggiorazione&gt;**](ScontoMaggiorazione.md) |  | [optional] |
| **importo_totale_documento** | **Float** |  | [optional] |
| **arrotondamento** | **Float** |  | [optional] |
| **causale** | **Array&lt;String&gt;** |  | [optional] |
| **art73** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiGeneraliDocumento.new(
  tipo_documento: null,
  divisa: null,
  data: null,
  numero: null,
  dati_ritenuta: null,
  dati_bollo: null,
  dati_cassa_previdenziale: null,
  sconto_maggiorazione: null,
  importo_totale_documento: null,
  arrotondamento: null,
  causale: null,
  art73: null
)
```

