# invoiceSdk.Send

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] 
**created** | **Date** | Creation date. It is set automatically. | [optional] 
**version** | **Number** | Row version, for optimistic concurrency. It is set automatically. | [optional] 
**userId** | **Number** | User id. | [optional] 
**companyId** | **Number** | Company id. On send, this is the sender and must be set in advance. On receive, it will be  automatically set based on the recipient&#39;s VAT number. If a matching company is not found, the invoice will be rejected until the company is created. | [optional] 
**committente** | **String** | VAT number of the Cessionario/Committente (customer). This is automatically set based on the recipient&#39;s VAT number. | [optional] 
**prestatore** | **String** | VAT number of the Cedente/Prestatore (vendor). This is automatically set based on the sender&#39;s VAT number. | [optional] 
**identifier** | **String** | SDI identifier. This is set by the SDI and is guaranted to be unique within the SDI system. | [optional] 
**fileName** | **String** | Xml file name. | [optional] 
**format** | **String** | SDI format (FPA12, FPR12, FSM10, ...) | [optional] 
**payload** | **String** | Xml payloaad. This is the actual xml content, as string. On send, it can be base64 encoded. If it&#39;s not, it will be encoded before sending. It is guaranteed to be cyphered at rest. | [optional] 
**lastUpdate** | **Date** | Last update from SDI. | [optional] 
**dateSent** | **Date** | When the invoice was sent to SDI. | [optional] 
**documents** | [**[DocumentData]**](DocumentData.md) | The invoices included in the payload. This is set by the system, based on the xml content. | [optional] 
**metaData** | **{String: String}** | Optional metadata, as json. | [optional] 


