'use client'
import { useRef, useState } from 'react';
import classes from './Image-picker.module.css';
import Image from 'next/image';
export default function ImagePicker({label, name}) {
    const imageRef = useRef();
    const [pickedImage, setPickedImage] = useState();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file){
            setPickedImage(null);
            return;
        }

        const reader =new FileReader();
        reader.onload = () => {
            setPickedImage(reader.result)
        }
        reader.readAsDataURL(file)
       
    }

    const handlePickClick = () => {
        imageRef.current.click();

    }
    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No Image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt="image selected by user" fill/>}
            </div>
            <input className={classes.input}type='file' id="image" accept='image/png, image/jpeg' name={name}  ref={imageRef} onChange={handleImageChange} required/>
            <button onClick={handlePickClick}type='button' className={classes.button}>Pick an Image</button>

        </div>
    </div>
}