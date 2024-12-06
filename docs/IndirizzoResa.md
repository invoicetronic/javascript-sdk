# Invoice_Sdk::IndirizzoResa

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **indirizzo** | **String** |  | [optional] |
| **numero_civico** | **String** |  | [optional] |
| **cap** | **String** |  | [optional] |
| **comune** | **String** |  | [optional] |
| **provincia** | **String** |  | [optional] |
| **nazione** | **String** |  | [optional][default to &#39;IT&#39;] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::IndirizzoResa.new(
  indirizzo: null,
  numero_civico: null,
  cap: null,
  comune: null,
  provincia: null,
  nazione: null
)
```

