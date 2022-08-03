import Moment from "react-moment";

//write function that create modal preview

function Preview({ modalState, toggleModalState, selected }) {
    return (
        <div className={`previewBackground previewInfo-${modalState}`}>
            <div className="previewIn">
                <span>
                    <button onClick={() => toggleModalState()}>Close</button>
                </span>
                <div className="previewText">
                    <h2>{selected.Title}</h2>
                    <p className="previewTimestamp">
                        {<Moment>{selected.SourceTimeStamp}</Moment>}
                        {selected.Source}
                    </p>
                    <a href={selected.SourceChannelUrl} target="_blank" rel="noreferrer">
                        <span>{selected.SourceChannelName}</span>
                    </a>
                    <p className="modal">{selected.FullDescription}</p>
                    <img src={selected.ThumbURL} alt="Video-img" />
                </div>
            </div>
        </div>
    );
}

export default Preview;
