import React,{ useState, useEffect } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

function CategoryBar2() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('refreshToken') === 'null' ? false : true);

  useEffect(() => {
    LoginCheck();
  });

  const LoginCheck = () => {
    setIsLoggedIn(localStorage.getItem('refreshToken') === 'null' ? false : true);
  };
  const [isOpen, setToggle] = useState([false, false, false, false, false, false, false, false, false]);

  const handleOpenToggle = (index) => {
    let copy = [...isOpen];
    if(copy[index]==false) {
      copy[index] = true;
    } else if(copy[index]==true) {
      copy[index]=false;
    }
    setToggle(copy);
  };

  const navigate = useNavigate();
  const handleWithdraw = () => {
    const accessToken = localStorage.getItem('accessToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    axios.delete('http://3.36.144.128:8080/api/mypage/withdraw')
      .then((res) => alert(res.data))
      .catch((err) => console.log(err)) 
    // 탈퇴 후 로그아웃 처리 
    axios.post('http://3.36.144.128:8080/api/auth/logout')
      .then(() => {
        localStorage.setItem('accessToken', 'null');
        localStorage.setItem('refreshToken', 'null');
        LoginCheck();
        navigate('/');
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <div style={{ 
        textAlign: "center",
        margin: "1rem",
        fontWeight: "700",
      }}>
          카테고리
      </div>
      <div className='sideBar'>
        <ul className='category'> 
          <div onClick={()=>handleOpenToggle(0)}>
            내 프로필
            {isOpen[0] && <img className='toggleOpen' src="/assets/img/toggleIconOpen.png"></img>}
            {!isOpen[0] && <img className='toggleClose' src="/assets/img/toggleIcon.png"></img>}
          </div>
        </ul>
          {isOpen[0] && <div className='sub-category-box'>
            <Link to="/changePW"><li className='sub-category'>비밀번호 변경하기</li></Link>
            <Link to="/editProfile"><li className='sub-category'>프로필 수정하기</li></Link>
          </div>}
        <ul className='category'>
          <div>
            <Link to="/chatting">쪽지함</Link>
          </div>
          <div className='toggleBtn'/>
        </ul>
        <ul className='category'>
          <div>
            <Link to="/myWriting">내가 쓴 글</Link>
          </div>
          <div className='toggleBtn'/>
        </ul>
        <ul className='category'>
          <div>
            <Link to="/myApplication">신청 목록</Link>
          </div>
          <div className='toggleBtn'/>
        </ul>
        <ul className='category'>
          <div>
            <Link to="/myClipping">찜 목록</Link>
          </div>
          <div className='toggleBtn'/>
        </ul>
        <ul className='category'>
          <div>
            <Link to="/calendar">캘린더</Link>
          </div>
          <div className='toggleBtn'/>
        </ul>
        <ul className='category'>
          <div onClick={handleWithdraw}>
            탈퇴하기
          </div>
          <div className='toggleBtn'/>
        </ul>
      </div>
    </div>
  )
}

export default CategoryBar2;