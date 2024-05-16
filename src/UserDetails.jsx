import React from 'react'
import UserBasicInfo from './UserBasicInfo'
import UserAdditionalInfo from './UserAdditionalInfo';

const UserDetails = ({userDetails}) => {
  const bankInfo=userDetails.bank

  const excludeKeys = (obj, keysToExclude) =>
    Object.fromEntries(
      Object.entries(obj).filter(([key, _]) => !keysToExclude.includes(key))
    );

  const keysToExclude = ['accountCode', 'boId'];

  const userAdditionalInfo = excludeKeys(userDetails, keysToExclude);
  

  // basic info
  const userBasicInfo={
    "accountCode":userDetails.accountCode,
    "boId":userDetails.boId
  }

  console.log(userBasicInfo)

  return (
    <div>
      <UserBasicInfo userBasicInfo={userBasicInfo}/>
      <UserAdditionalInfo userAdditionalInfo={userAdditionalInfo} />
    </div>
  )
}

export default UserDetails;