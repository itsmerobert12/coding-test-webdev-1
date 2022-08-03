import axios from "axios";
import Moment from "react-moment";
import "./App.css";

//create function for details of videos
function Details({
    data,
    modalState,
    toggleModalState,
    selectedDetails,
    setSelectedDetails,
    apiBaseUrl,
    authHdr,
}) {
    const handleClick = (ID) => {
        axios.get(`${apiBaseUrl()}/link/${ID}`, authHdr())
            .then(function (response) {
                setSelectedDetails(response.data);
            })
            .catch((err) => console.err);
        toggleModalState();
    };

    return data.Links.sort((a, b) =>
        a.Publishedts > b.Publishedts ? 1 : -1
    ).map((data) => {
        return (
            <tr
                className="table-row"
                key={data.ID}
                onClick={() => handleClick(data.ID) && toggleModalState()}>
                {
                    <div className={`previewBackground previewShowing-${modalState}`}>
                        <div className="previewInside">
                            <div className="previewText">
                                <button onClick={toggleModalState}>Close</button>
                                <h2>{selectedDetails.Title}</h2>
                                <p>{selectedDetails.SourceTimestamp}</p>
                                <p>{selectedDetails.FullDescription}</p>
                                <p>{selectedDetails.ThumbURL}</p>
                                <p>{selectedDetails.Source}</p>
                                <p>{selectedDetails.SourceChannelName}</p>
                            </div>
                        </div>
                    </div>
                }
                <td className="table-info">
                    {<Moment unix>{data.Publishedts}</Moment>}
                </td>
                <td className="table-info">{data.Title}</td>
                <td className="table-info">{data.Source}</td>
                <td className="table-info">{data.SourceType}</td>
                <td className="table-info">
                    <a href={data.URL} target="_blank" rel="noreferrer noopener">
                        {data.URL}
                    </a>
                </td>
            </tr>
        );
    });
}

export default Details;