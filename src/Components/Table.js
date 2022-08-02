import { Table } from 'antd';

function VideoInfo(props) {
    //return table with data from props
    const info = props.data.Links;

    return (<div>
        <table>
            <thead>
                <tr>
                    <th>Published</th>
                    <th>Title</th>
                    <th>Source</th>
                    <th>SourceType</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>

                {
                    info.map(stuff => {
                        //convert Publishedts date from UNIX timestamp to readable date and time
                        var date = new Date(stuff.Publishedts * 1000);
                        var dateString = date.toLocaleString();
                        return (
                            <tr key={stuff.ID}>
                                <td>{dateString}</td>
                                <td>{stuff.Title}</td>
                                <td>{stuff.Source}</td>
                                <td>{stuff.SourceType}</td>
                                <td>
                                    <a href={stuff.URL} target="_blank" rel="noreferrer">{stuff.URL} </a>
                                </td>
                            </tr>
                        )
                    })
                }</tbody>
        </table>
    </div>);
}


export default VideoInfo;
