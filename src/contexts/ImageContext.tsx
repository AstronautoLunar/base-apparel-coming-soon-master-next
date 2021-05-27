import { createContext, useState, useContext } from 'react';

type ImageContextData = {
    image: boolean,
    setImage: any;
}

const ImageContext = createContext({} as ImageContextData);

export function ImageProvider({ children }) {
    let [ image, setImage ] = useState(false);

    return (
        <ImageContext.Provider value={{ image, setImage }}>
            { children }
        </ImageContext.Provider>
    )
} 

export function useImage() {
    return useContext(ImageContext);
}