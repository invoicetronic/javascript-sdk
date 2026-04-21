# invoicetronicSdk.SendReduced

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **String** | SDI identifier. | [optional] 
**prestatore** | **String** | VAT number of the Cedente/Prestatore (vendor). | [optional] 
**metaData** | **{String: String}** | Optional metadata, as json. | [optional] 
**documents** | [**[DocumentData]**](DocumentData.md) | The invoices included in the payload. | [optional] 
**dateSent** | **Date** | When the invoice was sent to SDI. | [optional] 
**latestState** | **String** | Current SDI state of the invoice. Reflects the most recent update received from SDI. | [optional] 



## Enum: LatestStateEnum


* `Inviato` (value: `"Inviato"`)

* `Consegnato` (value: `"Consegnato"`)

* `NonConsegnato` (value: `"NonConsegnato"`)

* `Scartato` (value: `"Scartato"`)

* `AccettatoDalDestinatario` (value: `"AccettatoDalDestinatario"`)

* `RifiutatoDalDestinatario` (value: `"RifiutatoDalDestinatario"`)

* `ImpossibilitaDiRecapito` (value: `"ImpossibilitaDiRecapito"`)

* `DecorrenzaTermini` (value: `"DecorrenzaTermini"`)

* `AttestazioneTrasmissioneFattura` (value: `"AttestazioneTrasmissioneFattura"`)




