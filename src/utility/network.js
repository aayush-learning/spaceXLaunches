 const fetchData = async (url, method) => {
    const res = await fetch(url, {method: method});
    return res; 
 }

 export {fetchData};