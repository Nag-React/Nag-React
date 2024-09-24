
import React, {useEffect} from "react";
import Loading from './Loading';
const margin = {
    margin: "25px",
width:'90%',

}
const About = () => {
  const [data, setData] = React.useState([]);
    const [filter, setFilter] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

  const getData = async () => {
    setLoading(true);
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //  setData(await response.json());
    setData(await (await fetch("https://jsonplaceholder.typicode.com/posts")).json());
     
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((value) => value.userId === 1);
    setFilter(filtered);
  }, [data]);

  return (
    <>
    {loading && <Loading />}
    
      <h2>Welcome About Us</h2>
      <div className="tables">
      <table className="table-bordered table-striped table" style={margin}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filter.map((value, index) => (
            <tr>
              <td>{value.userId}</td>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default About;
