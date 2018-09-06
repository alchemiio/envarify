# Envarify

### Description

Envarify is a simple utility to verify that all required node environmental variables required for an application to run are defined in the application's current environment.

Undefined environmental variables may not be verified until they are invoked at runtime and may not be immediately apparent to the developer, leading to unexpected crashes or errors. Envarify was created to assist mitigate runtime errors in larger node projects that may rely on many environmental variables. This tool is especially suitable for applications that may be deployed in many different environments during its development cycle.

Envarify will compare variable keys it is configured with, against the variables defined in the application's node environment, logging out the status of each variable. If any of the required environmental variables are not defined the application will be terminated early. Envarify will also alert user of missing optional environmental variables.



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
