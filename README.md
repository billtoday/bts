# bts
bill.today server

> NOTE: This package is not ready yet. Some things do NOT work atm! 

## Status
[![Build Status](https://travis-ci.org/billtoday/bts.svg?branch=master)](https://travis-ci.org/billtoday/bts)

## Usage

### Installation
Install the server:

```shell
npm install bts -g
```
We recommend installing bts server globally since this seperates your config away from bts itself + is easy to update 



### API requests
There is a `billtoday` package available on npm that handles requests and json parsing for you.
In general an API request looks like this:  
`GET /someappdomain.com/userId/`  
Note: You have to specify your long lived bts access token in the header for authentication.

The response will be a json string as body:

```json
{
    "btId":"someInternalBtsId",
    "btUserLink":"https://bill.today/someappdomain.com/someInternalBtsId",
    "userId":"userId",
    "userEmail":"mail@example.com",
    "status":"ok",
    "statusMessage":"Everything ok!",
    "subscribed":true,
    "subscribedUntil":"2030-12-01",
    "plan":"pro"
}
```
| key | description |
|---|---|
| btId | can be used to reference to an account in the bill today server instance |
| btUserLink | just for convenience -> a ready to use link you can use to redirect your user to for fixing payment issues |
| userId| this represents the id that is used by your app to organize accounts |
| userEmail| contains email that the user used at sign up on bill.today |
| status | health of billing account. Can be used to show more detailed status information in your app |
| statusMessage | more detailed text for status might be not ok |
| subscribed | tells you if a plan is active |
| subscribedUntil | tells you the left amount of time purchased |
| plan | tells you the active plan (that the user has paid for) |