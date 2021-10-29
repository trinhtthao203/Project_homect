import Nav from "./nav";
import {Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import BlueIcon from "../Leaflet/css/images/blueicon.png"
function Itemdetail (props) {
    const itemId = props.match.params.id;
    const [Item, setItem] = useState([]);
    useEffect(() => {
        axios.post('/baidang/id',{
            idbaidang:itemId
        })
        .then(res => {
            setItem(res.data[0]);
            //Return Object in Array
        })
        .catch((error)=>{
            console.log(error);
            console.log('shfk');
        })
    
    })
    
    console.log(Item.toado)
    
    //const photo = require(`../Images/${Item.url}`).default;
    
    // <img src={photo} alt={Item.tenchungcu} height='10%' width='50%'/>
    return (
        
        <div>
           
            <Nav/>
            <br/>
            <br/>
            <br/>
            <div className="item-page-detail">
                <h1 className="item-name">{Item.tieude}</h1>
                <div className="item-info">
                    <span className="item-img">
                    </span>   
                    <span className="item-detail">
                        <div>
                            <div>
                                <h4>
                                Thông tin nhà bán
                                </h4>
                                <div>
                                    <span>
                                           Giá bán: {Item.mucgia} triệu || 
                                    </span>
                                    <span>
                                            Diện tích: {Item.dientich} m2
                                    </span>
                                </div>
                                <div>
                                    <span>
                                           Vị trí tầng ở: Tầng {Item.tangso} || 
                                    </span>
                                    <span>
                                            Số phòng ngủ: {Item.sophongngu} ||
                                    </span>
                                    <span>
                                           Số phòng vệ sinh: {Item.sophongvs}
                                    </span>
                                </div>
                                <div>
                                    <span>
                                           Nội thất: {Item.noithat} || 
                                    </span>
                                    <span>
                                            Pháp lí: {Item.phapli}
                                    </span>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <h4>Mô tả</h4>
                                <div>{Item.mota}</div>
                                
                                
                            </div>
                            
                        </div>
                    </span>
                    <div>
                    <div className="map">
        <MapContainer
          className="map"
          center={[10.030948,105.769099]}
          zoom={12}
          scrollWheelZoom={true}
          
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
                     
                     {/* <Marker position={} icon={L.icon({iconUrl: BlueIcon})}>
                        <Popup>
                            
                             {Item.tenchungcu}
                             
                        </Popup>
                    </Marker> */}
                
        </MapContainer>
      </div>

                    </div>
                </div>
            </div>
           
        </div>
    )
};

export default Itemdetail;