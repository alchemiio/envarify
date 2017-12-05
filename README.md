# Envarify

### Description

Envarify is a simple utility to verify that all required node environmental variables required for an application to run are defined in the application's current environment.

This utility will compare variable keys passed into it, with the variables defined in the application's node environment, logging out the status of each variable. If any of the required environmental variables are not defined the application will be terminated early.

This tool was created to assist mitigate runtime errors in larger node projects that may rely on many environmental variables. Undefined environmental variables may not be verified until they are invoked at runtime and so they may not be immediately apparent to the developer. This tool is especially suitable for applications that may be deployed in many different environments during its development cycle.



## Install
```
$ npm install envarify --save

```

## Quick Start

Import:
```javascript
const {envarify} = require('envarify');

//ES2015
import envarify from 'envarify';

```

Invoke:
```javascript
//Define your required environmental variable keys, may be imported from remote source or json.
const variables = [
    {key:"EXAMPLE_REQUIRED_ENVIRONMENTAL_VARIABLE", isRequired:true},
    {key:"EXAMPLE_OPTIONAL_ENVIRONMENTAL_VARIABLE", isRequired:false}
    ];

//expects [{key:"string", isRequired:boolean}]
envarify(variables);

//envarify will output results to console.

```
