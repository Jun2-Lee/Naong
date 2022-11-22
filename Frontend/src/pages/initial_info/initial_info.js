import React from 'react';
import { useState } from 'react';
import './initial_info.css'

function InitialInfo() {
  const [nickName, setNickName] = useState("");
  
  const handleChange = ({ target: { value } }) => setNickName(value);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="nick_name">
          <label className="form-label">닉네임</label>
          {/*nickName의 margin-top을 바꾸면 signup 페이지(1-3)에도 영향이 가서 className 다르게 설정*/}
          <input 
            className="nickName_linkage"
            value={nickName}
            onChange={handleChange}
            />
          <button type="submit" className="overlap_check">중복 확인</button>
        </div>

        <div className="profile_upload">
          <label className="form-label">프로필 사진</label>
          <input 
            className="profileUpload"
            />
          {/*<input type="file" accept="image/*"></input>*/}
        </div>

        <div className="address">
          <label className="form-label">사는 동네</label>
          <select className="gu">
            <option value="">구</option>
            <option value="금정">금정구</option>
            <option value="해운대">해운대구</option>
            <option value="동래">동래구</option>
            <option value="연제">연제구</option>
          </select>
          <select className="dong">
          <option value="">동</option>
            <option value="금정">장전동</option>
            <option value="해운대">부곡동</option>
            <option value="동래">구서동</option>
            <option value="연제">노포동</option>
          </select>
        </div>
        
        <div className="submit">
          <input type="submit" className="submit_user_info" value="저장하기"></input>
        </div>
      </form>
    </div>
  )
}

export default InitialInfo;