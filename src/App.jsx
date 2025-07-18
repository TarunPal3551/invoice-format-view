import InvoicePreview from "./components/InvoicePreview"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Add NotFound component
const NotFound = () => <div style={{textAlign: 'center', marginTop: '2rem'}}><h2>404 - Page Not Found</h2></div>;

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InvoicePreview />} />
                <Route path="/blue" element={<div className="blue-theme"><InvoicePreview /></div>} />
                <Route path="/black-and-white" element={<div className="black-and-white-theme"><InvoicePreview /></div>}/>
                {/* Not Found Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>

    )
}

export default App