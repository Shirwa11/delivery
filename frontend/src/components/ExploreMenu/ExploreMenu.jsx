import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
 
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>ka dooro cuntooyin kala duwan oo ay ku jiraan noocyo kala duwan oo lagu raaxaysto ee lagu farsameeyay maaddooyinka ugu wanagsan iyo dad leh khibrad cunto karin, hadafkeenu waa inaanu qancino rabitaankaaga oo aanu sare u qaadno dooqaaga cunto.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
