// import React from 'react';
// import { Link, Routes, Route } from 'react-router-dom';
// import { Navbar, Container, Nav, Button } from 'react-bootstrap';
// import { FaUser, FaHome,FaBook, FaFileInvoice } from 'react-icons/fa';
// import Bus from './Components/Bus';
// import Info from './Components/Info';
// import Payment from './Components/Payment';
// import Profile from './Components/profile';
// import Bookings from './Components/cancelticket';


// function App2() {
//   return (
//     <div className="container-fluid p-0">
//       <Navbar bg="dark" variant="dark" className="flex-column p-3" style={{ width: '250px', height: '100vh', position: 'fixed' }}>
//         <Container fluid className="d-flex flex-column">
        
//           <Navbar.Brand as={Link} to="/" className="mb-3 mt-3" style={{ color: 'orange', fontFamily: 'Times New Roman', fontSize: '44px' }}>
//             My Bus
//           </Navbar.Brand>

          
     
//           <Nav className="flex-column flex-grow-1 mt-3">
//             <Nav.Link as={Link} to="/" className="nav-link d-flex align-items-center" style={{ backgroundColor: 'transparent', color: 'orange' }}>
//               <FaHome style={{ marginRight: '10px' }} />
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/seat" className="nav-link d-flex align-items-center" style={{ backgroundColor: 'transparent', color: 'orange' }}>
//               <FaBook style={{ marginRight: '10px' }} />
//               My Bookings
//             </Nav.Link>
            
          
//           </Nav>
        
//           <Nav className="mt-auto">
//             <Button variant="outline-light" as={Link} to="/profile" className="mt-3" style={{ color: 'orange', border: '2px solid orange' }}>
//               <FaUser style={{ marginRight: '5px' }} />
//               Profile
//             </Button>
//           </Nav>
//         </Container>
//       </Navbar>

//       <div style={{ marginLeft: '250px',  minHeight: '100vh', padding: '10px'}}>
//         <Routes>
//           <Route path="/" element={<Bus />} />
//           <Route path="/bus-details" element={<Info />} />
//           <Route path="/billing" element={<Payment />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/seat" element={<Bookings/>}/>
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App2;
import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaUser, FaHome, FaBook, FaSignOutAlt } from 'react-icons/fa';
import Bus from './Components/Bus';
import Info from './Components/Info';
import Payment from './Components/Payment';
import Profile from './Components/Profile';
import Bookings from './Components/cancelticket';
import PaymentModal from './Components/PaymentModal';

function App2() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <div className="container-fluid p-0">
      <Navbar bg="dark" variant="dark" className="flex-column p-3" style={{ width: '250px', height: '100vh', position: 'fixed' }}>
        <Container fluid className="d-flex flex-column">
          <Navbar.Brand as={Link} to="/" className="mb-3 mt-3" style={{ color: 'orange', fontFamily: 'Times New Roman', fontSize: '44px' }}>
            My Bus
          </Navbar.Brand>
          <Nav className="flex-column flex-grow-1 mt-3">
            <Nav.Link as={Link} to="/" className="nav-link d-flex align-items-center" style={{ backgroundColor: 'transparent', color: 'orange' }}>
              <FaHome style={{ marginRight: '10px' }} />
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/seat" className="nav-link d-flex align-items-center" style={{ backgroundColor: 'transparent', color: 'orange' }}>
              <FaBook style={{ marginRight: '10px' }} />
              My Bookings
            </Nav.Link>
          </Nav>
          <Nav className="mt-auto">
            <Button variant="outline-light" as={Link} to="/profile" className="mt-3" style={{ color: 'orange', border: '2px solid orange' }}>
              <FaUser style={{ marginRight: '5px' }} />
              Profile
            </Button>
            
          </Nav>
          <Nav className='mt-auto'>
          <Button variant="outline-light" onClick={handleLogout} className="mt-3" style={{ color: 'orange', border: '2px solid orange' }}>
          <FaSignOutAlt style={{ marginRight: '5px' }} /> Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ marginLeft: '250px', minHeight: '100vh', padding: '10px' }}>
        <Routes>
          <Route path="/" element={<Bus />} />
          <Route path="/bus-details" element={<Info />} />
          <Route path="/billing" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/paymentmodal" element={<PaymentModal />} />
          <Route path="/seat" element={<Bookings />} />
          
          
        </Routes>
      </div>
    </div>
  );
}

export default App2;
