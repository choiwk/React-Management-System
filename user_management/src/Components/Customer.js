import React from 'react';
import CustomerDetail from './CustomerDetail';
import CustomerContainer from './CustomerContainer';

const Customer = () => {
  return (
    <>
      <div>
        {CustomerDetail.map((customerDetail, index) => (
          <CustomerContainer
            key={index}
            id={customerDetail.id}
            img={customerDetail.img}
            name={customerDetail.name}
            birthday={customerDetail.birthday}
            gender={customerDetail.gender}
            job={customerDetail.job}
          />
        ))}
      </div>
    </>
  );
};

export default Customer;
