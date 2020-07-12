## Learning how to read CSV file with react-papaparse package

### 1. _First thing first_

to install package/node_modules:

> npm install or yarn install

to add react-papaparse library, we can use **npm** or **yarn** package manager:

> npm install react-papaparse --save or yarn add react-papaparse

to start the app:

> npm start or yarn start

### 2. _How to read CSV file_

Continued from my previous learning about **[react-csv](https://github.com/gilangrkun/react-learning/tree/master/react-csv)**, now I want to share my learning about how to read the csv file which I have downloaded before. To read it, I want to use **_CSVReader_** component from **_react-papaparse_** library. The goals of this learning is to display the data inside the csv file into the page. Below here is my learning code (_visit src folder for complete code_):

```javascript
import React, { Component, Fragment } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { CSVLink } from "react-csv";

import { CSVReader } from "react-papaparse";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data header

      // data body 1

      // data body 2

      dataToDisplay: [],
    };
  }

  handleOnDrop = (data) => {
    console.log("dropData", data);
    let dataDATA = [];
    data.forEach((item) => {
      dataDATA.push({
        firstname: item.data.firstname,
        lastname: item.data.lastname,
        email: item.data.email,
      });
    });
    this.setState({
      dataToDisplay: dataDATA,
    });
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log("removeData", data);
  };

  render() {
    const { csvDataHeaders, csvDataBody, csvDataBody2 } = this.state;

    return (
      <Fragment>
        <div style={{ background: "honeyDew" }}>
          // ....previous code
          <div
            style={{ height: "20vh", background: "darkSeaGreen" }}
            className="d-flex justify-content-center align-items-center pt-3 pb-3"
          >
            <CSVReader
              onDrop={this.handleOnDrop}
              onError={this.handleOnError}
              style={{ background: "honeyDew" }}
              addRemoveButton
              onRemoveFile={this.handleOnRemoveFile}
              config={{ header: true }}
            >
              <div
                style={{ width: "200px" }}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <span>
                  <h6>Drop CSV file here</h6>
                </span>
                <span>
                  <h6>or</h6>
                </span>
                <span>
                  <h6>Click to upload</h6>
                </span>
              </div>
            </CSVReader>
          </div>
          <hr />
          <br />
          <hr />
          <div
            style={{ height: "30vh", background: "darkSeaGreen" }}
            className="d-flex justify-content-center align-items-center"
          >
            {this.state.dataToDisplay.map((item) => {
              return (
                <ListGroup>
                  <ListGroupItem
                    variant="light"
                    style={{ width: "300px", height: "3em" }}
                  >
                    {item.firstname}
                  </ListGroupItem>
                  <ListGroupItem
                    variant="light"
                    style={{ width: "300px", height: "3em" }}
                  >
                    {item.lastname}
                  </ListGroupItem>
                  <ListGroupItem
                    variant="info"
                    style={{ width: "300px", height: "3em" }}
                  >
                    {item.email}
                  </ListGroupItem>
                </ListGroup>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
```

And here is the result:

###

![result](https://user-images.githubusercontent.com/60772041/84375635-17f7fd00-ac0a-11ea-875e-1feb12ccb16f.gif)

#### _Bonjour_ from Indonesia,
### :wink: _keep learning and stay hacking!_ :wink:
