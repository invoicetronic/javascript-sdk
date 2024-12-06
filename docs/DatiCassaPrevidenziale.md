# Invoice_Sdk::DatiCassaPrevidenziale

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **tipo_cassa** | **String** |  | [optional] |
| **al_cassa** | **Float** |  | [optional] |
| **importo_contributo_cassa** | **Float** |  | [optional] |
| **imponibile_cassa** | **Float** |  | [optional] |
| **aliquota_iva** | **Float** |  | [optional] |
| **ritenuta** | **String** |  | [optional] |
| **natura** | **String** |  | [optional] |
| **riferimento_amministrazione** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiCassaPrevidenziale.new(
  tipo_cassa: null,
  al_cassa: null,
  importo_contributo_cassa: null,
  imponibile_cassa: null,
  aliquota_iva: null,
  ritenuta: null,
  natura: null,
  riferimento_amministrazione: null
)
```

