# Invoice_Sdk::DettaglioPagamento

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **beneficiario** | **String** |  | [optional] |
| **modalita_pagamento** | **String** |  | [optional] |
| **data_riferimento_termini_pagamento** | **Time** |  | [optional] |
| **giorni_termini_pagamento** | **Integer** |  | [optional] |
| **data_scadenza_pagamento** | **Time** |  | [optional] |
| **importo_pagamento** | **Float** |  | [optional] |
| **cod_ufficio_postale** | **String** |  | [optional] |
| **cognome_quietanzante** | **String** |  | [optional] |
| **nome_quietanzante** | **String** |  | [optional] |
| **cf_quietanzante** | **String** |  | [optional] |
| **titolo_quietanzante** | **String** |  | [optional] |
| **istituto_finanziario** | **String** |  | [optional] |
| **iban** | **String** |  | [optional] |
| **abi** | **String** |  | [optional] |
| **cab** | **String** |  | [optional] |
| **bic** | **String** |  | [optional] |
| **sconto_pagamento_anticipato** | **Float** |  | [optional] |
| **data_limite_pagamento_anticipato** | **Time** |  | [optional] |
| **penalita_pagamenti_ritardati** | **Float** |  | [optional] |
| **data_decorrenza_penale** | **Time** |  | [optional] |
| **codice_pagamento** | **String** |  | [optional] |

## Example

```ruby
require 'invoicetronic_invoice_sdk'

instance = Invoice_Sdk::DettaglioPagamento.new(
  beneficiario: null,
  modalita_pagamento: null,
  data_riferimento_termini_pagamento: null,
  giorni_termini_pagamento: null,
  data_scadenza_pagamento: null,
  importo_pagamento: null,
  cod_ufficio_postale: null,
  cognome_quietanzante: null,
  nome_quietanzante: null,
  cf_quietanzante: null,
  titolo_quietanzante: null,
  istituto_finanziario: null,
  iban: null,
  abi: null,
  cab: null,
  bic: null,
  sconto_pagamento_anticipato: null,
  data_limite_pagamento_anticipato: null,
  penalita_pagamenti_ritardati: null,
  data_decorrenza_penale: null,
  codice_pagamento: null
)
```

