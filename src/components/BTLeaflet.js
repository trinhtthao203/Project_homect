import React from 'react'
import axios from 'axios';
import L from "leaflet";
import { Map, TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import BlueIcon from "../Leaflet/css/images/blueicon.png"
import "./BTLeaflet.css";

class BTLeaflet extends React.Component {
    state = {
        baiDang: []
      }
    componentDidMount(){
        axios
        .get('/baidang')
        .then(res => {
            const baiDang = res.data;
            this.setState({baiDang});
          })
          .catch(function (error) {
            console.log(error);
            console.log('Error get database');
          });
        }

    render(){
        console.log(this.state.baiDang.map(e=>e.toado));
    return (
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
           
            {this.state.baiDang.map((e)=>{
                var positon = [e.toado.y, e.toado.x];
                console.log(e.toado.x, e.toado.y);
                return(
                    <div>
                        
                    <select className="select" defaultValue={this.state.selectValue} 
                    onChange={this.handleChange} >
                    <option value={e.tieude}> {e.tieude} ahc </option>)
                </select>
                     <Marker position={positon} icon={L.icon({iconUrl: BlueIcon})}>
                        <Popup>
                            <div>
                            <img className="img-popup" src={require(`../Images/${e.url}`).default}/>
                            <br/>
                             {e.tenchungcu}
                             </div> 
                        </Popup>
                    </Marker>
                </div>    
                )
            })}
        </MapContainer>
      </div>
     
        </div>
    )
    }
}

export default BTLeaflet
