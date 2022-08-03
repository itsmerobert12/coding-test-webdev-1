import Moment from 'react-moment';


//create a table with the data from the api and display it on the page using an array of objects using antd
const TableComponent = ({ data }) => {


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
                            return (
                                <tr key={stuff.ID}>
                                    <td><Moment unix>{stuff.Publishedts}</Moment></td>
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

    return (
        <div>
            <VideoInfo data={data} />
        </div>
    )
}


export default TableComponent;