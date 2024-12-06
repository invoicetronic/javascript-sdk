# Invoice_Sdk::DatiRicezione

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **riferimento_numero_linea** | **Array&lt;Integer&gt;** |  | [optional] |
| **id_documento** | **String** |  | [optional] |
| **data** | **Time** |  | [optional] |
| **num_item** | **String** |  | [optional] |
| **codice_commessa_convenzione** | **String** |  | [optional] |
| **codice_cup** | **String** |  | [optional] |
| **codice_cig** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiRicezione.new(
  riferimento_numero_linea: null,
  id_documento: null,
  data: null,
  num_item: null,
  codice_commessa_convenzione: null,
  codice_cup: null,
  codice_cig: null
)
```

