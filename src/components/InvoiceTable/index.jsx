import React from 'react';
import './index.css';

const InvoiceTable = ({ items = [], priceHeader = 'Price/Unit' }) => {
  // Determine column visibility based on actual data
  const hasHSN = items.some(item => item.hsn);
  const hasGST = items.some(item => item.taxRate !== null && item.taxRate !== undefined && item.taxRate !== '');
  const hasDiscount = items.some(item => item.discount !== null && item.discount !== '');
  const hasDescription = items.some(item => item.description && item.description.trim() !== '');

  // Calculate total
  const totalAmount = items.reduce((acc, item) => {
    const price = item.pricePerUnit || item.price || 0;
    const quantity = item.quantity || 0;
    const gstRate = item.taxRate || 0;
    const base = price * quantity;
    const gst = base * (gstRate / 100);
    return acc + base + gst;
  }, 0);

  return (
    <div className="invoice-table-container">
      <hr style={{ width: "100%", border: "10px solid #88ad6d" }} />
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Name</th>
            {hasDescription && <th>Description</th>}
            <th>Quantity</th>
            {hasHSN && <th>HSN</th>}
            <th>{priceHeader}</th>
            {hasGST && <th>GST</th>}
            {hasDiscount && <th>Discount</th>}
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const price = item.pricePerUnit || item.price || 0;
            const quantity = item.quantity || 0;
            const gstRate = item.taxRate || 0;
            const discount = item.discount || 0;
            const baseAmount = price * quantity;
            const gstAmount = baseAmount * (gstRate / 100);
            const finalAmount = baseAmount + gstAmount;

            return (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{item.productName || item.name}</td>
                {hasDescription && <td>{item.description}</td>}
                <td>{quantity}</td>
                {hasHSN && <td>{item.hsn || '-'}</td>}
                <td>₹{price}</td>
                {hasGST && <td>{gstRate}%</td>}
                {hasDiscount && <td>{discount}</td>}
                <td>₹{finalAmount.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className='total-container'>
        <h1 className='total-heading'>
          Total: <span>₹{totalAmount.toFixed(2)}</span>
        </h1>
      </div>
    </div>
  );
};

export default InvoiceTable;