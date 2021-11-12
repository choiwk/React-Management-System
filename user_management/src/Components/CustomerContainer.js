import React from 'react';

const CustomerContainer = ({ id, img, name, birthday, gender, job }) => {
  return (
    <>
      <div className="custContainer" aria-label="고객의 정보">
        <CustomerProfile id={id} image={img} name={name} />
        <CustomerInfo birthday={birthday} gender={gender} job={job} />
        <hr />
      </div>
      <br />
    </>
  );
};

const CustomerProfile = ({ id, image, name }) => {
  return (
    <div className="custProfile" aria-label="고객 프로필 정보">
      <img src={image} alt="고객 프로필 이미지" />
      <h3>
        이름 : {name}({id})
      </h3>
    </div>
  );
};

const CustomerInfo = ({ birthday, gender, job }) => {
  return (
    <div className="custInfo" aria-label="고객의 자세한 정보">
      <p>생년월일 : {birthday}</p>
      <p>성별 : {gender}</p>
      <p>직업 : {job}</p>
    </div>
  );
};

export default CustomerContainer;
