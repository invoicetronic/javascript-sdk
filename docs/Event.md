# invoicetronic-invoice-sdk.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] 
**created** | **Date** | Creation date. It is set automatically. | [optional] 
**version** | **Number** | Row version, for optimistic concurrency. It is set automatically. | [optional] 
**companyId** | **Number** | Company id. | [optional] 
**method** | **String** | Request method. | [optional] 
**query** | **String** | Request query. | [optional] 
**endpoint** | **String** | API endpoint. | [optional] 
**apiVersion** | **Number** | Api version. | [optional] 
**statusCode** | **Number** | Status code returned by the API. | [optional] 
**dateTime** | **Date** | Date and time of the request. | [optional] 
**error** | **String** | Response error. | [optional] 
**requestBody** | **String** | Request payload. It is guaranteed to be cyphered at rest. | [optional] 
**responseBody** | **String** | Response payload. It is guaranteed to be cyphered at rest. | [optional] 
**success** | **Boolean** | Wether the request was successful. | [optional] [readonly] 
**userId** | **Number** | User id. | [optional] 
**apiKeyId** | **Number** | Api key id. | [optional] 


