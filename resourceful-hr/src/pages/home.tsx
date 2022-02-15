import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IImage } from "../models/models";
import albumService from "../services/api";
import { RootState } from "../stores/store";
import { requestAlbum, loadAlbum } from "../stores/slices/album";
import { useDispatch, useSelector } from "react-redux";
import ImageViewer from "../components/imageViewer/imageViewer";

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [imagesList, setImagesList] = useState<string[] | []>([]);
    const { album } = useSelector((state: RootState) => state.Album)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    /**
     * Load Album Data on Page load
     */
    useEffect(() => {
        requestAlbum();
        albumService.getApi()
            .then((res) => {
                let imageList: string[] = [];
                for (const item of res.data) {
                    const image = item.url;
                    imageList.push(image)
                }
                setImagesList(imageList);
                dispatch(loadAlbum(res.data));
            })
    }, [])
    // opent the image viewer component
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    // close the image viewer component
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    //navigate to the uplaod Page to upload the video
    const navigateToUpload = () =>{
        let path = 'upload'
        navigate(path);
    }
    return (
        <>
            <div className="header"></div>
            <div className="uploadFile">
                <div className="uploadButton" onClick={navigateToUpload}>
                    Go to Upload Page
                </div>
            </div>
            
            <div className="home">

                {
                    album.map((image: IImage, index) => {
                        return (
                            <div key={index} className='imageContainer'>
                                <img
                                    src={image.thumbnailUrl}
                                    onClick={() => openImageViewer(index)}
                                ></img>
                            </div>
                        )
                    })
                }
                {isViewerOpen && (
                    <ImageViewer
                        src={imagesList}
                        currentIndex={currentImage}
                        onClose={closeImageViewer}
                        disableScroll={false}
                        backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.9)"
                        }}
                        closeOnClickOutside={true}
                    />
                )}

            </div>
        </>
    )
}