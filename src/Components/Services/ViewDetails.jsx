import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AddViewDetail from "./AddViewDetail";

const ViewDetails = () => {
    const [details , setDetails] = useState({});
    const {id} = useParams();
    const viewServie = useLoaderData();
    console.log(viewServie, id)
    useEffect(()=>{
        const findService = viewServie?.find(loader => loader.id == id)
        setDetails(findService)
    },[id, viewServie])
    return (
        <div>
            <AddViewDetail details= {details}></AddViewDetail>
        </div>
    );
};

export default ViewDetails;