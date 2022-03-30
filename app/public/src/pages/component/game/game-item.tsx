import React from 'react';
import {ITEM_NAME, ITEM_DESCRIPTION} from '../../../../../models/enum';
import CSS from 'csstype';
import { useAppDispatch } from '../../../hooks';
import { itemClick } from '../../../stores/NetworkStore';

const style: CSS.Properties={
    backgroundColor:'rgba(255,255,255,0.7)',
    width:'30%',
    display:'flex',
    flexFlow:'column',
    alignItems:'center',
    justifyContent:'space-around',
    textAlign:'center'
};

export default function GameItem(props:{item: string}){
    const dispatch = useAppDispatch();
    return <div className='nes-container' style={style}>
    <img style={{width:'96px',height:'96px',imageRendering:'pixelated'}} src={"assets/item/" + props.item + ".png"}></img>
    <h3>{ITEM_NAME[props.item]}</h3>
    <p>{ITEM_DESCRIPTION[props.item]}</p>
    <button onClick={()=>{dispatch(itemClick(props.item))}} type="button" className="nes-btn is-primary">Pick</button>
</div>;
}