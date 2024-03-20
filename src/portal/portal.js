import React from 'react';
import SystemCard from '../Component/systemCard/systemCard';
import './portal.scss';

const Portal = () => {

  const systemList = [
    { name: 'Leave Request', Link: 'https://wsapp01.winnersoft.co.th/Runtime/Runtime/Form/WNS__INT.F.Home/' },
    { name: 'Expense Claim', Link: 'https://wsapp01.winnersoft.co.th/Runtime/Runtime/Form/EC.F.ExpenseRequestPage/' },
    { name: 'Timesheet', Link: 'https://wsapp01.winnersoft.co.th/Runtime/Runtime/Form/WNS__INT.F.Worklists/' },
    { name: 'E-Memo', Link: 'https://wsapp01.winnersoft.co.th/Runtime/Runtime/Form/Memo.Form.LandingPage/' }
  ];

  return (
    <div className='portalContrainer'>
      <div className='portalInnerContrainer'>
        <h1 className='systemTitle'>System</h1>
        <SystemCard systemList={systemList} />
      </div>
    </div>
  );
};

export default Portal;