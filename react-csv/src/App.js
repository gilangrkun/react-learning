import React, { Component, Fragment } from "react";
import { CSVLink } from "react-csv";
import { Button, ListGroup, ListGroupItem, Col } from "react-bootstrap";
import { CSVReader } from "react-papaparse";
import { Link } from "react-router-dom";

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
          lastname: ["Duplantier", "Chocolatos", "Croissant"],
          email: "mariobros@google.com",
        },
        {
          firstname: "Alexa",
          lastname: "Chung",
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
      DATATESTING: [
        {
          firstname: "",
          lastname: "",
          email: "",
        },
        {
          firstname: "",
          lastname: "",
          email: "",
        },
        {
          firstname: "",
          lastname: "",
          email: "",
        },
        {
          firstname: "",
          lastname: "",
          email: "",
        },
        {
          firstname: "",
          lastname: "",
          email: "",
        },
      ],
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
    this.handleReset();
  };

  componentDidMount() {
    console.log(this.state.DATATESTING);
  }

  handleReset = () => {
    let dataReset = [
      {
        firstname: "",
        lastname: "",
        email: "",
      },
      {
        firstname: "",
        lastname: "",
        email: "",
      },
      {
        firstname: "",
        lastname: "",
        email: "",
      },
      {
        firstname: "",
        lastname: "",
        email: "",
      },
      {
        firstname: "",
        lastname: "",
        email: "",
      },
    ];
    this.setState({ DATATESTING: dataReset });
  };

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
              The next link contains data CSV. Click the button to download
            </h6>
            <Button variant="success" className="mr-4">
              <CSVLink
                className="text-white"
                filename={"cumaNgetes1.csv"}
                data={csvDataBody}
                headers={csvDataHeaders}
              >
                <strong>Download CSV_1</strong>
              </CSVLink>
            </Button>
            <Button variant="success">
              <CSVLink
                className="text-white"
                filename={"cumaNgetes2.csv"}
                data={csvDataBody2}
                headers={csvDataHeaders}
              >
                <strong>Download CSV_2</strong>
              </CSVLink>
            </Button>
          </div>
          <hr />
          <br />
          <hr />
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
            {this.state.DATATESTING.map((el) => {
              return (
                <ListGroup>
                  <ListGroupItem
                    variant="light"
                    style={{ width: "300px", height: "3em" }}
                  >
                    {el.firstname}
                  </ListGroupItem>
                  <ListGroupItem
                    variant="light"
                    style={{ width: "300px", height: "3em" }}
                  >
                    {el.lastname}
                  </ListGroupItem>
                  <ListGroupItem
                    variant="info"
                    style={{ width: "300px", height: "3em" }}
                  >
                    {el.email}
                  </ListGroupItem>
                </ListGroup>
              );
            })}
          </div>
          <hr />
          <br />
          <hr />
          <div
            style={{ height: "5vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Button variant="secondary" size="lg">
              <Link className="text-white" to="/">
                <strong>Back</strong>
              </Link>
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
