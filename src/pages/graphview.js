import React, { useState, useEffect } from "react";
import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import Graph from "react-graph-vis";
import queryString from "query-string";
const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    }
};
  
function randomColor() {
    const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
}

const GraphView = () => {

  
    
    const createNode = (x, y) => {
        const color = randomColor();
        setState(({ graph: { nodes, edges }, counter, ...rest }) => {
          const id = counter + 1;
          const from = Math.floor(Math.random() * (counter - 1)) + 1;
          return {
            graph: {
              nodes: [
                ...nodes,
                { id, label: `Node ${id}`, color, x, y }
              ],
              edges: [
                ...edges,
                { from, to: id }
              ]
            },
            counter: id,
            ...rest
          }
        });
    }
    const [state, setState] = useState({
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
            { from: 5, to: 1},
            { from: 6, to: 1 },
            { from: 7, to: 1 },
            { from: 8, to: 1 },
            { from: 9, to: 1 },
            { from: 10, to: 1 },
            { from: 11, to: 1 },
          ]
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
          }
        }
    });
    const { graph, events } = state;



      const [state2, setState2] = useState({
        counter: 5,
        graph2: {
          nodes: [
            { id: 1, label: "10.44.112.139", color: "#e04141" },
            { id: 2, label: "gbprdxdi01", color: "#26d5b0" },
          ],
          edges: [
            { from: 2, to: 1 },
          ]
        },
        events2: {
          select: ({ nodes, edges }) => {
            console.log("Selected nodes:");
            console.log(nodes);
            console.log("Selected edges:");
            console.log(edges);
            alert("Selected node: " + nodes);
          },
          doubleClick: ({ pointer: { canvas } }) => {
            createNode(canvas.x, canvas.y);
          }
        }
    });


    const [did, setdid] = useState(null);
    const [hostname, sethostname] = useState(null);
    const [ip, setip] = useState(null);

    React.useEffect(() => {
      var { did, h, ip } = queryString.parse(window.location.search);
      setdid(did);
      sethostname(h);
      setip(ip);
      if (h) {
        setState2({
          counter: 5,
          graph2: {
            nodes: [
              { id: 1, label: ip, color: "#e04141" },
              { id: 2, label: h, color: "#26d5b0" },
            ],
            edges: [
              { from: 2, to: 1 },
            ]
          },
          events2: {
            select: ({ nodes, edges }) => {
              console.log("Selected nodes:");
              console.log(nodes);
              console.log("Selected edges:");
              console.log(edges);
              alert("Selected node: " + nodes);
            },
            doubleClick: ({ pointer: { canvas } }) => {
              createNode(canvas.x, canvas.y);
            }
          }
        })
      }
    }, []);

    const { graph2, events2 } = state2;
    return (
            <>
                <Head>
                <title>
                Graph View
                </title>
                </Head>
                <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
                >
                    {
                      did ? (
                        <>
                          <Graph graph={state2.graph2} options={options} events={state2.events2} style={{ height: "700px" }} />
                        </>
                      ) : (
                        <Graph graph={graph} options={options} events={events} style={{ height: "700px" }} />
                      )
                    }
                </Box>
            </>
        );
}

GraphView.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default GraphView;
