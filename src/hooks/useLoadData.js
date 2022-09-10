import { useEffect, useState } from "react";

const useLoadData = (params) => {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch(params)
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[params]);
    return [datas, setDatas];
};

export default useLoadData;