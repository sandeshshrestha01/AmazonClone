function fetchData(url){
    return  fetch(url)
      .then((res) => res.json())
      .then((responce) => {
        // if (data.status === "success") {
        return responce.data; 
       
      })
  };
export default fetchData;