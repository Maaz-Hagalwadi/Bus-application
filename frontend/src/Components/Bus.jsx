// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { faWifi, faPlug, faTv, faSnowflake, faToilet ,faClock } from '@fortawesome/free-solid-svg-icons';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// // import WelcomeMessage from './WelcomeMessaage';
// import { faCog } from '@fortawesome/free-solid-svg-icons';
// import { Dropdown } from 'react-bootstrap'; 



// import 'leaflet/dist/leaflet.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faCalendarAlt, faRupeeSign, faBus } from '@fortawesome/free-solid-svg-icons';
// import MapPage from './BusMap';
// import { MapContainer } from 'react-leaflet';



// const API_URL = 'http://localhost:3000'; 

// const Bus = () => {

//   const handleSettingsClick = (eventKey) => {
//     switch(eventKey) {
//       case 'my-ticket':
//         navigate('/seat');
//         break;
//       case 'refund-policy':
//         navigate('');
//         break;
      
//       case 'change travel date':
//         navigate('');
//         break;
//       case 'cancel-ticket':
//           navigate('/seat');
//           break;
//       case 'help':
//           navigate('');
//           break;
     
//       case 'logout':
//           navigate('/login');
//           break;
//       default:
//         break;
//     }
//   };
  
//   const getCurrentDate = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, '0');
//     const day = String(today.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };



//   const [pickup, setPickup] = useState('');
//   const [dropoff, setDropoff] = useState('');
//   const [date, setDate] = useState(getCurrentDate());
//   const [buses, setBuses] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [noBusesFound, setNoBusesFound] = useState(false);
//   const [isSearchPerformed, setIsSearchPerformed] = useState(false);

//   const navigate = useNavigate();

//   const fetchAllBuses = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get(`${API_URL}/bus`);
//       setBuses(response.data);
//     } catch (error) {
//       setError('Error fetching bus data. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllBuses();
//   }, []);

//   const handleSearch = async () => {
//     setIsLoading(true);
//     setError(null);
//     setNoBusesFound(false);
//     setBuses([]);
//     setIsSearchPerformed(true);

//     try {
//         const response = await axios.get(`${API_URL}/bus`, {
//             params: { from: pickup, to: dropoff, date }
//         });

//         if (response.data.length === 0) {
//             setNoBusesFound(true);
//         } else {
//             const busesWithFare = response.data.map(bus => ({
//                 ...bus,
//                 fare: bus.totalFare
//             }));
//             setBuses(busesWithFare);
//             setNoBusesFound(false);
//         }
//     } catch (error) {
//         setError('Error fetching bus data. Please try again.');
//     } finally {
//         setIsLoading(false);
//     }
// };


//   const handleBookNow = (bus) => {
//     navigate('/bus-details', {
//       state: {
//         busId: bus.busId,
//         from: isSearchPerformed ? pickup : bus.Route.from,
//         to: isSearchPerformed ? dropoff : bus.Route.to,
//         fare: bus.fare,
//         date: isSearchPerformed ? date : getCurrentDate()
//       }
//     });
//   };

  

//   const toggleRoutesDisplay = (busId) => {
//     const updatedBuses = buses.map(bus => {
//       if (bus.busId === busId) {
//         return {
//           ...bus,
//           showRoutes: !bus.showRoutes
//         };
//       }
//       return bus;
//     });
//     setBuses(updatedBuses);
//   };

//   return (
    
//     <div className="container d-flex flex-column align-items-center" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
     
     

// <section className="search-section" style={{ backgroundColor: '#ca5252', color: 'white', borderRadius: '10px', padding: '30px', width: '100%', maxWidth: '1200px', height: '250px', marginBottom: '20px' }}>
//   <div className="row justify-content-center mb-4">
    
//     <div className="col-md-4">
//       <label htmlFor="pickup" className="form-label" style={{ color: 'white', fontWeight: 'bold' }}>
//         <FontAwesomeIcon icon={faMapMarkerAlt} /> From
//       </label>
//       <input
//         type="text"
//         id="pickup"
//         className="form-control"
//         value={pickup}
//         onChange={(e) => setPickup(e.target.value)}
//         placeholder="Enter pickup location"
//         style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#333', borderRadius: '5px', border: '1px solid #ccc', padding: '10px' }}
//       />
//     </div>
    
