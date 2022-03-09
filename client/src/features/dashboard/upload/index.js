import axios from "axios";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Swal from "sweetalert2";
import { URL } from "../../../helpers";
import "./style.css"
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
const fileTypes = ["JPEG", "PNG", "GIF"];

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export function Upload() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false)
    let [color] = useState("#ffffff");

    const handleChange = async (value) => {
        setFile(value);
        const formdata = new FormData();
        formdata.append("file", value)
        setLoading(true)
        try {
            const res = await axios.post(URL + "/upload", formdata, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            Swal.fire({
                icon:"success",
                title: "Uploaded Successfully",
                text: "Your file has been uploaded successfully"
            })
        } catch (err) {
            Swal.fire(
                {
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong"
                }
            )
        }

        setLoading(false)
    };
    return (
        <>{
            !loading &&
            <div className="drag">
                <>   <h1>Hello To Drag & Drop Files</h1>
                    <FileUploader
                        // multiple={true}
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                    />
                    <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
                </>


            </div>
        }
            <ClipLoader color={color} loading={loading} css={override} size={150} />

        </>

    );
}
