## Learning how to generate and read CSV file with react-csv package

### 1. _First thing first_

to install package/node_modules:

> npm install or yarn install

to add react-csv library, we can use **npm** package manager:

> npm install react-csv --save

to start the app:

> npm start or yarn start

### 2. _How to generate CSV file_

I learn how to generate a csv file using **_CSVLink_** component from **_react-csv_** package. The data that we want to add should be organized first into an **array of arrays** or **array of objects**. Here I stored the data into array of objects, and I created two variables of data, one for the headers and another for the bodies. Here below is my code:

```javascript
import React, { Component, Fragment } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";

import { CSVLink } from "react-csv";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // used for data header
      csvDataHeaders: [
        { label: "firstname", key: "firstname" },
        { label: "lastname", key: "lastname" },
        { label: "email", key: "email" },
      ],
      // used for data body (example 1)
      csvDataBody: [
        {
          firstname: "Mario",
          lastname: ["Duplantier", "Chocolatos", "Croissant"],
          email: "mariobros@google.com",
        },
        {
          firstname: "Alexa",
          lastname: "Sanchez",
          email: "alexa@unitedkindom.com",
        },
        {
          firstname: "Lea",
          lastname: ["Seydoux", "Seaworld", "Seafloor"],
          email: "seydouxlea@yahoo.com",
        },
        {
          firstname: "Peter",
          lastname: ["Crouch", "Cockroach"],
          email: "peter@footballer.com",
        },
        {
          firstname: "Benedict",
          lastname: "Cucumber",
          email: "cucumber@actorhandsom.com",
        },
      ],
      // used for data body (example 2)
      csvDataBody2: [
        {
          firstname: "Toast",
          lastname: "French",
          email: "toastt@google.com",
        },
        {
          firstname: "Coconut",
          lastname: "Delight",
          email: "frissianflag@unitedkindom.com",
        },
        {
          firstname: "Anne",
          lastname: "Hathaway",
          email: "annehathaway@yahoo.com",
        },
        {
          firstname: "George",
          lastname: "Floyd",
          email: "floydgeorge@footballer.com",
        },
        {
          firstname: "Shareloc",
          lastname: "Holmes",
          email: "bakersville@actorhandsom.com",
        },
      ],
    };
  }

  render() {
    const { csvDataHeaders, csvDataBody, csvDataBody2 } = this.state;

    return (
      <Fragment>
        <div style={{ background: "honeyDew" }}>
          <div
            style={{ height: "10vh", background: "lightSteelBlue" }}
            className="d-flex justify-content-center align-items-center"
          >
            <h6 className="m-0 mr-4">
              The next link will generate CSV file. Click the button to download
            </h6>
            <Button variant="success" className="mr-4">
              <CSVLink
                className="text-white"
                filename={"cumaNgetes1.csv"}
                // data header and body1 used here
                headers={csvDataHeaders}
                data={csvDataBody}
              >
                <strong>Download CSV_1</strong>
              </CSVLink>
            </Button>
            <Button variant="success">
              <CSVLink
                className="text-white"
                filename={"cumaNgetes2.csv"}
                // data header and body2 used here
                headers={csvDataHeaders}
                data={csvDataBody2}
              >
                <strong>Download CSV_2</strong>
              </CSVLink>
            </Button>
          </div>
          <hr />
        </div>
      </Fragment>
    );
  }
}

export default App;
```

And here is the result:

###

![example](https://user-images.githubusercontent.com/60772041/84365678-014aa980-abfc-11ea-864b-810d7a02b0f0.gif)


### Welcome to my GitHub! :wink: :wink:
you can see my page at ![github.com/gilangrkun](https://github.com/gilangrkun)