//     <div className="col-md-4">
//       <label htmlFor="dropoff" className="form-label" style={{ color: 'white', fontWeight: 'bold' }}>
//         <FontAwesomeIcon icon={faMapMarkerAlt} /> To
//       </label>
//       <input
//         type="text"
//         id="dropoff"
//         className="form-control"
//         value={dropoff}
//         onChange={(e) => setDropoff(e.target.value)}
//         placeholder="Enter drop off location"
//         style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#333', borderRadius: '5px', border: '1px solid #ccc', padding: '10px' }}
//       />
//     </div>
    
//     <div className="col-md-4">
//       <label htmlFor="datepicker" className="form-label" style={{ color: 'white', fontWeight: 'bold' }}>
//         <FontAwesomeIcon icon={faCalendarAlt} /> Select Date
//       </label>
//       <input
//         type="date"
//         id="datepicker"
//         className="form-control"
//         value={date}
//         min={getCurrentDate()}
//         onChange={(e) => setDate(e.target.value)}
//         style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#333', borderRadius: '5px', border: '1px solid #ccc', padding: '10px' }}
//       />
//     </div>
    
//     <div className="col-md-12 mt-5  d-flex justify-content-center">
//       <button
//         type="button"
//         onClick={handleSearch}
//         disabled={isLoading}
//         className="btn btn-primary btn-block"
//         style={{ backgroundColor: '#1f2e2e', color: '#fff', borderRadius: '5px', padding: '10px', fontWeight: 'bold', border: 'none',width:'200px' }}
//       >
//         {isLoading ? 'Searching...' : 'Search'}
//       </button>
//     </div>
    
//   </div>
// </section>


//   <hr />
//   {/* <div style={{width:'70%',height:'10%'
//   }}>
//     */}
//      {/* Other bus details and components */}


//      <div style={{width:'1200px',border:'2px solid red',maxWidth:'1500px', marginBottom: '30px', overflow: 'hidden'}}> 
      
//      <MapContainer>
//         <MapPage from={pickup} to={dropoff} />
//       </MapContainer>
//       </div>
   
//  <section className="results-section" style={{ width: '100%', maxWidth: '1200px', marginTop: '0' }}>
//         {error && <div className="alert alert-danger">{error}</div>}

//         {noBusesFound && !isLoading && buses.length === 0 && (
//         <div className="alert alert-warning">No buses available for the selected criteria.</div>
//     )}

// {!noBusesFound && buses.length > 0 && (
//         <div className="row justify-content-center">
//             {buses.map(bus => (
//                 <div key={bus.busId} className="col-md-12 mb-4">
//                     {/* Bus card component */}
//                 </div>
//             ))}
//         </div>
//     )}
//       {!isLoading && buses.length === 0 && !noBusesFound && (
//         <div className="row">
//             <div className="col">
//                 <p className="text-center">No buses available.</p>
//             </div>
//         </div>
//     )}
//        {buses.length > 0 && (
//           <div className="row justify-content-center">
//             {buses.map(bus => (
//               <div key={bus.busId} className="col-md-12 mb-4">
//                 <div className="card h-100 d-flex flex-column" style={{ backgroundColor: '#fff', border: '1px solid #ca5252', borderRadius: '10px', padding: '25px' }}>
//                   <div className="card-body" >
//                     <div className="d-flex justify-content-between mb-3">
//                       <h5 className="card-title" style={{ color: '#ca5252',fontWeight:'bold',fontSize:'32px' }}>{bus.busName}</h5>
//                       <div style={{color:'#ca5252',fontSize:'20px',fontWeight:'bold'}}>
//                       {isSearchPerformed ? (
//                           <div > {pickup} - {dropoff}</div>
//                         ) : (
//                           <div> {bus.Route.from} - {bus.Route.to}</div>
//                         )}
//                         </div>

//                       <h6 className="card-subtitle " style={{ color: '#ca5252',fontWeight:'bold',fontSize:'20px' }}>{bus.busNumber}</h6>
//                     </div>
// {/* //from here */}
//                    <div className="d-flex justify-content-between mb-1" >
//                       <div className="card-text" style={{ fontSize: '20px',fontWeight:'bold' }}>
                        
