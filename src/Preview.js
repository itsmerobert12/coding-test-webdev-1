import ".App.css";
import Moment from "react-moment";


//write function that create modal preview

function Preview({ closePreview, data }) {
    return (
        <div className="preview-background">
            Details
            <div className="preview-container"></div>
            <button onClick={() => closePreview()}>Close</button>
            <div className="preview-title"><h1>{data.Title}</h1></div>
            <div className="preview-body">
                <p>{<Moment unix>{data.Publishedts}</Moment>}</p>
                <p>{data.Source}</p>
            </div>
            <div className="preview-footer"></div>
        </div>
    );
}

export default Preview;
