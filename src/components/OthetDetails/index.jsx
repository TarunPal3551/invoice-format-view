import './index.css'

const OtherDetails = () => {
    return (
        <div className='amount-info-container'>
                <div className='amount-terms-container'>
                    <div className='amount-container'>
                        <h3>Amount in Words: </h3>
                    </div>
                    <div className='terms-conditions-container'>
                        <h3>Terms & Conditions: </h3>
                    </div>
                </div>
                <div className='sub-total-signature-container'>
                    <div className='sub-total-container'>
                        <h3>Sun Total</h3>
                        <p>SGST</p>
                        <p>CGST: </p>
                        <p style={{"font-weight": "bold", "font-size":"19px"}}>Total</p>
                        <p>Recieved <br/>Balance</p>
                    </div>
                    <div className='sign-container'>
                        <p>Signature...</p>
                    </div>
                </div>
            </div>
    )
}

export default OtherDetails