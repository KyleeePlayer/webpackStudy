import _ from 'lodash';
import './style.css';
import './hello.scss';
import {areaEs6, circumferenceEs6} from "./js/circleEs6"
//es6 defalt import, 이름을 바꿀수 있다.
import ii from './js/cubeEs6';

console.log(areaEs6(5));
console.log(circumferenceEs6(5));

console.log(ii(3));
import treeImage from './assets/images/tree.gif'

/*function component() {
  console.log('hello webpack dev server');
  let element = document.getElementById('root');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}*/
const component = () =>{
  console.log('webpack test');
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //const img = document.createElement('img');
  //img.src = treeImage;
  //element.appendChild(img);
  return element;
}

document.body.appendChild(component());