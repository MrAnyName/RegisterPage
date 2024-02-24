import React from 'react';
import ImageUploading from 'react-images-uploading';

import { MdOpenInBrowser } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";

import Styles from "./styles.module.css"

const PhotoUpload = ()=> {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList,);
    setImages(imageList);
  };

  const myFunction = (imageList, onImageUpload) => {
    if (imageList.length < 2) {
      onImageUpload();
    }else {
    }
  };

  return (
    
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >    
        {({
            // hramanner
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className={Styles.myDiv} style={{display:"flex"}} >
            <button className={Styles.myButton}
              
              style={isDragging ? { color: 'red' } : {color:"rgb(11, 132, 127)"}}
              onClick={() => myFunction(imageList, onImageUpload)}
              {...dragProps}
            >
              {<MdOpenInBrowser className={Styles.fileIcs} />}
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div style={{display:"flex",alignItems:"center"}} key={index} className="image-item">
                <img  onClick={() =>  onImageUpdate(index)}src={image['data_url']} alt="" width="100" />
                <div  className="image-item__btn-wrapper">
                <button style={{color:"red"}} onClick={() => onImageRemove(index)}>{<MdOutlineDeleteOutline />}</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default PhotoUpload