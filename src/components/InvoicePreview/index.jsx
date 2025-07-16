import React, { useEffect, useState } from 'react'
import './index.css'
import InvoiceTable from '../InvoiceTable'
import CompanyInfo from '../CompanyInfo'
import CostumerInfo from '../CostumerInfo'
import OtherDetails from '../OthetDetails'
import numberToWords from 'number-to-words';

const API_URL = 'https://app.apnabillbook.com/api/order/getOrderByInvoiceId/sV1lZF9773';

const convertToWords = (amount) => {
  const rounded = Math.round(amount);
  const words = numberToWords.toWords(rounded);
  // Capitalize first letter of each word
  const capitalized = words
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return `Rupees ${capitalized} Only`;
};

const InvoicePreview = () => {
  const [invoiceData, setInvoiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setInvoiceData(result.data);
        console.log('Fetched invoice data:', result.data); // Log the fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInvoice();
  }, []);

  if (loading) return <div>Loading invoice...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!invoiceData) return <div>No invoice data found.</div>;

  // Prepare items for InvoiceTable
  const invoiceItems = invoiceData.orderProducts.map(item => ({
    name: item.productName,
    quantity: item.quantity,
    pricePerUnit: item.price,
    description: item.description || '',
    unit: item.unitName || '',
    unitName: item.unitName || '',
    hsn: item.hsn || '',
    taxRate: item.taxRate || '',
    discount: item.discount || '',
  }));

  // Dynamic Price/Unit header
  const allUnitNames = invoiceData.orderProducts.map(item => item.unitName).filter(Boolean);
  const uniqueUnitNames = [...new Set(allUnitNames)];
  const priceHeader = uniqueUnitNames.length === 1 && uniqueUnitNames[0]
    ? `Price/${uniqueUnitNames[0]}`
    : 'Price/Unit';

  // Totals
  const subTotal = invoiceData.itemTotal;
  const gstAmount = invoiceData.tax;
  // If tax is split into SGST/CGST, you can adjust here. For now, use 0.5 split if tax exists.
  const sgst = gstAmount / 2;
  const cgst = gstAmount / 2;
  const grandTotal = invoiceData.grandTotal;

  return (
    <div className='preview-container'>
      <div className='logo-container'>
        <img src="/logo.png" alt="Company Logo" className='logo' />
      </div>
      <div className='invoice-box'>
          <CompanyInfo company={invoiceData.store} />
          <CostumerInfo customer={invoiceData.walkin_customer} />
          <InvoiceTable items={invoiceItems} priceHeader={priceHeader} />
          <OtherDetails invoice={invoiceData} />


      </div>
    </div>
  )
}

export default InvoicePreview

