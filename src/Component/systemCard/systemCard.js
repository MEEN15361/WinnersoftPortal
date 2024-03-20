import React from 'react';
import './systemCard.scss';

const SystemCard = ({ systemList }) => {
    const navigateURL = (url) => {
        window.open(url, '_blank'); // Open URL in a new tab
      };

    return (
        <div className='systemListContrainer'>
            <div className='systemListItem'>
                {systemList.map(item => (
                    <div className='systemItemBox'>
                        <div className='systemItem' onClick={() => navigateURL(item.Link)}>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SystemCard;