import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./style.css"
const fileTypes = ["JPEG", "PNG", "GIF"];

export function Upload() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <>
            <div className="drag">
                <h1>Hello To Drag & Drop Files</h1>
                <FileUploader
                    // multiple={true}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                />
                <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
            </div>
        </>

    );
}
