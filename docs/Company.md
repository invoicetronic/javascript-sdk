# invoicetronicSdk.Company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. For POST requests, leave it at &#x60;0&#x60; — the server will assign one automatically. For PUT requests, set it to the id of the record you want to update. | [optional] 
**created** | **Date** | Creation date. It is set automatically. | [optional] [readonly] 
**version** | **Number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [readonly] 
**userId** | **Number** | User id. It is set automatically based on the authenticated user. | [optional] [readonly] 
**vat** | **String** | Vat number. Must include the country code. | 
**fiscalCode** | **String** | Fiscal code. In most cases it&#39;s the same as the vat number. | 
**name** | **String** | Name | 


