import React, {  useState } from 'react'


const FileUploader = ({ onFileSelectSuccess, onFileSelectError }: { onFileSelectSuccess: any, onFileSelectError: any }) => {
    const [fileName, setFileName] = useState('');
    const handleFileInput = (e: any) => {
        const file = e.target.files[0];
        if (file.size > 52428800)
            onFileSelectError({ error: "File size cannot exceed more than 50MB" });
        else { 
            setFileName(file.name)
            onFileSelectSuccess(file)
        };
    }
    return (
        <div className="fileUploader">
            <label htmlFor="file-upload" className="uploadButton">
                Select Video 
            </label>
            <span>{fileName}</span>
            <input id="file-upload" type="file" accept="video/*" onChange={handleFileInput} />
        </div>

    )
}
export default FileUploader;
