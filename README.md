[![npm](https://img.shields.io/npm/v/nativescript-sms-inbox.svg)](https://www.npmjs.com/package/nativescript-sms-inbox)
[![npm](https://img.shields.io/npm/dt/nativescript-sms-inbox.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-sms-inbox)

# NativeScript Sms Inbox

A NativeScript plugin to read text messages on android phone inbox using undocumented android api.

## Installation

Install the plugin using the NativeScript CLI tooling

```
tns plugin add nativescript-sms-inbox
```

### Android

To read sms inbox in the phone without user interaction on Android your app must request permission. The following must be in your app's AndroidManifest.xml.

```xml
<uses-permission android:name="android.permission.READ_SMS" />
```

## Usage

To use the phone module you must first `require()` it from your project's `node_modules` directory:

```js
var inbox = require( "nativescript-sms-inbox" );
```

After you have a reference to the module you can then call the available methods.

### Methods
#### getInboxes: fetch all text message in the inbox
##### Parameters
* options: A map of parameters e.g. max (for max results), etc..

For example, the code below gets the last 10 smses from the device inbox:

```js
// my-page.js
var inbox = require( "nativescript-sms-inbox" );
inbox.getInboxes({ max: 10 }).then(function(res) {
    console.log(JSON.stringify(res));
}, function(err) {
    console.log("Error: " + err);
});
```
#### getInboxesFromNumber: Get all text messages in the sms inbox sent by provided fromNumber
##### Parameters
* fromNumber - The number on which to filter SMS inbox messages.
* options - A map of parameters e.g. max (for max results), etc.

For example, the code below gets the last 10 smses from the device inbox sent by the provided fromNumber:

```js
// my-page.js
var inbox = require( "nativescript-sms-inbox" );
inbox.getInboxesFromNumber("0712345678", { max: 10 }).then(function(res) {
    console.log(JSON.stringify(res));
}, function(err) {
    console.log("Error: " + err);
});
```

### TypeScript example

```TypeScript

import * as TNSInbox from 'nativescript-sms-inbox';

// Get the last 10 inbox messages
public getInboxMessages() {    
    TNSInbox.getInboxes({ max: 10 }).then((res) => {
        console.log(JSON.stringify(res));
    }, (err) => {
        console.log('Error: ' + err);
    });
}

// Get the last 10 inbox messages sent by the provided fromNumber
public getInboxMessagesFromNumber(fromNumber: string) { //fromNumber = "0712345678"
    TNSInbox.getInboxesFromNumber(fromNumber, { max: 10 }).then((res) => {
        console.log(JSON.stringify(res));
    }, (err) => {
        console.log('Error: ' + err);
    });
}

```
