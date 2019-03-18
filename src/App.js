import React, { Component } from "react";
import "./App.css";
import ReactFileReader from "react-file-reader";
import Papa from "papaparse";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-fresh.css";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridOptions: {
        rowSelection: "single",
        enableFilter: true,
        columnDefs: [
          {
            headerName: "Company Name",
            field: "Company Name",
            suppressFilter: true,
            unSortIcon: true
          },
          {
            headerName: "01/01/19",
            field: "01/01/19",
            suppressFilter: true,
            unSortIcon: true
          },
          {
            headerName: "01/02/19",
            field: "01/02/19",
            suppressFilter: true,
            unSortIcon: true
          },
          {
            headerName: "01/03/19",
            field: "01/03/19",
            suppressFilter: true,
            unSortIcon: true
          },
          {
            headerName: "01/04/19",
            field: "01/04/19",
            suppressFilter: true,
            unSortIcon: true
          },
          {
            headerName: "01/05/19",
            field: "01/05/19",
            suppressFilter: true,
            unSortIcon: true
          },
          {
            headerName: "01/06/19",
            field: "01/06/19",
            suppressFilter: true,
            unSortIcon: true
          },
          {
            headerName: "01/07/19",
            field: "01/07/19",
            suppressFilter: true,
            unSortIcon: true
          }
        ]
      },
      rowData: [],
      selected: {}
    };
  }

  handleFiles = files => {
    console.log(files[0]);
    Papa.parse(files[0], {
      complete: (results, file) => {
        console.log(results);
        this.setState({ rowData: results.data });
      },
      header: true,
      skipEmptyLines: true,
      transform: (value, col) => {
        // if (value === "") {
        //   switch (col) {
        //     case "house":
        //       return "In this world only winter is certain";
        //     case "title":
        //       return "Black and white and grey, all the shades of truth";
        //     case "dateOfBirth":
        //       return "Some secrets are safer kept hidden";
        //     case "culture":
        //       return "I've made many mistakes in my life, but that wasn't one of them.";
        //     default:
        //       return "I will have no part in it.";
        //   }
        // } else if (col === "isMale") {
        //   if (value === "0") {
        //     return "Female";
        //   }
        //   return "male";
        // } else if (col === "isAlive") {
        //   if (value === "0") {
        //     return "False";
        //   }
        //   return "True";
        // } else if (col === "popularity") {
        //   return parseFloat(value) * 100;
        // }
        return value;
      }
    });
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columniApi;
  };

  render() {
    return (
      <div className="App">
        <div className="container" style={{height: "80vh"}}>
          <div>
            <ReactFileReader
              fileTypes={[".csv"]}
              handleFiles={this.handleFiles}
            >
              <button className="btn btn-primary">Upload CSV</button>
            </ReactFileReader>
          </div>
          <div style={{ marginTop: "15px", height: "100%", display: "flex" }}>
            <div
              id="myGrid"
              style={{
                boxSizing: "border-box",
                width: "100%",
                height: "100%"
              }}
              className="ag-theme-fresh"
            >
              <AgGridReact
                onGridReady={this.onGridReady}
                gridOptions={this.state.gridOptions}
                rowData={this.state.rowData}
                rowSelection={this.state.rowSelection}
                enableSorting={true}
              />
            </div>
            <div
              style={{
                height: "100%"
              }}
            >
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
