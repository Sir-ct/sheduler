import React from "react";
import Svg, { Path } from "react-native-svg";

export default function CloseIcon(){
    return(
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M15 5L5 15" stroke="#404B51" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M5 5L15 15" stroke="#404B51" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}