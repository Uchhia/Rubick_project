import React from 'react';
import { Space, Table, Tag,Select,Avatar } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Route, Routes ,Link, NavLink} from 'react-router-dom';
import Addproduct from './Addproduct';
import monent from 'moment';


export default function Product() {
  
  const [product, setProduct] = useState([]);
  const [totalpages,settotalPages]=useState(1);
  

  useEffect(() => {
    axios.get("/all")
      .then(res=>setProduct(res.data))
      .then(err=>console.log(err))
    })



  const months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const columns = [
    {
      title:'Code',
      dataIndex:'code',
      key:'code'

    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'QTY',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render:(tag)=>{
        const color= tag.includes('Inactive')?'Red':'Green'
        return <Tag color={color} key={tag}>{tag}</Tag>
      }      
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render:(tag)=>{
        return <Tag key={tag}>{tag.monent()}</Tag>
      }
    },
  ]
  return (
    <div>
      <div  >
  
       <p style={{color:"black",fontSize:"20px"}}><b>Products</b>

       <NavLink to='/add' style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}><Avatar style={{marginLeft:"15px"}} icon={<PlusCircleOutlined/>}/></NavLink>
        <Routes>
        <Route path ='/add' element={<Addproduct/>}/>
        </Routes>
      
      
        <Select  style={{float:"right",width:"200px"}} placeholder='Months' defaultValue={'January'} >
          {months.map((month,index)=>{
            return <Select.Option key={index} value={month}></Select.Option>
          })}

        </Select></p>
      

      </div>
      <Table columns={columns}   dataSource={product} pagination={{pageSize:7}}/>
      
      
    </div>
  );
}
