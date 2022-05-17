import React, { useRef } from 'react'
import styles from './image_file_input.module.css'

// const onFileChange = file => {
//   console.log(file);
//   setFile({
//     fileName: file.name,
//     fileURL: file.url
//   })
// }
function ImageFileInput({ imageUploader, name, onFileChange }) {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }
  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);

    console.log(uploaded);
    
    // 함수에다가 파라미터로 name과 url을 보냄.
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
    
  }

  return <div className={styles.container}>
    <input className={styles.input} type="file" accept="image/*" name="file" ref={inputRef} onChange={onChange} />
    <button className={styles.button} onClick={onButtonClick}>
      {name || 'No file'}
    </button>
  </div>
}

export default ImageFileInput