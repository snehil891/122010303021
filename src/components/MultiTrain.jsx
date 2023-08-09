import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';

function MultiTrain() {
    const[trainDetaillist,setDetails ]=useState(null)
    useEffect(() =>{
        getdetails()
    },[])
    const getdetails = () =>{
        fetch("http://20.244.56.144:80/train/trains")
        .then(res => res.json)
        .then((response)=>{
            setDetails(response)
        },
        (error) =>{
            setDetails(null)
        })
    }
    if(!trainDetaillist) return (<div>Train Details not found</div>)
    return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Train Name</th>
          <th>Train Number</th>
          <th>Departure Time</th>
          <th>Seats Available</th>
          <th>Price</th>
          <th>Delayed By</th>
        </tr>
      </thead>
      <tbody>
        {trainDetaillist.map(detail =>(
            <tr>
                <td key={detail.trainName}></td>
                <td key={detail.trainNumber}></td>
                <td key={detail.departureTime}></td>
                <td key={detail.seatsAvailable}></td>
                <td key={detail.price}></td>
                <td key={detail.delayedBy}></td>
            </tr>
        ) )}
      </tbody>
    </Table>
  );
}

export default MultiTrain;