//                         <div> </div>
//                       </div>
//                       <div><small className="text-muted"style={{color:'black',fontWeight:'bold',fontSize:'21px'}}>
//                       <FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }} /> {bus.Route?.departure} ----</small>
//                       <small className="text-muted" style={{color:'black',fontWeight:'bold',fontSize:'21px'}}> {bus.Route?.arrival}</small></div>
//                       <div className="card-text" style={{ fontSize: '0.9rem' }}>
//                         <small className="text-muted" style={{color:'black',fontWeight:'bold',fontSize:'16px'}}> <FontAwesomeIcon icon={faBus} style={{ marginRight: '5px' }} /> {bus.busType}</small><br />
//                         <small className="text-muted"></small>
//                       </div>
//                    </div>

//                     <div className="d-flex justify-content-between">
//                        <p className="card-text" style={{ fontSize: '0.9rem' }}>Fare: Rs {bus.fare}</p>
//                        <p className="card-text" style={{ fontSize: '0.9rem' }}>Capacity: {bus.capacity}</p>
//                        <div>

                      

//                          {bus.Route && bus.Route.busRoute && (
//                           <button
//                             className="btn btn-link text-decoration-none"
//                             onClick={() => toggleRoutesDisplay(bus.busId)}
//                             style={{ fontWeight: 'bold', cursor: 'pointer', color: '#1f2e2e', padding: '0' }}
//                           >
//                             {bus.showRoutes ? 'Hide Routes' : 'Show Routes'}
//                           </button>

                          
//                         )}
//                         {bus.showRoutes && (
//                           <div className="mt-1">
//                             <ul className="list-group list-group-flush">
//                               {bus.Route.busRoute.map((route, index) => (
//                                 <li key={index} className="list-group-item p-1">{route}</li>
//                               ))}
//                             </ul>
//                           </div>

                          
//                         )}
//                       </div>
//                     </div>
                  
//                     <div className="d-flex justify-content-end">
//                        <button className="btn btn-primary btn-sm" style={{ backgroundColor: '#ca5252',border:'2px solid black' }} onClick={() => handleBookNow(bus)}>Book Now</button>
//                      </div>
//                    </div>
//                  </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {!isLoading && buses.length === 0 && (
//           <div className="row">
//             <div className="col">
//               {/* <p className="text-center">No buses available.</p> */}
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Bus;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { faWifi, faPlug, faTv, faSnowflake, faToilet ,faClock } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import WelcomeMessage from './WelcomeMessaage';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap'; 



import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faRupeeSign, faBus } from '@fortawesome/free-solid-svg-icons';
import MapPage from './BusMap';
import { MapContainer } from 'react-leaflet';



const API_URL = 'http://localhost:3000'; 

