import React from 'react'

const UserAdditionalInfo = ({userAdditionalInfo}) => {
    const bank=userAdditionalInfo.bank
  return (
    <div>
        <h1>Bank Infromation</h1>
        <h4>Account Number:{bank.accountNumber}</h4>
        <h4>Routing Number:{bank.routingNumber}</h4>
    </div>
  )
}

export default UserAdditionalInfo;