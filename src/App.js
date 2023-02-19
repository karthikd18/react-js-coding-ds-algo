import React, { useEffect } from 'react';
import './style.css';

export default function App() {
  let name = 'karthik';

  useEffect(() => {
    //reverseStr(name);
    // maxChars(name);
    //fixBuzz(20)

  //  chunk([1, 2, 3, 4], 2);
    //chunk([1, 2, 3, 4,5,7,8], 3);
  }, []);


  



  const sliceStr =(arr,size)=>{
arr.slice(0,size)
  }
  const chunk = (arr, size) => {
    const newArr = [];
  /* 
    arr.map((i, index) => {
   let last = newArr[newArr.length-1]
   console.log('last',last)
      if (!last || last.length === size) {
        newArr?.push([i]);

      } else {
        last?.push(i)
      } */
    if(arr.length>0){

    }

      console.log('newArr', newArr);
      // });
      return newArr;
  };

  const fixBuzz = (n) => {
    // console.log('n',n)

    for (let i = 0; i <= n; i++) {
      //console.log('i',i)
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizbuzz');
      } else if (i % 3 === 0) {
        console.log('buzz');
      } else if (i % 5 === 0) {
        console.log('fiz');
      } else {
        console.log(i);
      }
    }
  };

  const reverseStr = (str) => {
    let arr = [];
    str.split('').map((item) => {
      arr.unshift(item);
    });

    // console.log(arr.reverse().join().replaceAll(',',''))
    console.log(arr.join().replaceAll(',', ''));
    return arr.join().replaceAll(',', '');
  };

  const maxChars = (str) => {
    let chars = {};
    for (let char of str) {
      chars[char] = chars[char] + 1 || 1;
    }
    var pChar;
    for (let mChar of Object.entries(chars)) {
      pChar = pChar ? (mChar[1] > pChar[1] ? mChar : pChar) : mChar;
    }
    console.log('chars', chars);
    console.log('phars', pChar[0]);
    return chars;
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
