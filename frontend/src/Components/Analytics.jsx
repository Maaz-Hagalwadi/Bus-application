// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Container, Row, Col, Card } from 'react-bootstrap';
// // import { Bar, Line } from 'react-chartjs-2';
// // import 'chart.js/auto'; 
// // import { color } from 'chart.js/helpers';

// // const Analytics = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const [busBookingCounts, setBusBookingCounts] = useState({});
// //   const [busWithMostBookings, setBusWithMostBookings] = useState(null);
// //   const [highestBookingCount, setHighestBookingCount] = useState(0);
// //   const [busEarnings, setBusEarnings] = useState({});

// //   useEffect(() => {
// //     const fetchBookings = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:3000/booking'); 
// //         setBookings(response.data);
// //       } catch (error) {
// //         console.error('Error fetching bookings:', error);
// //       }
// //     };
// //     fetchBookings();
// //   }, []);

// //   useEffect(() => {
// //     const calculateBusAnalytics = () => {
// //       const counts = {};
// //       const earnings = {};
// //       bookings.forEach(booking => {
// //         if (!counts[booking.busId]) {
// //           counts[booking.busId] = 0;
// //           earnings[booking.busId] = 0;
// //         }
// //         counts[booking.busId]++;
// //         earnings[booking.busId] += booking.cartTotal;
// //       });
// //       setBusBookingCounts(counts);
// //       setBusEarnings(earnings);

