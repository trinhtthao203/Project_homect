import axios from 'axios';
import React,{Component} from 'react'

export default class Dashboard extends React.Component{
    // componentDidMount(){
    //     axios.get('/')
    //     .then(res=>{
    //       console.log(res);  
    //     },
    //     err=>{
    //       console.log(err); 
    //     })
    // }

    render(){
        return(
            <h2>Bạn đã đăng nhập thành công </h2>
        );
    }
}