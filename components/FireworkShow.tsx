import React from "react";
import { Fireworks as FireworksJS } from '@fireworks-js/react'

export class FireworkShow extends React.Component {
  constructor(props: any) {
    super(props);
  }
  
  render() {
    return <FireworksJS
      options={{
        rocketsPoint: {
          min: 0,
          max: 100
        }
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: '#000'
      }}
    />
  }
}
