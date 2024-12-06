# Invoice_Sdk::DatiRiepilogo

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **aliquota_iva** | **Float** |  | [optional] |
| **natura** | **String** |  | [optional] |
| **spese_accessorie** | **Float** |  | [optional] |
| **arrotondamento** | **Float** |  | [optional] |
| **imponibile_importo** | **Float** |  | [optional] |
| **imposta** | **Float** |  | [optional] |
| **esigibilita_iva** | **String** |  | [optional] |
| **riferimento_normativo** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiRiepilogo.new(
  aliquota_iva: null,
  natura: null,
  spese_accessorie: null,
  arrotondamento: null,
  imponibile_importo: null,
  imposta: null,
  esigibilita_iva: null,
  riferimento_normativo: null
)
```

