# Invoice_Sdk::DettaglioLinee

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **numero_linea** | **Integer** |  | [optional] |
| **tipo_cessione_prestazione** | **String** |  | [optional] |
| **codice_articolo** | [**Array&lt;CodiceArticolo&gt;**](CodiceArticolo.md) |  | [optional] |
| **descrizione** | **String** |  | [optional] |
| **quantita** | **Float** |  | [optional] |
| **unita_misura** | **String** |  | [optional] |
| **data_inizio_periodo** | **Time** |  | [optional] |
| **data_fine_periodo** | **Time** |  | [optional] |
| **prezzo_unitario** | **Float** |  | [optional] |
| **sconto_maggiorazione** | [**Array&lt;ScontoMaggiorazione&gt;**](ScontoMaggiorazione.md) |  | [optional] |
| **prezzo_totale** | **Float** |  | [optional] |
| **aliquota_iva** | **Float** |  | [optional] |
| **ritenuta** | **String** |  | [optional] |
| **natura** | **String** |  | [optional] |
| **riferimento_amministrazione** | **String** |  | [optional] |
| **altri_dati_gestionali** | [**Array&lt;AltriDatiGestionali&gt;**](AltriDatiGestionali.md) |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DettaglioLinee.new(
  numero_linea: null,
  tipo_cessione_prestazione: null,
  codice_articolo: null,
  descrizione: null,
  quantita: null,
  unita_misura: null,
  data_inizio_periodo: null,
  data_fine_periodo: null,
  prezzo_unitario: null,
  sconto_maggiorazione: null,
  prezzo_totale: null,
  aliquota_iva: null,
  ritenuta: null,
  natura: null,
  riferimento_amministrazione: null,
  altri_dati_gestionali: null
)
```

