# invoicetronicSdk.Company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] 
**created** | **Date** | Creation date. It is set automatically. | [optional] 
**version** | **Number** | Row version, for optimistic concurrency. It is set automatically. | [optional] 
**userId** | **Number** | User id. | [optional] 
**vat** | **String** | Vat number. Must include the country code. | 
**fiscalCode** | **String** | Fiscal code. In most cases it&#39;s the same as the vat number. | 
**name** | **String** | Name | 
**counter** | **Number** | Holds the last unique value used to generate a XML filename. This is automatically updated by the system   when a raw XML file is uploaded. Normally, you do not need or want to change this value. | [optional] 


