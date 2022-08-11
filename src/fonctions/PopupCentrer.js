import React from 'react'
import { screen } from '@testing-library/react';
export default function PopupCentrer(page,largeur,hauteur,options) {
    const top=(screen.height-hauteur)/2;
    const left=(screen.width-largeur)/2;
  return (
    window.open(page,"","top="+top+",left="+left+",width="+largeur+",height="+hauteur+","+options)
  )
}
