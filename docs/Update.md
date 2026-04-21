# invoicetronicSdk.Update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. For POST requests, leave it at &#x60;0&#x60; — the server will assign one automatically. For PUT requests, set it to the id of the record you want to update. | [optional] 
**created** | **Date** | Creation date. It is set automatically. | [optional] [readonly] 
**version** | **Number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [readonly] 
**userId** | **Number** | User id. | [optional] 
**companyId** | **Number** | Company id. | [optional] 
**sendId** | **Number** | Send id. This is the id of the sent invoice to which this update refers to. | [optional] 
**lastUpdate** | **Date** | Last update from SDI. | [optional] 
**state** | **String** | State of the document. These are the possible values, as per the SDI documentation: | [optional] 
**description** | **String** | Description for the state. | [optional] 
**messageId** | **String** | SDI message id. | [optional] 
**errors** | [**[Error]**](Error.md) | SDI errors, if any. | [optional] 
**isRead** | **Boolean** | Whether the item has been read at least once. | [optional] 
**send** | [**SendReduced**](SendReduced.md) |  | [optional] 



## Enum: StateEnum


* `Inviato` (value: `"Inviato"`)

* `Consegnato` (value: `"Consegnato"`)

* `NonConsegnato` (value: `"NonConsegnato"`)

* `Scartato` (value: `"Scartato"`)

* `AccettatoDalDestinatario` (value: `"AccettatoDalDestinatario"`)

* `RifiutatoDalDestinatario` (value: `"RifiutatoDalDestinatario"`)

* `ImpossibilitaDiRecapito` (value: `"ImpossibilitaDiRecapito"`)

* `DecorrenzaTermini` (value: `"DecorrenzaTermini"`)

* `AttestazioneTrasmissioneFattura` (value: `"AttestazioneTrasmissioneFattura"`)




