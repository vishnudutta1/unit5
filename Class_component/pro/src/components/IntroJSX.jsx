import React from "react";
import './IntroJSX.css'

const IntroJSX = () => {
    return React.createElement('h1',
    {className:'dummyclass'},
    'Hello All')
    //three parameter needs to be pass
    // 1-->what tag we want to render
    // 2-->additional properties like adding id and className to tag
    // 3-->what we want to print   

   // one more way to render is as follow

    // React.createElement('div',
    // {className:'dummyclass'},
    // React.createElement('h1',null,'Hello Everyone'))
}


export default IntroJSX;