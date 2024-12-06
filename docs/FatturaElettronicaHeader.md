# Invoice_Sdk::FatturaElettronicaHeader

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dati_trasmissione** | [**DatiTrasmissione**](DatiTrasmissione.md) |  | [optional] |
| **cedente_prestatore** | [**CedentePrestatore**](CedentePrestatore.md) |  | [optional] |
| **rappresentante_fiscale** | [**RappresentanteFiscale**](RappresentanteFiscale.md) |  | [optional] |
| **cessionario_committente** | [**CessionarioCommittente**](CessionarioCommittente.md) |  | [optional] |
| **terzo_intermediario_o_soggetto_emittente** | [**TerzoIntermediarioOSoggettoEmittente**](TerzoIntermediarioOSoggettoEmittente.md) |  | [optional] |
| **soggetto_emittente** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::FatturaElettronicaHeader.new(
  dati_trasmissione: null,
  cedente_prestatore: null,
  rappresentante_fiscale: null,
  cessionario_committente: null,
  terzo_intermediario_o_soggetto_emittente: null,
  soggetto_emittente: null
)
```

