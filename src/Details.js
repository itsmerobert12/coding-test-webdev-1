import axios from "axios";
import { useState } from "react";
import Moment from "react-moment";
import "./App.css";
import Preview from "./Preview";

//create function for details of videos
// eslint-disable-next-line no-unused-vars
let initialValues = {
    Title: "",
    SourceTimestamp: "",
    FullDescription: "",
    ThumbURL: "",
    Source: "",
    SourceChannelUrl: "",
    SourceChannelName: "",
};

function Details({ data, apiBaseUrl, authHdr }) {
    const [modalState, setModalState] = useState(false);
    const [selectedDetails, setSelectedDetails] = useState([]);

    const handleClick = (ID) => {
        axios
            .get(`${apiBaseUrl()}/link/${ID}`, authHdr())
            .then(function (response) {
                setSelectedDetails(response.data);
            })
            .catch((err) => console.err);

        toggleModalState();
    };

    const toggleModalState = () => {
        setModalState(!modalState);
    };

    return data.Links.sort((a, b) =>
        a.Publishedts > b.Publishedts ? 1 : -1
    ).map((data) => {
        return (
            <tr
                className="table-row"
                key={data.ID}
                onClick={() => handleClick(data.ID)}
            >
                <td className="table-data" id="time">
                    {" "}
                    {<Moment unix> {data.Publishedts} </Moment>}{" "}
                </td>{" "}
                <td className="table-data"> {data.Title} </td>{" "}
                <td className="table-data"> {data.Source} </td>{" "}
                <td className="table-data"> {data.SourceType} </td>{" "}
                <td className="table-data">
                    <a href={data.URL} target="_blank" rel="noreferrer noopener">
                        {" "}
                        {data.URL}{" "}
                    </a>{" "}
                </td>{" "}
                <Preview
                    modalState={modalState}
                    selected={selectedDetails}
                    toggleModalState={toggleModalState}
                />{" "}
            </tr>
        );
    });
}

export default Details;
