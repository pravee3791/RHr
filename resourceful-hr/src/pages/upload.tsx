import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import FileUploader from "../components/fileUploader/fileUploader";
import AWS from 'aws-sdk'

const S3_BUCKET = 'rh-resourcefulhumans';
const REGION = 'us-west-2';


AWS.config.update({
    accessKeyId: ' ',
    secretAccessKey: ''
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})

function Upload() {
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [progress, setProgress] = useState(0);
    const [isFileUploading, setIsFileUploading] = useState(false);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const navigate = useNavigate();
    const submitForm = (e: any) => {
        e.preventDefault();
        const fileName = selectedFile.name;
        const params = {
            ACL: 'public-read',
            Body: selectedFile,
            Bucket: S3_BUCKET,
            Key: fileName
        };
        setIsFileUploading(true)
        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                let percentage = Math.round((evt.loaded / evt.total) * 100)
                setProgress(percentage)
                if (percentage === 100) {
                    setIsFileUploading(false);
                    setIsFileUploaded(true);
                }
            })
            .send((err) => {
                if (err) console.log(err)
            })
    };
    const navigateHome = () => {
        navigate('/');
    }

    return (

        <div>
            <div className="header" onClick={navigateHome}></div>
            <div className="uploadFileHeader">
                <div className="uploadText">Upload the File to AWS S3</div>
            </div>
            <div className="uploadFormContainer">
                {(!isFileUploading && !isFileUploaded) && <form action="">
                    <FileUploader
                        onFileSelectSuccess={(file: any) => setSelectedFile(file)}
                        onFileSelectError={({ error }: { error: any }) => alert(error)}
                    />

                    <button className="uploadButton" onClick={submitForm}>Upload</button>
                </form>
                }

                {
                    isFileUploaded &&
                    <div className='successMessage'>
                        File Successfully Uploaded.
                    </div>
                }
                {isFileUploading &&
                    <div className="progessBarContainer">
                        <Progress
                            percent={progress}
                            status="default"
                            theme={
                                {
                                    default: {
                                        symbol: progress + '%',
                                        // trailColor: '#27a9e0',
                                        color: '#27a9e0'
                                    }
                                }
                            }


                        />
                    </div>
                }
            </div>


        </div>
    )
}

export default Upload;