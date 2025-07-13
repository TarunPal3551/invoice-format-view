import './index.css'

const CostumerInfo = () => {
    return(
        <div className='invoice-info-container'>
            
                <div className='invoice-info-heading-container'>
                <hr style={{width: "100%", border: "10px solid #88ad6d"}} />
                    <h1>Tax Invoice</h1>
                        <div className='invoice-info'>
                            <div className='billing-container'>
                                <h3>Bill To:</h3>
                                <p>Name:</p>
                                <p>Address:</p>
                                <p>Contact No.:</p>
                                <p>GSTIN No.:</p>
                                <p>State:</p>
                            </div>
                            <div className='shipping-container'>
                                <h3>Shipping To:</h3>
                                <div className='shipping-date-container'>
                                    <p>Invoice No.:</p>
                                    <p>Date:</p>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>

            </div>
    )
}

export default CostumerInfo