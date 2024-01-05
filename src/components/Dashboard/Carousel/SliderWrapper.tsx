import styled from "@emotion/styled";


const SliderWrapper = styled('div') <{ bottom: number, width: number }>`
  .slick-dots {
    position: absolute;
    bottom: ${props => props.bottom}px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
  }
  .indicators li{
    height: 5px;
    width: ${props => props.width}px;
    border-radius: 4px;
    background: lightgray;
    :hover {
      background: darkgray
    }
  }
  .slick-dots .slick-active {
    background: #5e5e5e;
    transition: width 0.3s ease-in-out;
  }
  .slick-dots .ft-slick__dots--custom {
    height: 5px;
    width: 100%;
    opacity: 0;
  }
`
export default SliderWrapper