// //       let maxCount = 0;
// //       let busIdWithMostBookings = null;
// //       Object.entries(counts).forEach(([busId, count]) => {
// //         if (count > maxCount) {
// //           maxCount = count;
// //           busIdWithMostBookings = busId;
// //         }
// //       });
// //       setHighestBookingCount(maxCount);
// //       setBusWithMostBookings(busIdWithMostBookings);
// //     };
// //     if (bookings.length > 0) {
// //       calculateBusAnalytics();
// //     }
// //   }, [bookings]);

  
// //   const barChartData = {
// //     labels: Object.keys(busBookingCounts),
// //     datasets: [
// //       {
// //         label: 'Bookings Count',
// //         data: Object.values(busBookingCounts),
// //         backgroundColor: 'rgba(75,192,192,0.4)',
// //         borderColor: 'rgba(75,192,192,1)',
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   const lineChartData = {
// //     labels: Object.keys(busEarnings),
// //     datasets: [
// //       {
// //         label: 'Earnings',
// //         data: Object.values(busEarnings),
// //         borderColor: 'rgba(153,102,255,1)',
// //         backgroundColor: 'rgba(153,102,255,0.2)',
// //         fill: true,
// //       },
// //     ],
// //   };

 
// //   const cardStyle = {
// //     marginBottom: '1rem',
// //     padding: '1rem',
// //     borderRadius: '0.5rem',
// //     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
// //   };

// //   const titleStyle = {
// //     fontSize: '1.5rem',
// //     fontWeight: 'bold',
// //     color:'#ca5252'
// //   };

// //   const textStyle = {
// //     fontSize: '1rem',
// //     color: '#333',
// //   };

// //   const formStyle = {
// //     marginBottom: '1rem',
// //     padding: '1rem',
// //     borderRadius: '0.5rem',
// //     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
// //     backgroundColor: '#f9f9f9',
// //   };

// //   return (
// //     <Container className="mt-4">
// //       <Row>
// //         <Col>
// //           <Card style={cardStyle}>
// //             <Card.Body>
// //               <Card.Title style={{titleStyle,textAlign:'center',color:'#ca5252',fontWeight:'bold'}}>Bus Booking Insights</Card.Title>
// //               <Card.Text style={{textStyle,color:'#ca5252',fontWeight:'bold',textAlign:'center'}}>Bus with Maximum Bookings : {highestBookingCount}</Card.Text>
// //               <Card.Text style={{textStyle,color:'#ca5252',fontWeight:'bold',textAlign:'center'}}>Most Booked Bus : {busWithMostBookings}</Card.Text>
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //       <Row className="mt-4">
// //         <Col md={6}>
// //           <Card style={cardStyle}>
// //             <Card.Body>
// //               <Card.Title style={titleStyle}>Number of Bookings for Each Bus</Card.Title>
// //               <Bar data={barChartData} options={{ responsive: true }} />
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //         <Col md={6}>
// //           <Card style={cardStyle}>
// //             <Card.Body>
// //               <Card.Title style={titleStyle}>Bus Earnings Over Time</Card.Title>
// //               <Line data={lineChartData} options={{ responsive: true }} />
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //       <Row className="mt-4">
// //         {Object.keys(busBookingCounts).map(busId => (
// //           <Col md={4} key={busId}>
// //             <Card style={formStyle}>
// //               <Card.Body>
// //                 <Card.Title style={titleStyle}>Bus ID: {busId}</Card.Title>
// //                 <Card.Text style={textStyle}>Booked Count: {busBookingCounts[busId]}</Card.Text>
// //                 <Card.Text style={textStyle}>Total Earnings: ₹{busEarnings[busId]?.toFixed(2) || '0.00'}</Card.Text>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Analytics;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Container, Row, Col, Card } from 'react-bootstrap';
// // import { Bar, Line } from 'react-chartjs-2';
// // import 'chart.js/auto';

// // const Analytics = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const [busBookingCounts, setBusBookingCounts] = useState({});
// //   const [busWithMostBookings, setBusWithMostBookings] = useState(null);
// //   const [highestBookingCount, setHighestBookingCount] = useState(0);
// //   const [busEarnings, setBusEarnings] = useState({});
// //   const [busNames, setBusNames] = useState({}); // New state for bus names

// //   useEffect(() => {
// //     const fetchBookings = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:3000/booking');
// //         setBookings(response.data);
        
// //         // Fetch bus names for each unique busId
// //         const uniqueBusIds = [...new Set(response.data.map(booking => booking.busId))];
// //         const busNameRequests = uniqueBusIds.map(busId => 
// //           axios.get(`http://localhost:3000/bus/${busId}`).then(res => ({ busId, busName: res.data.name }))
// //         );
// //         const busNameResponses = await Promise.all(busNameRequests);
// //         const busNamesMap = busNameResponses.reduce((acc, { busId, busName }) => {
// //           acc[busId] = busName;
// //           return acc;
// //         }, {});
// //         setBusNames(busNamesMap);

// //       } catch (error) {
// //         console.error('Error fetching bookings:', error);
// //       }
// //     };
// //     fetchBookings();
// //   }, []);

// //   useEffect(() => {
// //     const calculateBusAnalytics = () => {
// //       const counts = {};
// //       const earnings = {};
// //       bookings.forEach(booking => {
// //         if (!counts[booking.busId]) {
// //           counts[booking.busId] = 0;
// //           earnings[booking.busId] = 0;
// //         }
// //         counts[booking.busId]++;
// //         earnings[booking.busId] += booking.cartTotal;
// //       });
// //       setBusBookingCounts(counts);
// //       setBusEarnings(earnings);

// //       let maxCount = 0;
// //       let busIdWithMostBookings = null;
// //       Object.entries(counts).forEach(([busId, count]) => {
// //         if (count > maxCount) {
// //           maxCount = count;
// //           busIdWithMostBookings = busId;
// //         }
// //       });
// //       setHighestBookingCount(maxCount);
// //       setBusWithMostBookings(busIdWithMostBookings);
// //     };
// //     if (bookings.length > 0) {
// //       calculateBusAnalytics();
// //     }
// //   }, [bookings]);

// //   const barChartData = {
// //     labels: Object.keys(busBookingCounts).map(busId => busNames[busId] || busId),
// //     datasets: [
// //       {
// //         label: 'Bookings Count',
// //         data: Object.values(busBookingCounts),
// //         backgroundColor: 'rgba(75,192,192,0.4)',
// //         borderColor: 'rgba(75,192,192,1)',
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   const lineChartData = {
// //     labels: Object.keys(busEarnings).map(busId => busNames[busId] || busId),
// //     datasets: [
// //       {
// //         label: 'Earnings',
// //         data: Object.values(busEarnings),
// //         borderColor: 'rgba(153,102,255,1)',
// //         backgroundColor: 'rgba(153,102,255,0.2)',
// //         fill: true,
// //       },
// //     ],
// //   };

// //   const cardStyle = {
// //     marginBottom: '1rem',
// //     padding: '1rem',
// //     borderRadius: '0.5rem',
// //     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
// //   };

// //   const titleStyle = {
// //     fontSize: '1.5rem',
// //     fontWeight: 'bold',
// //     color:'#ca5252'
// //   };

// //   const textStyle = {
// //     fontSize: '1rem',
// //     color: '#333',
// //   };

// //   const formStyle = {
// //     marginBottom: '1rem',
// //     padding: '1rem',
// //     borderRadius: '0.5rem',
// //     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
// //     backgroundColor: '#f9f9f9',
// //   };

// //   return (
// //     <Container className="mt-4">
// //       <Row>
// //         <Col>
// //           <Card style={cardStyle}>
// //             <Card.Body>
// //               <Card.Title style={titleStyle}>Bus Booking Insights</Card.Title>
// //               <Card.Text style={textStyle}>
// //                 Bus with Maximum Bookings: {busNames[busWithMostBookings] || busWithMostBookings} ({highestBookingCount})
// //               </Card.Text>
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //       <Row className="mt-4">
// //         <Col md={6}>
// //           <Card style={cardStyle}>
// //             <Card.Body>
// //               <Card.Title style={titleStyle}>Number of Bookings for Each Bus</Card.Title>
// //               <Bar data={barChartData} options={{ responsive: true }} />
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //         <Col md={6}>
// //           <Card style={cardStyle}>
// //             <Card.Body>
// //               <Card.Title style={titleStyle}>Bus Earnings Over Time</Card.Title>
// //               <Line data={lineChartData} options={{ responsive: true }} />
// //             </Card.Body>
// //           </Card>
// //         </Col>
// //       </Row>
// //       <Row className="mt-4">
// //         {Object.keys(busBookingCounts).map(busId => (
// //           <Col md={4} key={busId}>
// //             <Card style={formStyle}>
// //               <Card.Body>
// //                 <Card.Title style={titleStyle}>Bus ID: {busNames[busId] || busId}</Card.Title>
// //                 <Card.Text style={textStyle}>Booked Count: {busBookingCounts[busId]}</Card.Text>
// //                 <Card.Text style={textStyle}>Total Earnings: ₹{busEarnings[busId]?.toFixed(2) || '0.00'}</Card.Text>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default Analytics;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Bar, Line } from 'react-chartjs-2';
// import 'chart.js/auto'; 

// const Analytics = () => {
//   const [bookings, setBookings] = useState([]);
//   const [busBookingCounts, setBusBookingCounts] = useState({});
//   const [busWithMostBookings, setBusWithMostBookings] = useState(null);
//   const [highestBookingCount, setHighestBookingCount] = useState(0);
//   const [busEarnings, setBusEarnings] = useState({});
//   const [busNames, setBusNames] = useState({});

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/booking');
//         setBookings(response.data);

//         // Extract unique bus IDs from bookings
//         const busIds = [...new Set(response.data.map(booking => booking.busId))];
//         fetchBusNames(busIds);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     const fetchBusNames = async (busIds) => {
//       try {
//         const busNamePromises = busIds.map(async (busId) => {
//           const response = await axios.get(`http://localhost:3000/bus/${busId}`);
//           return { busId, busName: response.data.busName };
//         });
//         const busNameResults = await Promise.all(busNamePromises);
//         const busNameMap = busNameResults.reduce((acc, { busId, busName }) => {
//           acc[busId] = busName;
//           console.log(busName)
//           return acc;
//         }, {});
//         setBusNames(busNameMap);
//       } catch (error) {
//         console.error('Error fetching bus names:', error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   useEffect(() => {
//     const calculateBusAnalytics = () => {
//       const counts = {};
//       const earnings = {};
//       bookings.forEach(booking => {
//         if (!counts[booking.busId]) {
//           counts[booking.busId] = 0;
//           earnings[booking.busId] = 0;
//         }
//         counts[booking.busId]++;
//         earnings[booking.busId] += booking.cartTotal;
//       });
//       setBusBookingCounts(counts);
//       setBusEarnings(earnings);

//       let maxCount = 0;
//       let busIdWithMostBookings = null;
//       Object.entries(counts).forEach(([busId, count]) => {
//         if (count > maxCount) {
//           maxCount = count;
//           busIdWithMostBookings = busId;
//         }
//       });
//       setHighestBookingCount(maxCount);
//       setBusWithMostBookings(busIdWithMostBookings);
//     };

//     if (bookings.length > 0) {
//       calculateBusAnalytics();
//     }
//   }, [bookings]);

//   const barChartData = {
//     labels: Object.keys(busBookingCounts).map(busId => busNames[busId] || 'Loading...'),
//     datasets: [
//       {
//         label: 'Bookings Count',
//         data: Object.values(busBookingCounts),
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const lineChartData = {
//     labels: Object.keys(busEarnings).map(busId => busNames[busId] || 'Loading...'),
//     datasets: [
//       {
//         label: 'Earnings',
//         data: Object.values(busEarnings),
//         borderColor: 'rgba(153,102,255,1)',
//         backgroundColor: 'rgba(153,102,255,0.2)',
//         fill: true,
//       },
//     ],
//   };

//   const cardStyle = {
//     marginBottom: '1rem',
//     padding: '1rem',
//     borderRadius: '0.5rem',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//   };

//   const titleStyle = {
//     fontSize: '1.5rem',
//     fontWeight: 'bold',
//     color: '#ca5252',
//   };

//   const textStyle = {
//     fontSize: '1rem',
//     color: '#333',
//   };

//   const formStyle = {
//     marginBottom: '1rem',
//     padding: '1rem',
//     borderRadius: '0.5rem',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     backgroundColor: '#f9f9f9',
//   };

//   return (
//     <Container className="mt-4">
//       <Row>
//         <Col>
//           <Card style={cardStyle}>
//             <Card.Body>
//               <Card.Title style={titleStyle}>Bus Booking Insights</Card.Title>
//               <Card.Text style={textStyle}>
//                 Bus with Maximum Bookings : {busWithMostBookings ? busNames[busWithMostBookings] : 'Loading...'}
//               </Card.Text>
//               <Card.Text style={textStyle}>
//                 Most Booked Bus : {busWithMostBookings ? busNames[busWithMostBookings] : 'Loading...'}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col md={6}>
//           <Card style={cardStyle}>
//             <Card.Body>
//               <Card.Title style={titleStyle}>Number of Bookings for Each Bus</Card.Title>
//               <Bar data={barChartData} options={{ responsive: true }} />
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card style={cardStyle}>
//             <Card.Body>
//               <Card.Title style={titleStyle}>Bus Earnings Over Time</Card.Title>
//               <Line data={lineChartData} options={{ responsive: true }} />
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         {Object.keys(busBookingCounts).map(busId => (
//           <Col md={4} key={busId}>
//             <Card style={formStyle}>
//               <Card.Body>
//                 <Card.Title style={titleStyle}>Bus: {busNames[busId] || 'Loading...'}</Card.Title>
//                 <Card.Text style={textStyle}>Booked Count: {busBookingCounts[busId]}</Card.Text>
//                 <Card.Text style={textStyle}>Total Earnings: ₹{busEarnings[busId]?.toFixed(2) || '0.00'}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Analytics;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Analytics = () => {
  const [bookings, setBookings] = useState([]);
  const [busNames, setBusNames] = useState({});
  const [busBookingCounts, setBusBookingCounts] = useState({});
  const [busWithMostBookings, setBusWithMostBookings] = useState(null);
  const [highestBookingCount, setHighestBookingCount] = useState(0);
  const [busEarnings, setBusEarnings] = useState({});

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3000/booking');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  useEffect(() => {
    const fetchBusNames = async () => {
      try {
        const response = await axios.get('http://localhost:3000/bus');
        const buses = response.data;
        const names = {};
        buses.forEach(bus => {
          names[bus.busId] = bus.busName;
        });
        setBusNames(names);
      } catch (error) {
        console.error('Error fetching bus names:', error);
      }
    };
    fetchBusNames();
  }, []);

  useEffect(() => {
    const calculateBusAnalytics = () => {
      const counts = {};
      const earnings = {};
      bookings.forEach(booking => {
        if (!counts[booking.busId]) {
          counts[booking.busId] = 0;
          earnings[booking.busId] = 0;
        }
        counts[booking.busId]++;
        earnings[booking.busId] += booking.cartTotal;
      });
      setBusBookingCounts(counts);
      setBusEarnings(earnings);

      let maxCount = 0;
      let busIdWithMostBookings = null;
      Object.entries(counts).forEach(([busId, count]) => {
        if (count > maxCount) {
          maxCount = count;
          busIdWithMostBookings = busId;
        }
      });
      setHighestBookingCount(maxCount);
      setBusWithMostBookings(busIdWithMostBookings);
    };
    if (bookings.length > 0) {
      calculateBusAnalytics();
    }
  }, [bookings]);

  const barChartData = {
    labels: Object.keys(busBookingCounts).map(busId => busNames[busId] || busId),
    datasets: [
      {
        label: 'Bookings Count',
        data: Object.values(busBookingCounts),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: Object.keys(busEarnings).map(busId => busNames[busId] || busId),
    datasets: [
      {
        label: 'Earnings',
        data: Object.values(busEarnings),
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: true,
      },
    ],
  };

  const cardStyle = {
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ca5252',
  };

  const textStyle = {
    fontSize: '1rem',
    color: '#333',
  };

  const formStyle = {
    marginBottom: '1rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title style={{ ...titleStyle, textAlign: 'center' }}>Bus Booking Insights</Card.Title>
              <Card.Text style={{ ...textStyle, color: '#ca5252', fontWeight: 'bold', textAlign: 'center' }}>
                Bus with Maximum Bookings : {highestBookingCount}
              </Card.Text>
              <Card.Text style={{ ...textStyle, color: '#ca5252', fontWeight: 'bold', textAlign: 'center' }}>
                Most Booked Bus : {busNames[busWithMostBookings] || busWithMostBookings}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title style={titleStyle}>Number of Bookings for Each Bus</Card.Title>
              <Bar data={barChartData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title style={titleStyle}>Bus Earnings Over Time</Card.Title>
              <Line data={lineChartData} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        {Object.keys(busBookingCounts).map(busId => (
          <Col md={4} key={busId}>
            <Card style={formStyle}>
              <Card.Body>
                <Card.Title style={titleStyle}> {busNames[busId] || busId}</Card.Title>
                <Card.Text style={textStyle}>Booked Count: {busBookingCounts[busId]}</Card.Text>
                <Card.Text style={textStyle}>Total Earnings: ₹{busEarnings[busId]?.toFixed(2) || '0.00'}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Analytics;
