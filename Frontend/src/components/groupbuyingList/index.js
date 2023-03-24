import React from 'react'
import { Link } from "react-router-dom"
import Paging from '../pagination'
import './index.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function GroupBuyingList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://3.36.144.128:8080/api/groupBuying')
      .then(response => {
        setItems(response.data.map(item => {
          const date = new Date(item.postTime);
          const formattedDate = date.toLocaleDateString("ko-KR");
          return { ...item, postTime: formattedDate };
        }));
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <div className='groupbuying_list'>
      {items.map((item, index) => (
        <Link to={`/groupBuying/${item.id}`} style={{ textDecoration: 'none' }}>
          <div key={index} className='item'>
            <div className='item_image'>
              <img src={item.image} alt='이미지 불러오기 실패' />
            </div>
            <div className='item_nickname'>{item.nickname}</div>
            <div className='item_date'>{item.postTime}</div>
            <div className='item_title'>{item.title}</div>
            <div className='item_area'>{item.dong}</div>
            <div className='item_deadline'>0일 후 마감</div>
          </div>
        </Link>
      ))}
    </div>
  )
}