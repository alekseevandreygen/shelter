import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  position: relative;`
const Item = styled.div`
  cursor: pointer;
  height: 200px;
  margin: 0 10px 20px 10px;
  overflow: hidden;
  padding: 10px;

  &:hover .mask {
     opacity: 1;
     background-color:rgba(0,0,0, 0.4);
  }`
const Mask = styled.div`
   box-sizing:border-box;
   height: 100%;
   left: 0;
   opacity: 0;
   overflow:visible;
   position: absolute;
   position: absolute;
   top: 0;
   transition: all 0.6s ease-in-out;
   width: 100%;`
const Image = styled.img`
  height: 100%;`
const Description = styled.div`
  color: white;
  left: 20%;
  position: absolute;
  text-align: center;
  top: 25%;
  width: 60%;`

const WorksItem= ({
  title,
  image,
}) => {
  return <Wrapper>
    <Item>
      <Image src={image} />
      <Mask className="mask">
        <Description>{title}</Description>
      </Mask>
    </Item>
  </Wrapper>
}

export default WorksItem;
