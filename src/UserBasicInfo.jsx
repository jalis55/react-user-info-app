import React from 'react'

const UserBasicInfo = ({userBasicInfo}) => {
  return (
    <div>
        <h2>Account No:{userBasicInfo.accountCode}</h2>
        <h2>BoId:{userBasicInfo.boId}</h2>
    </div>
  )
}

export default UserBasicInfo;