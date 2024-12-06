# Invoice_Sdk::DatiTrasmissione

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id_trasmittente** | [**IdTrasmittente**](IdTrasmittente.md) |  | [optional] |
| **progressivo_invio** | **String** |  | [optional] |
| **formato_trasmissione** | **String** |  | [optional] |
| **codice_destinatario** | **String** |  | [optional] |
| **contatti_trasmittente** | [**ContattiTrasmittente**](ContattiTrasmittente.md) |  | [optional] |
| **pec_destinatario** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiTrasmissione.new(
  id_trasmittente: null,
  progressivo_invio: null,
  formato_trasmissione: null,
  codice_destinatario: null,
  contatti_trasmittente: null,
  pec_destinatario: null
)
```

