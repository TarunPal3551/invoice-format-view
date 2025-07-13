import React from 'react'
import './index.css'
import InvoiceTable from '../InvoiceTable'
import CompanyInfo from '../CompanyInfo'
import CostumerInfo from '../CostumerInfo'
import OtherDetails from '../OthetDetails'

const InvoicePreview = () => {
  return (
    <div className='preview-container'>
        <div className='invoice-box'>
            <CompanyInfo />
            <CostumerInfo />
            <InvoiceTable />
            <OtherDetails />
        </div>


    </div>
  )
}

export default InvoicePreview