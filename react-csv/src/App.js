import React, { Component, Fragment } from "react";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";
import { CSVReader } from "react-papaparse";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csvDataHeaders: [
        { label: "firstname", key: "firstname" },
        { label: "lastname", key: "lastname" },
        { label: "email", key: "email" },
      ],
      csvDataBody: [
        {
          firstname: "Mario",
          lastname: "Duplantier",
          email: "mariobros@google.com",
        },
        {
          firstname: "Alexa",
          lastname: "Chung",
          email: "alexa@unitedkindom.com",
        },
        {
          firstname: "Lea",
          lastname: "Seydoux",
          email: "seydouxlea@yahoo.com",
        },
        {
          firstname: "Peter",
          lastname: "Crouch",
          email: "peter@footballer.com",
        },
        {
          firstname: "Benedict",
          lastname: "Cucumber",
          email: "cucumber@actorhandsom.com",
        },
      ],
      csvDataBody2: [
        {
          firstname: "Gojira",
          lastname: "French",
          email: "gojira@google.com",
        },
        {
          firstname: "Chung",
          lastname: "Alexa",
          email: "chung@unitedkindom.com",
        },
        {
          firstname: "Anne",
          lastname: "Hathaway",
          email: "annehathaway@yahoo.com",
        },
        {
          firstname: "George",
          lastname: "floyd",
          email: "floydgeorge@footballer.com",
        },
        {
          firstname: "Sherlock",
          lastname: "Holmes",
          email: "bakersville@actorhandsom.com",
        },
      ],
      DATATESTING: [],
    };
  }

  handleOnDrop = (data) => {
    console.log("dropData", data);
    let dataDATA = [];
    data.forEach((el) => {
      console.log("el ", el);
      dataDATA.push({
        firstname: el.data.firstname,
        lastname: el.data.lastname,
        email: el.data.email,
      });
    });
    this.setState({
      DATATESTING: dataDATA,
    });
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log("removeData", data);
  };

  componentDidMount() {
    console.log(this.state.DATATESTING);
  }

  render() {
    const { csvDataHeaders, csvDataBody, csvDataBody2 } = this.state;

    return (
      <Fragment>
        <div
          style={{ height: "10vh", background: "lightGrey" }}
          className="d-flex justify-content-center align-items-center"
        >
          <h6 className="m-0 mr-4">
            The next link contains data CSV. Click the button to download
          </h6>
          <Button variant="info mr-4">
            <CSVLink
              className="text-white"
              filename={"cumaNgetes1.csv"}
              data={csvDataBody}
              headers={csvDataHeaders}
            >
              Download CSV_1
            </CSVLink>
          </Button>
          <Button variant="info">
            <CSVLink
              className="text-white"
              filename={"cumaNgetes2.csv"}
              data={csvDataBody2}
              headers={csvDataHeaders}
            >
              Download CSV_2
            </CSVLink>
          </Button>
        </div>
        <hr />
        <br />
        <hr />
        <div
          style={{ height: "20vh", background: "lightGrey" }}
          className="d-flex justify-content-center align-items-center"
        >
          <CSVReader
            onDrop={this.handleOnDrop}
            onError={this.handleOnError}
            addRemoveButton
            onRemoveFile={this.handleOnRemoveFile}
            config={{ header: true }}
          >
            <span>Drop CSV file here or click to upload</span>
          </CSVReader>
        </div>
        <hr />
        <br />
        <hr />
        <div
          style={{ height: "40vh", background: "lightGrey" }}
          className="d-flex justify-content-center align-items-center"
        >
          {this.state.DATATESTING.map((el, index) => {
            return (
              <ul key={index}>
                <li>{el.firstname}</li>
                <li>{el.lastname}</li>
                <li>{el.email}</li>
              </ul>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default App;
