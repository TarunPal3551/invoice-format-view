import './index.css';
import numberToWords from 'number-to-words';

const convertToWords = (amount) => {
  const rounded = Math.round(amount);
  const words = numberToWords.toWords(rounded);
  const capitalized = words
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return `Rupees ${capitalized} Only`;
};

const OtherDetails = ({ invoice }) => {
  const subTotal = invoice.itemTotal || 0;
  const gstAmount = invoice.tax || 0;
  const sgst = gstAmount / 2;
  const cgst = gstAmount / 2;
  const total = invoice.grandTotal || 0;
  const amountInWords = convertToWords(total);
  const tableCharges = invoice.tableCharges || 0;
  const previousDue = invoice.previousDue || 0;

  // --- Store Settings ---
  const storeSetting = invoice?.store?.store_setting || {};
  const showQr = storeSetting.showInvoiceQr;
  const showBankDetails = storeSetting?.showBankDetails || false;
  const bankDetail = storeSetting.bankDetails;
  const termAndConditions = storeSetting.storeTermsAndCondition || '';

  let deliveryCharges = 0;
  if (invoice.otherCharges) {
    try {
      const otherChargesArr = JSON.parse(invoice.otherCharges);
      const deliveryObj = otherChargesArr.find(
        (charge) => charge.name && charge.name.toLowerCase().includes('delivery')
      );
      if (deliveryObj && deliveryObj.amount) {
        deliveryCharges = Number(deliveryObj.amount);
      }
    } catch (e) {
      // If parsing fails, keep deliveryCharges as 0
      console.error('Failed to parse otherCharges:', e);
    }
  }

  return (
    <div className='amount-info-container'>
      <div className='amount-terms-container'>

        {termAndConditions.trim() !== '' && (
          <div className='terms-conditions-container'>
            <p><strong>Terms & Conditions:</strong></p>
            <p><span>{termAndConditions}</span></p>
          </div>
        )}

        <div className='payment-option-container'>
          <p><strong>Payment Option:</strong></p>
          <div className='payment-method-container'>
          {showQr && (
              (storeSetting.enableAlternateQrString && storeSetting.alternateQrString?.trim()) ? (
                <div className='qr-container'>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(storeSetting.alternateQrString)}`}
                    alt="Alternate UPI QR Code"
                    className="qr-code-image"
                  />
                  <p>Scan & Pay via UPI</p>
                </div>
              ) : (
                storeSetting.paymentQrImage || storeSetting.paymentQrText ? (
                  <div className='qr-container'>
                    {storeSetting.paymentQrImage && (
                      <img
                        src={storeSetting.paymentQrImage}
                        alt="Payment QR"
                        className="qr-code-image"
                      />
                    )}
                    {storeSetting.paymentQrText && <p>{storeSetting.paymentQrText}</p>}
                  </div>
                ) : null
              )
            )}


            {bankDetail?.trim() && (
              <div className='bank-details-container'>
                <p><strong>Bank Details:</strong></p>
                <p>{bankDetail}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='sub-total-signature-container'>
        <div className='sub-total-container'>
          <div className='alin-container' style={{ backgroundColor: "#8fdf74" }}>
            <h5 className='sub-total'><strong>Sub Total:</strong></h5>
            <p>₹{subTotal.toFixed(2)}</p>
          </div>
          <div className='alin-container'>
            <p><strong>SGST:</strong></p>
            <p><span>₹{sgst.toFixed(2)}</span></p>
          </div>
          <div className='alin-container'>
            <p><strong>CGST:</strong></p>
            <p><span>₹{cgst.toFixed(2)}</span></p>
          </div>
          <div className='alin-container'>
            <p><strong>Table Charges:</strong></p>
            <p><span>₹{tableCharges.toFixed(2)}</span></p>
          </div>
          <div className='alin-container'>
            <p><strong>Delivery Charges:</strong></p>
            <p><span>₹{deliveryCharges.toFixed(2)}</span></p>
          </div>
          <div className='alin-container'>
            <p><strong>Previous Due:</strong></p>
            <p><span>₹{previousDue.toFixed(2)}</span></p>
          </div>
          <div className='alin-container'>
            <p><strong>Discount:</strong></p>
            <p><span>₹0</span></p>
          </div>
          <div className='alin-container'>
            <p><strong>Total:</strong></p>
            <p><span>₹{total.toFixed(2)}</span></p>
          </div>
          <div className='alin-container'>
            <p><strong>Received Balance:</strong></p>
            <p><span>₹{total.toFixed(2)}</span></p>
          </div>
        </div>

        <div className='amount-container'>
          <p><strong>Amount in Words: <span>{amountInWords}</span></strong></p>
        </div>

        <div className='sign-container'>
          <p>Signature...</p>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
