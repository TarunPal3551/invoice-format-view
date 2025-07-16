import './index.css'
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

  // Dynamic Table Charges and Previous Due
  const tableCharges = invoice.tableCharges || 0;
  const previousDue = invoice.previousDue || 0;

  // Store Settings
  const storeSetting = invoice?.store?.store_setting || {};
  const showQr = storeSetting?.showInvoiceQr || false;
  const showBankDetails = storeSetting?.showBankDetails || false;
  const bankDetail = "storeSetting.bankDetails"

  const alternateQrString = storeSetting?.alternateQrString || '';
  const alternateQr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(storeSetting.alternateQrString)}`;




  const termAndConditions = "storeSetting.storeTermsAndCondition"
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
            <div className='qr-container'>
                {storeSetting.enableAlternateQrString ? (
                <>
                    <img
                        src={alternateQr}
                        alt="UPI QR Code"
                        className="qr-code-image"
                    />
                    <p>Scan & Pay via UPI</p>
                </>
                ) : (
                <>
                    <img src={`https://app.apnabillbook.com/${storeSetting.paymentQrImage}`} alt='qr-code' className='qr-code-image' />
                    <p>UPI ID: <span>{storeSetting.paymentQrText}</span></p>
                </>
                )}
            </div>
            )}

            {bankDetail?.trim() !== '' && (
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
