# bts
bill.today server

> NOTE: This package is not ready yet. Some things do NOT work atm! 

## What is bill.today?
bill.today allows your applications to focus on getting their job done, without having to worry about payment.  
All your app does is running a simple check for the appId against the bill.today server and you get back a json object that tells you only what you need to now:

## Status

## Usage

Install the server:

```shell
npm install bts -g
```
We recommend installing bts server globally since this seperates your config away from bts itself + is easy to update 

to communicate with bill.today server from your own app there is a `billtoday` package on npm available.

```json
{
    "btId":"someInternalBtsId", // can be used to reference to an account in the bill today server instance
    "userId":"userId", // this represents the id that is used by your app to organize accounts
    "userEMail":"mail@example.com", // contains email that the user used at sign up on bill.today
    "status":"ok", // health of billing account. Can be used to
    "statusMessage":"Everything ok!", // more detailed text for status might be not ok
    "subscribed":true, // tells you if a plan is active
    "subscribedUntil":"2030-12-01", // tells you the amount of time purchased
    "plan":"pro" // tells you the active plan (that the user has paid for)
}
```