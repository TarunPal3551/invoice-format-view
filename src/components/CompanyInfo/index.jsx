import './index.css';

const CompanyInfo = ({ company }) => {
  const businessName = company?.name || 'N/A';
  const businessAddress = company?.address || 'N/A';
  const phone = company?.mobile || 'N/A';
  const email = company?.email || 'N/A';
  const gstin = company?.gstNumber || 'N/A';
  const state = company?.mapAddress || 'N/A';
  const isLogoShow = company.store_setting.showLogoUrl
  const logoUrl = `https://app.apnabillbook.com/${company.logo}`
  console.log(logoUrl)

  const renderContainerWithLogo = () => (
    <div className='company-details-container'>
      <div className='seller-logo-container'>
        <img src={logoUrl} alt='seller' className='seller-logo' />
      </div>
      <div className="company-info-conatiner">
        <p>Company/Seller Name:<span>{businessName}</span></p>
        <hr style={{ width: "100%", border: "0.5px solid #000" }} />
        <p>Address: <span>{businessAddress}</span></p>
        <hr style={{ width: "100%", border: "1px solid #000" }} />
        <p>Phone No:<span>{phone}</span></p>
        <hr style={{ width: "100%", border: "1px solid #000" }} />
        <p>Email ID: <span>{email}</span></p>
        <hr style={{ width: "100%", border: "1px solid #000" }} />
        <p>GSTIN No.: <span>{gstin}</span></p>
        <hr style={{ width: "100%", border: "1px solid #000" }} />
        <p>Google Address:<span>{state}</span></p>
        <hr style={{ width: "100%", border: "1px solid #000" }} />
      </div>
    </div>
  );

  const renderContainerWithoutLogo = () => (
    <div className='company-details-container'>
      <div className="company-info-conatiner-without-logo">
        <p>Company/Seller Name:<span>{businessName}</span></p>
        <hr style={{ width: "100%", border: "0.5px solid #000" }} />
        <p>Address: <span>{businessAddress}</span></p>
        <hr style={{ width: "100%", border: "1px solid #000" }} />
        <p>Phone No:<span>{phone}</span></p>
        <hr style={{ width: "100%", border: "1px solid #000" }} />
        <p>Email ID: <span>{email}</span></p>
        <hr style={{ width: "100%", border: "1px solid #000" }} />
        <p>GSTIN No.: <span>{gstin}</span></p>
        <hr style={{ width: "100%", border: "1px solid #000" }} />
        <p>Google Address:<span>{state}</span></p>
        <hr style={{ width: "100%", border: "1px solid #000" }} />
      </div>
    </div>
  );

  return isLogoShow
    ? renderContainerWithLogo()
    : renderContainerWithoutLogo();
};

export default CompanyInfo;
