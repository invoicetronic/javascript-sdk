# invoiceSdk.WebHookHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier. Leave it at 0 for new records as it will be set automatically. | [optional] 
**created** | **Date** | Creation date. It is set automatically. | [optional] 
**version** | **Number** | Row version, for optimistic concurrency. It is set automatically. | [optional] 
**webHookId** | **Number** | Webhook id. | [optional] 
**userId** | **Number** | User id. | [optional] 
**event** | **String** | Event name. | [optional] 
**statusCode** | **Number** | Status code. | [optional] 
**requestBody** | **String** | Webhook request body. | [optional] 
**responseBody** | **String** | Webhook response body. | [optional] 
**dateTime** | **Date** | Date and time of the request. | [optional] 
**success** | **Boolean** | Wether the request was successful. | [optional] [readonly] 


