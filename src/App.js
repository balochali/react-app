import "./App.css";
import React, { useState } from "react";
import SearchFunctionality from "./component/SearchFunctionality";

const prm1 = document.currentScript.dataset.param1;

let my_api_key;


if (prm1 !== "") {
  my_api_key = prm1;
} 

let query;
let maintainancemode; 

const seach_contex = my_api_key;
fetch(process.env.REACT_APP_WEB_URL).then(res => {
  res.json().then(response =>{
    maintainancemode = response.result[0].maintainancemode
    query = response.result[0].maxquery
    console.log("This is response", response)
  })
})


function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type="text"
        id="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchFunctionality searchData={search} indexName={seach_contex} maintainance= {maintainancemode} query={query}/>
    </>
  );
}

export default App;
