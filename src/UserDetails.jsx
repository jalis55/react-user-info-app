import React from 'react';

const UserDetails = ({ userDetails }) => {
  const bankInfo = userDetails.bank;

  const excludeKeys = (obj, keysToExclude) =>
    Object.fromEntries(
      Object.entries(obj).filter(([key, _]) => !keysToExclude.includes(key))
    );

  const keysToExclude = ['bank', 'customers'];

  const newObject = excludeKeys(userDetails, keysToExclude);
  // console.log(newObject); // Output: { a: 1, c: 3 }

  // basic info
  const userBasicInfo = {
    accountCode: userDetails.accountCode,
    boId: userDetails.boId
  };

  // Customer info
  const customerInfo = userDetails.customers && userDetails.customers[0];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="mb-4 text-center">User Basic Info</h2>
              <div className="info-box">
                <div className="info-item">
                  <span className="info-label">Account Code:</span>{' '}
                  {userBasicInfo.accountCode}
                </div>
                <div className="info-item">
                  <span className="info-label">BO Id:</span>{' '}
                  {userBasicInfo.boId}
                </div>
              </div>
            </div>
          </div>
          {customerInfo && (
            <div className="card">
              <div className="card-body">
                <h2 className="mb-4 text-center">Customer Info</h2>
                <div className="info-box">
                  <div className="info-item">
                    <span className="info-label">Birth Date:</span>{' '}
                    {customerInfo.birthDate}
                  </div>
                  <div className="info-item">
                    <span className="info-label">Customer Type:</span>{' '}
                    {customerInfo.customerType}
                  </div>
                  <div className="info-item">
                    <span className="info-label">Father/Husband Name:</span>{' '}
                    {customerInfo.fatherHusbandName}
                  </div>
                  <div className="info-item">
                    <span className="info-label">Gender:</span>{' '}
                    {customerInfo.gender}
                  </div>
                  <div className="info-item">
                    <span className="info-label">Last Name:</span>{' '}
                    {customerInfo.lastName}
                  </div>
                  <div className="info-item">
                    <span className="info-label">Mother Name:</span>{' '}
                    {customerInfo.motherName}
                  </div>
                  <div className="info-item">
                    <span className="info-label">National ID:</span>{' '}
                    {customerInfo.nationalId}
                  </div>
                  <div className="info-item">
                    <span className="info-label">Nationality:</span>{' '}
                    {customerInfo.nationality}
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
