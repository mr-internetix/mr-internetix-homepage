

import styled from "@emotion/styled"


const LoadingAnimation = styled.div`

#logo-text {  
  width: 163px;
    height: 55px;
  animation: text-fill 0.5s ease forwards 3.5s;
}


#logo-text path:nth-child(1) {
  stroke-dasharray: 754.92724609375;
  stroke-dashoffset: 754.92724609375;
  animation: text-anim 2s ease forwards;
}

#logo-text path:nth-child(2) {
  stroke-dasharray: 549.0668334960938;
  stroke-dashoffset: 549.0668334960938;
  animation: text-anim 2s ease forwards 0.3s;
}

#logo-text path:nth-child(3) {
  stroke-dasharray: 177.4080047607422;
  stroke-dashoffset: 177.4080047607422;
  animation: text-anim 2s ease forwards 0.6s;
}

#logo-text path:nth-child(4) {
  stroke-dasharray: 226.94400024414062;
  stroke-dashoffset: 226.94400024414062;
  animation: text-anim 2s ease forwards 0.8s;
}

#logo-text path:nth-child(5) {
  stroke-dasharray: 604.4830322265625;
  stroke-dashoffset: 604.4830322265625;
  animation: text-anim 2s ease forwards 1s;
}

#logo-text path:nth-child(6) {
  stroke-dasharray: 336.6720275878906;
  stroke-dashoffset: 336.6720275878906;
  animation: text-anim 2s ease forwards 1.2s;
}

#logo-text path:nth-child(7) {
  stroke-dasharray: 463.96795654296875;
  stroke-dashoffset: 463.96795654296875;
  animation: text-anim 2s ease forwards 1.4s;
}

#logo-text path:nth-child(8) {
  stroke-dasharray: 549.067138671875;
  stroke-dashoffset: 549.067138671875;
  animation: text-anim 2s ease forwards 1.6s;
}

#logo-text path:nth-child(9) {
  stroke-dasharray: 604.48291015625;
  stroke-dashoffset: 604.48291015625;
  animation: text-anim 2s ease forwards 1.8s;
}

#logo-text path:nth-child(10) {
  stroke-dasharray: 463.96795654296875;
  stroke-dashoffset: 463.96795654296875;
  animation: text-anim 2s ease forwards 2s;
}

#logo-text path:nth-child(11) {
  stroke-dasharray: 336.6720275878906;
  stroke-dashoffset: 336.6720275878906;
  animation: text-anim 2s ease forwards 2.2s;
}

#logo-text path:nth-child(12) {
  stroke-dasharray: 226.94400024414062;
  stroke-dashoffset: 226.94400024414062;
  animation: text-anim 2s ease forwards 2.4s;
}

#logo-text path:nth-child(13) {
  stroke-dasharray: 477.3778381347656;
  stroke-dashoffset: 477.3778381347656;
  animation: text-anim 2s ease forwards 2.6s;
}


@keyframes text-anim {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes text-fill {
  from {
    fill: transparent;
  }

  to {
    fill: white;
  }

}
`

export default function LoaderAnimation(){
    


    return(
        <LoadingAnimation>
      <svg id="logo-text" width="430" height="123" viewBox="0 0 1060 123" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M104.326 3.35201V103H91.2217V28.696L58.1017 103H48.8857L15.6217 28.552V103H2.5177V3.35201H16.6297L53.4937 85.72L90.3577 3.35201H104.326Z" stroke="white" strokeWidth="4"/>
      <path d="M179.397 103L155.493 61.96H139.653V103H126.549V2.632H158.949C166.533 2.632 172.917 3.928 178.101 6.52C183.381 9.11201 187.317 12.616 189.909 17.032C192.501 21.448 193.797 26.488 193.797 32.152C193.797 39.064 191.781 45.16 187.749 50.44C183.813 55.72 177.861 59.224 169.893 60.952L195.093 103H179.397ZM139.653 51.448H158.949C166.053 51.448 171.381 49.72 174.933 46.264C178.485 42.712 180.261 38.008 180.261 32.152C180.261 26.2 178.485 21.592 174.933 18.328C171.477 15.064 166.149 13.432 158.949 13.432H139.653V51.448Z" stroke="white" strokeWidth="4"/>
      <path d="M294.798 108.472V120.568H218.19V108.472H294.798Z" stroke="white" strokeWidth="4"/>
      <path d="M332.872 2.632V103H319.768V2.632H332.872Z" stroke="white" strokeWidth="4"/>
      <path d="M434.117 103H421.013L368.309 23.08V103H355.205V2.48801H368.309L421.013 82.264V2.48801H434.117V103Z" stroke="white" strokeWidth="4"/>
      <path d="M518.231 2.632V13.288H490.871V103H477.767V13.288H450.263V2.632H518.231Z" stroke="white" strokeWidth="4"/>
      <path d="M547.465 13.288V46.84H584.041V57.64H547.465V92.2H588.361V103H534.361V2.48801H588.361V13.288H547.465Z" stroke="white" strokeWidth="4"/>
      <path d="M661.038 103L637.134 61.96H621.294V103H608.19V2.632H640.59C648.174 2.632 654.558 3.928 659.742 6.52C665.022 9.11201 668.958 12.616 671.55 17.032C674.142 21.448 675.438 26.488 675.438 32.152C675.438 39.064 673.422 45.16 669.39 50.44C665.454 55.72 659.502 59.224 651.534 60.952L676.734 103H661.038ZM621.294 51.448H640.59C647.694 51.448 653.022 49.72 656.574 46.264C660.126 42.712 661.902 38.008 661.902 32.152C661.902 26.2 660.126 21.592 656.574 18.328C653.118 15.064 647.79 13.432 640.59 13.432H621.294V51.448Z" stroke="white" strokeWidth="4"/>
      <path d="M774.711 103H761.607L708.903 23.08V103H695.799V2.48801H708.903L761.607 82.264V2.48801H774.711V103Z" stroke="white" strokeWidth="4"/>
      <path d="M810.153 13.288V46.84H846.729V57.64H810.153V92.2H851.049V103H797.049V2.48801H851.049V13.288H810.153Z" stroke="white" strokeWidth="4"/>
      <path d="M932.653 2.632V13.288H905.293V103H892.189V13.288H864.685V2.632H932.653Z" stroke="white" strokeWidth="4"/>
      <path d="M961.887 2.632V103H948.783V2.632H961.887Z" stroke="white" strokeWidth="4"/>
      <path d="M1025.26 52.888L1056.08 103H1041.24L1017.2 63.832L994.301 103H979.757L1010.43 52.888L979.613 2.632H994.301L1018.49 41.944L1041.53 2.632H1056.22L1025.26 52.888Z" stroke="white" strokeWidth="4"/>
      </svg>
      </LoadingAnimation>
        
    )
}