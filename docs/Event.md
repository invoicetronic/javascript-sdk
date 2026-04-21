# invoicetronicSdk.Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. For POST requests, leave it at &#x60;0&#x60; — the server will assign one automatically. For PUT requests, set it to the id of the record you want to update. | [optional] 
**created** | **Date** | Creation date. It is set automatically. | [optional] [readonly] 
**version** | **Number** | Row version, for optimistic concurrency. It is set automatically. | [optional] [readonly] 
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
**userAgent** | **String** | User-Agent header from the HTTP request. | [optional] 
**success** | **Boolean** | Whether the request was successful. | [optional] [readonly] 
**query** | **String** | Request query. Only used for internal logging, not sent to webhooks. | [optional] 
**responseBody** | **String** | Response payload. It is guaranteed to be encrypted at rest. | [optional] 


