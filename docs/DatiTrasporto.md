# Invoice_Sdk::DatiTrasporto

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dati_anagrafici_vettore** | [**DatiAnagraficiVettore**](DatiAnagraficiVettore.md) |  | [optional] |
| **mezzo_trasporto** | **String** |  | [optional] |
| **causale_trasporto** | **String** |  | [optional] |
| **numero_colli** | **Integer** |  | [optional] |
| **descrizione** | **String** |  | [optional] |
| **unita_misura_peso** | **String** |  | [optional] |
| **peso_lordo** | **Float** |  | [optional] |
| **peso_netto** | **Float** |  | [optional] |
| **data_ora_ritiro** | **Time** |  | [optional] |
| **data_inizio_trasporto** | **Time** |  | [optional] |
| **tipo_resa** | **String** |  | [optional] |
| **indirizzo_resa** | [**IndirizzoResa**](IndirizzoResa.md) |  | [optional] |
| **data_ora_consegna** | **Time** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiTrasporto.new(
  dati_anagrafici_vettore: null,
  mezzo_trasporto: null,
  causale_trasporto: null,
  numero_colli: null,
  descrizione: null,
  unita_misura_peso: null,
  peso_lordo: null,
  peso_netto: null,
  data_ora_ritiro: null,
  data_inizio_trasporto: null,
  tipo_resa: null,
  indirizzo_resa: null,
  data_ora_consegna: null
)
```

