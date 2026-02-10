# invoicetronicSdk.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] 
**created** | **Date** | Creation date. It is set automatically. | [optional] 
**version** | **Number** | Row version, for optimistic concurrency. It is set automatically. | [optional] 
**userId** | **Number** | User id. | [optional] 
**apiKeyId** | **Number** | Api key id. | [optional] 
**companyId** | **Number** | Company id. | [optional] 
**method** | **String** | Request method. | 
**endpoint** | **String** | API endpoint. | 
**apiVersion** | **Number** | Api version. | [optional] 
**statusCode** | **Number** | Status code returned by the API. | [optional] 
**dateTime** | **Date** | Date and time of the request. | [optional] 
**error** | **String** | Response error. | [optional] 
**resourceId** | **Number** | ID of the resource created or modified by this request. | [optional] 
**success** | **Boolean** | Whether the request was successful. | [optional] [readonly] 
**query** | **String** | Request query. Only used for internal logging, not sent to webhooks. | [optional] 
**responseBody** | **String** | Response payload. It is guaranteed to be encrypted at rest. | [optional] 


