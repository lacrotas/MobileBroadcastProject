import "./CustomInputFile.scss";

export default function CustomInputFile({ handleImageChange }) {
    return (
        <div className="file-input-container">
            <input type="file" id="fileInput" className="file-input" onChange={handleImageChange} />
            <label htmlFor="fileInput" className="custom-button">Выберите файл</label>
        </div>
    )
}