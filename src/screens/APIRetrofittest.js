import React, {Text} from 'react'
import { List, ListWithAPI, Get } from 'react-retrofit'
 
class API {
 
  id = 0
 
  @Get('http://host/endpoint/')
  fetchData(data) {
    return data
  }
 
  @Get('http://host/endpoint/{id}')
  fetchMore(data) {
    this.id += 1
    return data
  }
}
 
const api = new API()
 
export default class APIRetrofittest extends React.Component {
 
    
 
    /**
      * @param {React.Component} component 
      * @param {function name(data) {}} fetchAPI
      * @param {function name(data) {}} fetchNextAPI
      * @param {React.Component} listItem 
      * @param {RetrofitConfig} config 
      */
    @ListWithAPI("Main", api.fetchData, api.fetchMore, item)
 
   
 
    render = () => {

      const item = ({ name }) => { return (<Text>{name}</Text>) }
      return (
        <This.MAIN/>
      );
       
    }
}