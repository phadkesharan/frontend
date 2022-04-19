import React from "react";
import {
  Container,
  Box,
  Grid,
  Button,
  Checkbox,
  Chip,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FilterListIcon from "@mui/icons-material/FilterList";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

import CSVReader from "react-csv-reader";
import Graph from "react-graph-vis";

import { auth } from "../Firebase";
import { useRouter } from "next/router";

const steps = ["Upload CSV", "Column Matching", "Data Visualization"];

var selectedGraph = {
  nodes: [{ id: 1, label: "10.44.112.139", color: "#26d5b0" }],
  edges: [],
};

const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: "#000000",
  },
};

function randomColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  return `#${red}${green}${blue}`;
}

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
};

const uploadcsv = () => {
  const router = useRouter();
  const [csvdata, setcsvdata] = React.useState([{ 0: "0" }]);
  const [permanentcsvdata, setpermanentcsvdata] = React.useState([]);

  const [columnswork, setcolumnswork] = React.useState([]);
  const [notidentifycolumn, setnotidentifycolumn] = React.useState([]);

  const [hostname, sethostname] = React.useState("");
  const [destinationport, setdestinationport] = React.useState("");

  const [showall, setshowall] = React.useState(true);

  const [opendialogcolumn, setOpendialogcolumn] = React.useState(false);
  const handleClickOpendialogcolumn = () => {
    setOpendialogcolumn(true);
  };
  const handleClosedialogcolumn = () => {
    setOpendialogcolumn(false);
  };

  const [openfilter, setopenfilter] = React.useState(false);
  const [openfilter2, setopenfilter2] = React.useState(false);

  const columnName = [
    "date_time_stamp",
    "src_Ip",
    "src_Port",
    "dst_Ip",
    "dst_Port",
    "event_Name",
    "action",
    "device_Ip",
    "protocol",
    "User_name",
  ];

  React.useEffect(() => {
    const finalData = [];
    const fetchData = (column) => {
      fetch("https://regexapi.herokuapp.com/verify/" + String(column), {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          finalData.push(response);

          if (response.match) {
            csvdata.forEach((item) => {
              item[response.name] = item[column];
              delete item[column];
            });
          }
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    };

    if (csvdata[0] != undefined) {
      console.log("csvData og:", csvdata);
      let tempCol = Object.keys(csvdata[0]);

      console.log("csv data: ", csvdata);
      console.log("temp col", tempCol);
      // api call
      tempCol.forEach((col) => {
        fetchData(col);
      });
      console.log("finalCol", finalData);
      setpermanentcsvdata(finalData);
      setcolumnswork(finalData);
    }
  }, [csvdata]);

  const handleClickfilter = (data) => {
    if (data === "destination_port") {
      setopenfilter2(true);
    } else {
      setopenfilter(true);
    }
  };
  const handleClosefilter = () => {
    setopenfilter(false);
  };

  const handleClosefilter2 = () => {
    setopenfilter2(false);
  };

  const CsvData = ({ data, selectedData }) => {
    var date = new Date(20190429);
    return (
      <>
        <TableRow
          key={Date.now()}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="center">
            <input
              className="checkboxstyle"
              onClick={() => selectedData(data)}
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            />
          </TableCell>
          {/* <TableCell align="center">{Date(20190429)}</TableCell> */}
          {columnswork.map((item, index) => {
            const s = String(item.name);
            return item.match ? (
              <TableCell align="center">{data[s]}</TableCell>
            ) : (
              <TableCell align="center">{data[s]}</TableCell>
            );
          })}
          {/* <TableCell align="center">{data.destination_port}</TableCell>
                    <TableCell align="center">{data.hostname}</TableCell>
                    <TableCell align="center">{data.process}</TableCell>
                    <TableCell align="center">{data.source_ip}</TableCell> */}

          {/* <TableCell align="center">{data.destPort}</TableCell>
                    <TableCell align="center">{data.hostName}</TableCell>
                    <TableCell align="center">{data.process}</TableCell>
                    <TableCell align="center">{data.srcIp}</TableCell> */}
        </TableRow>
      </>
    );
  };

  const handleForce = (data, fileInfo) => {
    console.log("data", data);
    console.log("info", fileInfo);
    // var tempnotidentifycolumn = [];
    // // setcolumns(Object.keys(data[0]));
    // var tempColumn = Object.keys(data[0]);

    // console.log("data", data);
    // tempColumn.map((data) => {
    //     if ( data === "source_ip" || data === "Source IP" || data === "SOURCE_IP" || data === "hostname" || data === "host_name" || data === "HostName" || data === "remote_hostname"|| data === "remote_ip" ) {

    //     } else {
    //         tempnotidentifycolumn.push(data);
    //     }
    // })

    // setcolumnswork(tempColumn);
    // setnotidentifycolumn(tempnotidentifycolumn);
    // setcsvdata(data);
    // console.log("csvdata", csvdata);
    // setpermanentcsvdata(data);

    // const finalData =[];
    // const fetchData = (column) =>{
    //     fetch('https://regexapi.herokuapp.com/verify/' + String(column), {
    //         headers: {
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //     })
    //     .then((response)=>response.json())
    //     .then((response)=>{
    //         finalData.push(response);
    //     })
    //     .then((response)=>console.log(response))
    //     .catch((err)=> console.log(err))
    // }

    // let tempCol = Object.keys(csvdata[0]);

    // console.log("temp col", tempCol);
    // // api call
    // tempCol.forEach(col=>{
    //     fetchData(col);
    // })
    // console.log("finalCol", finalData);
    // setpermanentcsvdata(finalData);
    // setcsvdata(finalData);

    setcsvdata(data);
  };

  const checkUser = () => {
    auth.onAuthStateChanged(async function (user) {
      if (user) {
        sessionStorage.setItem("userId", user.uid);
        sessionStorage.setItem("userEmail", user.email);
      } else {
        router.push("/login");
      }
    });
  };

  React.useEffect(() => {
    checkUser();
  }, []);

  const showCsvData = () => {
    var counter = 0;
    let csvdata_top = csvdata.splice(0, 10);
    return (
      <>
        {console.log("csvdata", csvdata)}
        {csvdata_top.map((data) => {
          counter = counter + 1;
          return (
            <CsvData data={data} key={counter} selectedData={selectedData} />
          );
        })}
      </>
    );
  };

  const selectedData = (data) => {
    setshowall(false);
    // var randomColor = Math.floor(Math.random()*16777215).toString(16);
    // var obj = {
    //     id: data.hostname,
    //     label: data.hostname,
    //     color: '#e04141'
    // }

    // var obj2 = {
    //     from: data.hostname,
    //     to: 1
    // }

    // var temp = {
    //     nodes:  [{ id: 1, label: '10.44.112.139', color: "#26d5b0" }, obj],
    //     edges: [obj2]
    // }

    // console.log(temp);
    // setState2({
    //     temp
    // })
  };

  const createNode = (x, y) => {
    const color = randomColor();
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter + 1;
      const from = Math.floor(Math.random() * (counter - 1)) + 1;
      return {
        graph: {
          nodes: [...nodes, { id, label: `Node ${id}`, color, x, y }],
          edges: [...edges, { from, to: id }],
        },
        counter: id,
        ...rest,
      };
    });
  };
  const [state, setState] = React.useState({
    counter: 5,
    graph: {
      nodes: [
        { id: 1, label: "10.44.112.139", color: "#e04141" },
        { id: 2, label: "hvaddc02", color: "#e09c41" },
        { id: 3, label: "gbnvpwsof02", color: "#e0df41" },
        { id: 4, label: "gbnvrwapp17", color: "#7be041" },
        { id: 5, label: "svprdvc01", color: "#d6847e" },
        { id: 6, label: "iwcmsdev", color: "#21e0c9" },
        { id: 7, label: "tls-d167", color: "#51e0c9" },
        { id: 8, label: "tls-d168", color: "#94c1ac" },
        { id: 9, label: "gbprdxwi01", color: "#44c29a" },
        { id: 10, label: "gbprdxaw72", color: "#ee90b9" },
        { id: 11, label: "gbprdxdi01", color: "#26d5b0" },
      ],
      edges: [
        { from: 2, to: 1 },
        { from: 3, to: 1 },
        { from: 4, to: 1 },
        { from: 5, to: 1 },
        { from: 6, to: 1 },
        { from: 7, to: 1 },
        { from: 8, to: 1 },
        { from: 9, to: 1 },
        { from: 10, to: 1 },
        { from: 11, to: 1 },
      ],
    },
    events: {
      select: ({ nodes, edges }) => {
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
        alert("Selected node: " + nodes);
      },
      doubleClick: ({ pointer: { canvas } }) => {
        createNode(canvas.x, canvas.y);
      },
    },
  });

  const [state2, setState2] = React.useState({
    nodes: [
      { id: 1, label: "10.44.112.139", color: "#26d5b0" },
      { id: "hvaddc02", label: "hvaddc02", color: "#c6c6c6" },
    ],
    edges: [{ from: "hvaddc02", to: 1 }],
  });

  const showoptionscolumn = (name) => {
    console.log(name);
    handleClickOpendialogcolumn();
  };

  const applyFilter = () => {
    handleClosefilter();
    if (hostname === "") {
      alert("Filter cannot be empty");
    } else {
      setcsvdata([]);

      var tempArr = csvdata;
      var newtempArr = [];

      tempArr.map((data) => {
        if (data.hostname === hostname) {
          newtempArr.push(data);
        }
      });

      setcsvdata(newtempArr);
      showCsvData();
      setshowall(false);
      sethostname("");
      // console.log(csvdata);
    }
  };

  const applyFilter2 = () => {
    handleClosefilter2();
    if (destinationport === "") {
      alert("Filter cannot be empty");
    } else {
      setcsvdata([]);

      var tempArr = csvdata;
      var newtempArr = [];

      tempArr.map((data) => {
        if (data.destination_port === Number(destinationport)) {
          newtempArr.push(data);
        }
      });

      setcsvdata(newtempArr);
      showCsvData();
      setshowall(false);
      setdestinationport("");
      // console.log(csvdata);
    }
  };

  const showalldata = () => {
    setcsvdata(permanentcsvdata);
    setshowall(true);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Dialog
        open={opendialogcolumn}
        onClose={handleClosedialogcolumn}
        fullWidth
        maxWidth="sm"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Please pick the column
        </DialogTitle>
        <DialogContent>
          {notidentifycolumn.map((data) => {
            return (
              <List>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary={data} />
                  </ListItemButton>
                </ListItem>
              </List>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosedialogcolumn}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openfilter}
        onClose={handleClosefilter}
        fullWidth
        maxWidth="sm"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Filter</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            label="Host name"
            onChange={(e) => sethostname(e.target.value)}
            value={hostname}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosefilter}>Close</Button>
          <Button onClick={applyFilter}>Apply</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openfilter2}
        onClose={handleClosefilter2}
        fullWidth
        maxWidth="sm"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Filter</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            label="Destination Port"
            onChange={(e) => setdestinationport(e.target.value)}
            value={destinationport}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosefilter2}>Close</Button>
          <Button onClick={applyFilter2}>Apply</Button>
        </DialogActions>
      </Dialog>

      <Box sx={{ width: "100%", mt: 10 }}>
        {activeStep === steps.length ? (
          <>
            <Container maxWidth="md" sx={{ mb: 1 }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional(index)) {
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Container>
            <Container maxWidth="xl">
              {csvdata.length === 0 ? (
                <></>
              ) : (
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TableContainer sx={{ mt: 1 }} component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center"></TableCell>

                              <TableCell align="center">Date & Time</TableCell>
                              <TableCell align="center">
                                Destination Port
                              </TableCell>
                              <TableCell align="center">Host name</TableCell>
                              <TableCell align="center">Process</TableCell>
                              <TableCell align="center">Source IP</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>{showCsvData()}</TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    <Grid item xs={6}>
                      {showall ? (
                        <Graph
                          graph={state.graph}
                          options={options}
                          events={state.events}
                          style={{ height: "900px" }}
                        />
                      ) : (
                        // <Graph graph={state2} options={options} events={state.events} style={{ height: "900px" }} />
                        <></>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Container>
          </>
        ) : (
          <>
            <Container maxWidth="md">
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional(index)) {
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === 0 ? (
                <div style={{ marginTop: "50px" }}>
                  <Typography align="center">
                    Please select a CSV File
                  </Typography>
                  <CSVReader
                    cssClass="react-csv-input"
                    onFileLoaded={handleForce}
                    parserOptions={papaparseOptions}
                  />
                </div>
              ) : activeStep === 1 ? (
                <>
                  {columnswork.length === 0 ? (
                    <></>
                  ) : (
                    <Box sx={{ mt: 5 }}>
                      <Typography sx={{ mb: 4 }} align="center">
                        Column Correction
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        {/* {showColumns()} */}

                        {/* {columnswork.map((data) => {
                                                            return (
                                                                <center>
                                                                    {
                                                                        data.match == true ? (
                                                                            <Chip onClick={() => handleClickfilter(data)} color="success" label={data.name} />
                                                                        ) : (
                                                                            <Chip onClick={() => handleClickfilter(data)} color="error" label={data.name} />
                                                                        )
                                                                    }

                                                                </center>
                                                            );
                                                        })} */}
                        <Container maxWidth="xl">
                          {csvdata.length === 0 ? (
                            <></>
                          ) : (
                            <Box sx={{ mt: 2 }}>
                              <Grid container spacing={2}>
                                <Grid item xs={12}>
                                  <TableContainer
                                    sx={{ mt: 1 }}
                                    component={Paper}
                                  >
                                    <Table
                                      sx={{ minWidth: 800 }}
                                      style={{ width: 1200 }}
                                      aria-label="simple table"
                                    >
                                      <TableHead>
                                        <TableRow>
                                          <TableCell align="center"></TableCell>
                                          {/* <TableCell align="center">Date & Time</TableCell> */}

                                          {columnswork.map((item, index) => {
                                            return item.match == true ? (
                                              <TableCell
                                                align="center"
                                                style={{
                                                  backgroundColor: "#34eba1",
                                                }}
                                              >
                                                {item.name}
                                              </TableCell>
                                            ) : (
                                              <TableCell
                                                align="center"
                                                style={{
                                                  backgroundColor: "#d16552",
                                                }}
                                              >
                                                {item.name}
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={item.name}
                                                label={item.name}
                                                onChange={({target})=>{
                                                    let temp_state = [ ...columnswork ];
                                                    let temp_elem = { ...columnswork[index] };
                                                    temp_elem.match = true;
                                                    temp_elem.name = target.value;
                                                    temp_state[index] = temp_elem;
                                                    setcolumnswork(temp_state);
                                                }}
                                                >
                                                    {columnName.map((col)=>{
                                                        return <MenuItem value={col}> {col} </MenuItem>
                                                    })}
                                                </Select>
                                              </TableCell>

                                              // <TableCell align="center" style={{ backgroundColor: '#d16552' }}>{item.name}</TableCell>
                                            );
                                          })}

                                          {/* <TableCell align="center">Destination Port</TableCell>
                                                                                                <TableCell align="center">Host name</TableCell>
                                                                                                <TableCell align="center">Process</TableCell>
                                                                                                <TableCell align="center">Source IP</TableCell> */}
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>{showCsvData()}</TableBody>
                                    </Table>
                                  </TableContainer>
                                </Grid>
                              </Grid>
                            </Box>
                          )}
                        </Container>
                        {/* <Button onClick={showalldata}>
                                                            Show All
                                                        </Button> */}
                      </Stack>
                    </Box>
                  )}
                </>
              ) : null}

              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                {activeStep === 1 ? (
                  <>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button onClick={() => setActiveStep(3)}>
                      Visualize Data
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button onClick={handleNext}>Next</Button>
                  </>
                )}
              </Box>
            </Container>
          </>
        )}
      </Box>
    </div>
  );
};

export default uploadcsv;
