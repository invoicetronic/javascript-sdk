# Invoice_Sdk::DatiGenerali

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dati_generali_documento** | [**DatiGeneraliDocumento**](DatiGeneraliDocumento.md) |  | [optional] |
| **dati_ordine_acquisto** | [**Array&lt;DatiOrdineAcquisto&gt;**](DatiOrdineAcquisto.md) |  | [optional] |
| **dati_contratto** | [**Array&lt;DatiContratto&gt;**](DatiContratto.md) |  | [optional] |
| **dati_convenzione** | [**Array&lt;DatiConvenzione&gt;**](DatiConvenzione.md) |  | [optional] |
| **dati_ricezione** | [**Array&lt;DatiRicezione&gt;**](DatiRicezione.md) |  | [optional] |
| **dati_fatture_collegate** | [**Array&lt;DatiFattureCollegate&gt;**](DatiFattureCollegate.md) |  | [optional] |
| **dati_sal** | [**Array&lt;DatiSAL&gt;**](DatiSAL.md) |  | [optional] |
| **dati_ddt** | [**Array&lt;DatiDDT&gt;**](DatiDDT.md) |  | [optional] |
| **dati_trasporto** | [**DatiTrasporto**](DatiTrasporto.md) |  | [optional] |
| **fattura_principale** | [**FatturaPrincipale**](FatturaPrincipale.md) |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DatiGenerali.new(
  dati_generali_documento: null,
  dati_ordine_acquisto: null,
  dati_contratto: null,
  dati_convenzione: null,
  dati_ricezione: null,
  dati_fatture_collegate: null,
  dati_sal: null,
  dati_ddt: null,
  dati_trasporto: null,
  fattura_principale: null
)
```