const Bus = () => {

  const handleSettingsClick = (eventKey) => {
    switch(eventKey) {
      case 'my-ticket':
        navigate('/seat');
        break;
      case 'refund-policy':
        navigate('');
        break;
      
      case 'change travel date':
        navigate('');
        break;
      case 'cancel-ticket':
          navigate('/seat');
          break;
      case 'help':
          navigate('');
          break;
     
      case 'logout':
          navigate('/login');
          break;
      default:
        break;
    }
  };
  
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };



  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState(getCurrentDate());
  const [buses, setBuses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noBusesFound, setNoBusesFound] = useState(false);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  const navigate = useNavigate();

  const fetchAllBuses = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}/bus`);
      setBuses(response.data);
    } catch (error) {
      setError('Error fetching bus data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBuses();
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    setNoBusesFound(false);
    setBuses([]);
    setIsSearchPerformed(true);

    try {
        const response = await axios.get(`${API_URL}/bus`, {
            params: { from: pickup, to: dropoff, date }
        });

        if (response.data.length === 0) {
            setNoBusesFound(true);
        } else {
            const busesWithFare = response.data.map(bus => ({
                ...bus,
                fare: bus.totalFare
            }));
            setBuses(busesWithFare);
            setNoBusesFound(false);
        }
    } catch (error) {
        setError('Error fetching bus data. Please try again.');
    } finally {
        setIsLoading(false);
    }
};


  const handleBookNow = (bus) => {
    navigate('/bus-details', {
      state: {
        busId: bus.busId,
        from: isSearchPerformed ? pickup : bus.Route.from,
        to: isSearchPerformed ? dropoff : bus.Route.to,
        fare: bus.fare,
        date: isSearchPerformed ? date : getCurrentDate()
      }
    });
  };

  

  const toggleRoutesDisplay = (busId) => {
    const updatedBuses = buses.map(bus => {
      if (bus.busId === busId) {
        return {
          ...bus,
          showRoutes: !bus.showRoutes
        };
      }
      return bus;
    });
    setBuses(updatedBuses);
  };

  return (
    
    <div className="container d-flex flex-column align-items-center" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
     
     

<section className="search-section" style={{ backgroundColor: '#ca5252', color: 'white', borderRadius: '10px', padding: '30px', width: '100%', maxWidth: '1200px', height: '250px', marginBottom: '20px' }}>
  <div className="row justify-content-center mb-4">
    
    <div className="col-md-4">
      <label htmlFor="pickup" className="form-label" style={{ color: 'white', fontWeight: 'bold' }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> From
      </label>
      <input
        type="text"
        id="pickup"
        className="form-control"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
        placeholder="Enter pickup location"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#333', borderRadius: '5px', border: '1px solid #ccc', padding: '10px' }}
      />
    </div>
    
    <div className="col-md-4">
      <label htmlFor="dropoff" className="form-label" style={{ color: 'white', fontWeight: 'bold' }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> To
      </label>
      <input
        type="text"
        id="dropoff"
        className="form-control"
        value={dropoff}
        onChange={(e) => setDropoff(e.target.value)}
        placeholder="Enter drop off location"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#333', borderRadius: '5px', border: '1px solid #ccc', padding: '10px' }}
      />
    </div>
    
    <div className="col-md-4">
      <label htmlFor="datepicker" className="form-label" style={{ color: 'white', fontWeight: 'bold' }}>
        <FontAwesomeIcon icon={faCalendarAlt} /> Select Date
      </label>
      <input
        type="date"
        id="datepicker"
        className="form-control"
        value={date}
        min={getCurrentDate()}
        onChange={(e) => setDate(e.target.value)}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: '#333', borderRadius: '5px', border: '1px solid #ccc', padding: '10px' }}
      />
    </div>
    
    <div className="col-md-12 mt-5  d-flex justify-content-center">
      <button
        type="button"
        onClick={handleSearch}
        disabled={isLoading}
        className="btn btn-primary btn-block"
        style={{ backgroundColor: '#1f2e2e', color: '#fff', borderRadius: '5px', padding: '10px', fontWeight: 'bold', border: 'none',width:'200px' }}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
    </div>
    
  </div>
</section>


  <hr />
  {/* <div style={{width:'70%',height:'10%'
  }}>
    */}
     {/* Other bus details and components */}


     <div style={{width:'1200px',border:'2px solid red',maxWidth:'1500px', marginBottom: '30px', overflow: 'hidden'}}> 
      
     <MapContainer>
        <MapPage from={pickup} to={dropoff} />
      </MapContainer>
      </div>
   
 <section className="results-section" style={{ width: '100%', maxWidth: '1200px', marginTop: '0' }}>
        {error && <div className="alert alert-danger">{error}</div>}

        {noBusesFound && !isLoading && buses.length === 0 && (
        <div className="alert alert-warning">No buses available for the selected criteria.</div>
    )}

{!noBusesFound && buses.length > 0 && (
        <div className="row justify-content-center">
            {buses.map(bus => (
                <div key={bus.busId} className="col-md-12 mb-4">
                    {/* Bus card component */}
                </div>
            ))}
        </div>
    )}
      {!isLoading && buses.length === 0 && !noBusesFound && (
        <div className="row">
            <div className="col">
                <p className="text-center">No buses available.</p>
            </div>
        </div>
    )}
       {buses.length > 0 && (
          <div className="row justify-content-center">
            {buses.map(bus => (
              <div key={bus.busId} className="col-md-12 mb-4">
                <div className="card h-100 d-flex flex-column" style={{ backgroundColor: '#fff', border: '1px solid #ca5252', borderRadius: '10px', padding: '25px' }}>
                  <div className="card-body" >
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="card-title" style={{ color: '#ca5252',fontWeight:'bold',fontSize:'32px' }}>{bus.busName}</h5>
                      <div style={{color:'#ca5252',fontSize:'20px',fontWeight:'bold'}}>
                      {isSearchPerformed ? (
                          <div > {pickup} - {dropoff}</div>
                        ) : (
                          <div> {bus.Route.from} - {bus.Route.to}</div>
                        )}
                        </div>

                      <h6 className="card-subtitle " style={{ color: '#ca5252',fontWeight:'bold',fontSize:'20px' }}>{bus.busNumber}</h6>
                    </div>
{/* //from here */}
                   <div className="d-flex justify-content-between mb-1" >
                      <div className="card-text" style={{ fontSize: '20px',fontWeight:'bold' }}>
                        
                        <div> </div>
                      </div>
                      {/* <div><small className="text-muted"style={{color:'black',fontWeight:'bold',fontSize:'21px'}}>
                      <FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }} /> {bus.Route?.departure} ----</small>
                      <small className="text-muted" style={{color:'black',fontWeight:'bold',fontSize:'21px'}}> {bus.Route?.arrival}</small></div>
                      <div className="card-text" style={{ fontSize: '0.9rem' }}>
                        <small className="text-muted" style={{color:'black',fontWeight:'bold',fontSize:'16px'}}> <FontAwesomeIcon icon={faBus} style={{ marginRight: '5px' }} /> {bus.busType}</small><br />
                        <small className="text-muted"></small>
                      </div> */}

<div style={{ marginLeft: '180px' }}>
  <small className="text-muted" style={{ color: 'black', fontWeight: 'bold', fontSize: '21px' }}>
    <FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }} /> {bus.Route?.departure}  &#8230;&#8230;&#8230;
  </small>
  <small className="text-muted" style={{ color: 'black', fontWeight: 'bold', fontSize: '21px' }}>
    {bus.Route?.arrival}
  </small>
</div>
<div className="card-text" style={{ fontSize: '0.9rem', marginLeft: '20px' }}>
  <small className="text-muted" style={{ color: 'black', fontWeight: 'bold', fontSize: '16px' }}>
    <FontAwesomeIcon icon={faBus} style={{ marginRight: '5px' }} /> {bus.busType}
  </small>
  <br />
  <small className="text-muted"></small>
</div>

                   </div>

                    <div className="d-flex justify-content-between">
                       <p className="card-text" style={{ fontSize: '1rem',color:'#ca5252',fontWeight:'bold' }}>Fare: Rs {bus.fare}</p>
                       <p className="card-text" style={{ fontSize: '1rem' ,color:'#ca5252',fontWeight:'bold',marginLeft: '110px'}}>Capacity: {bus.capacity}</p>
                       <div>

                      

                         {bus.Route && bus.Route.busRoute && (
                          <button
                            className="btn btn-link text-decoration-none"
                            onClick={() => toggleRoutesDisplay(bus.busId)}
                            style={{ fontWeight: 'bold', cursor: 'pointer', color: '#1f2e2e', padding: '0' }}
                          >
                            {bus.showRoutes ? 'Hide Routes' : 'Show Routes'}
                          </button>

                          
                        )}
                        {bus.showRoutes && (
                          <div className="mt-1">
                            <ul className="list-group list-group-flush">
                              {bus.Route.busRoute.map((route, index) => (
                                <li key={index} className="list-group-item p-1">{route}</li>
                              ))}
                            </ul>
                          </div>

                          
                        )}
                      </div>
                    </div>
                  
                    <div className="d-flex justify-content-end">
                       <button className="btn btn-primary btn-sm" style={{ backgroundColor: '#ca5252',border:'2px solid black',fontSize:'18px' }} onClick={() => handleBookNow(bus)}>Book Now</button>
                     </div>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        )}

        {!isLoading && buses.length === 0 && (
          <div className="row">
            <div className="col">
              {/* <p className="text-center">No buses available.</p> */}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Bus;

