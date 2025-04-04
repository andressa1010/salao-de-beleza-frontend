import React from "react"
import { LogoTipo } from "../Styles/styled"
import imgLogo from "../assets/logo-bella.png"


const Logo = ()=>{
    return(
        <>
        <LogoTipo>
          <img src={imgLogo}/>
        </LogoTipo>
        </>
    )
}

export default Logo