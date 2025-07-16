import './index.css'


const initialCustomerInfo = {
    name: "Arakoo Technologies Pvt. Ltd.",
    address: "Plot No. 99, Near Cyber Towers, Madhapur,\nHyderabad, Telangana - 500081",
    phone: "+91-9876543210",
    gstin: "36ARAKO9999Z1Z1",
    state: "Telangana",
    invoiceNo: "INV-2025-0042",
    date: "2025-07-13",
  
    shippingTo: {
      companyName: "Arakoo Tech Park - Warehouse Unit 2",
      address: "D-102, Hardware Industrial Estate,\nKukatpally, Hyderabad - 500072, Telangana"
    }
};

const CostumerInfo = () => {
    return(
        <div className='invoice-info-container'>
            
                <div className='invoice-info-heading-container'>
                <hr style={{width: "100%", border: "10px solid #88ad6d"}} />
                    <h1>Tax Invoice</h1>
                        <div className='invoice-info'>
                            <div className='billing-container'>
                                <h3>Bill To:</h3>
                                <p><strong>Name:<span>{initialCustomerInfo.name}</span></strong></p>
                                <p><strong>Address:<span>{initialCustomerInfo.address}</span></strong></p>
                                <p><strong>Contact No.:<span>{initialCustomerInfo.phone}</span></strong></p>
                                <p><strong>GSTIN No.:<span>{initialCustomerInfo.gstin}</span></strong></p>
                                <p><strong>State:<span>{initialCustomerInfo.state}</span></strong></p>
                            </div>
                            <div className='shipping-container'>
                                <div>
                                    <h3>Shipping To:</h3>
                                    <p><strong>Name:<span>{initialCustomerInfo.shippingTo.companyName}</span></strong></p>
                                    <p><strong>Address:<span>{initialCustomerInfo.shippingTo.address}</span></strong></p>
                                </div>
                                <div className='shipping-date-container'>
                                    <p><strong>Invoice No.:<span>{initialCustomerInfo.invoiceNo}</span></strong></p>
                                    <p><strong>Date:<span>{initialCustomerInfo.date}</span></strong></p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>

            </div>
    )
}

export default CostumerInfo

