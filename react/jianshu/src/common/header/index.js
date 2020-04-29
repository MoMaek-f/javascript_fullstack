import React, {Component} from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NacSearch,Addition,Button} from './style'
class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载app</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NacSearch></NacSearch>
        </Nav>
        <Addition>
          <Button>写文章</Button>
          <Button>注册</Button>
        </Addition>
      </HeaderWrapper>
    ) 
  }
}
export default Header