/*
 * @Author: your name
 * @Date: 2020-04-27 01:55:27
 * @LastEditTime: 2020-06-11 14:47:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue全栈后台管理d:\Coding\javascript_fullstack\react\jianshu\src\common\header\style.js
 */ 
import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const NacSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  margin-left: 20px;
  outline: none;
  &::placeholder {
    color: #999;
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  border: 1px solid rgba(236,97,73,0.7);
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`