import React from 'react'
import './index.css'

const InvoiceTable = () => {
  // Create 5 empty rows
  const emptyRows = Array.from({ length: 5 }, (_, index) => ({
    srNo: index + 1
  }))

  return (
    <div className="invoice-table-container">
      <hr style={{width: "100%", border: "10px solid #88ad6d"}} />
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Price/Unit</th>
            <th>Discount</th>
            <th>HSN</th>
            <th>GST</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {emptyRows.map((row, index) => (
            <tr key={row.srNo} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='total-container'>
      <h1 className='total-heading'>Total</h1>
      </div>
    </div>
  )
}

export default InvoiceTable 