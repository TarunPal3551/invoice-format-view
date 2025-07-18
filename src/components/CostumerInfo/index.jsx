import './index.css';

const CostumerInfo = ({ shippingAddressId, shippingAddress, walkinCustomer, date, invoiceNumber }) => {
  const isShowShippingAddress =
    shippingAddressId !== null &&
    shippingAddressId !== "" &&
    shippingAddress !== null &&
    typeof shippingAddress === "object";

  const isShowWalkinCustomer =
    walkinCustomer !== null &&
    typeof walkinCustomer === "object" &&
    walkinCustomer.name;

  const renderShippingAddress = () => (
    <div className='shipping-container'>
      <div>
        <h3>Shipping To:</h3>
        {shippingAddress.costumer_name !== null && <p><strong>Name: </strong><span>{shippingAddress.customer_name}</span></p>}
        {shippingAddress.address_2 !== null && <p><strong>Address: </strong><span>{shippingAddress.address_2}</span></p>}
        {shippingAddress.phone !== null && <p><strong>Contact No.: </strong><span>{shippingAddress.phone}</span></p>}
        {shippingAddress.email !== null && <p><strong>Google Address: </strong><span>{shippingAddress.address}</span></p>}
        {shippingAddress.address && <p><strong>Google Address: </strong><span>{shippingAddress.address}</span></p>}
      </div>
    </div>
  );

  const renderWalkinCustomerAddress = () => (
    <div className='shipping-container'>
      <div>
        <h3>Billing To:</h3>
        {walkinCustomer.name !== null && <p><strong>Name: </strong><span>{walkinCustomer.name}</span></p>}
        {walkinCustomer.addressLine1 !== null && 
            <p><strong>Address: </strong><span>{walkinCustomer.addressLine1} {walkinCustomer.addressLine2}</span></p>
        }
        
        {walkinCustomer.mobile !== null &&
            <p><strong>Contact No.: </strong><span>{walkinCustomer.mobile}</span></p>
        }
      </div>
    </div>
  );

  return (
    <div className='invoice-info-container'>
      <div className='invoice-info-heading-container'>
      <hr />
        <h1>Tax Invoice</h1>
  
        {/* ✅ Always render invoice number and date */}
        <div className='invoice-number-date-container'>
          <p><strong>Invoice No.:</strong> <span>{invoiceNumber}</span></p>
          <p><strong>Date:</strong> <span>{date}</span></p>
        </div>
  
        {/* ✅ Conditionally render customer/shipping address */}
        {(isShowWalkinCustomer || isShowShippingAddress) ? (
          <div className='invoice-info'>
            {isShowWalkinCustomer && renderWalkinCustomerAddress()}
            {isShowShippingAddress && renderShippingAddress()}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
  
};

export default CostumerInfo;