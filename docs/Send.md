# invoicetronicSdk.Send

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. For POST requests, leave it at &#x60;0&#x60; — the server will assign one automatically. For PUT requests, set it to the id of the record you want to update. | [optional] 
**created** | **Date** | Creation date. It is set automatically. | [optional] [readonly] 
**version** | **Number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [readonly] 
**userId** | **Number** | User id. It is set automatically based on the authenticated user. | [optional] [readonly] 
**companyId** | **Number** | Company id. It is set automatically based on the VAT number extracted from the invoice payload (the sender for &#x60;send&#x60;, the recipient for &#x60;receive&#x60;). | [optional] [readonly] 
**committente** | **String** | VAT number of the Cessionario/Committente (customer). This is automatically set based on the recipient&#39;s VAT number. | [optional] [readonly] 
**prestatore** | **String** | VAT number of the Cedente/Prestatore (vendor). This is automatically set based on the sender&#39;s VAT number. | [optional] [readonly] 
**identifier** | **String** | SDI identifier. This is set by the SDI and is guaranteed to be unique within the SDI system. | [optional] [readonly] 
**fileName** | **String** | Xml file name. If not provided on send, it will be auto-generated. | [optional] 
**format** | **String** | SDI format (FPA12, FPR12, FSM10, ...) | [optional] 
**payload** | **String** | Xml payload. This is the actual xml content, as string. On send, it can be base64 encoded. If it&#39;s not, it will be encoded before sending. It is guaranteed to be encrypted at rest. | 
**lastUpdate** | **Date** | Last update from SDI. | [optional] [readonly] 
**dateSent** | **Date** | When the invoice was sent to SDI. | [optional] [readonly] 
**documents** | [**[DocumentData]**](DocumentData.md) | The invoices included in the payload. This is set by the system, based on the xml content. | [optional] [readonly] 
**encoding** | **String** | Whether the payload is Base64 encoded or a plain XML (text). | [optional] 
**nomeCommittente** | **String** | Business name of the committente (client/buyer) extracted from the invoice XML. | [optional] [readonly] 
**metaData** | **{String: String}** | Optional metadata, as json. | [optional] 
**latestState** | **String** | Current SDI state of the invoice. Reflects the most recent update received from SDI. Null when no update has been received yet. | [optional] [readonly] 
**company** | [**Company**](Company.md) |  | [optional] 



## Enum: EncodingEnum


* `Xml` (value: `"Xml"`)

* `Base64` (value: `"Base64"`)





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




