// import React, { useEffect, useState } from "react";
// import firebase from "./firebase";

// function App ()  {
//     const [schools, setSchools] = useState([]);
//     const [loading, setLoading] = useState([false]); 

//     const ref = firebase.firestore().collection("Schools"); //change variable names and data source

//     // function getData()  {
//     //     setLoading(true);
//     //     ref.onSnapshot((querySnapshot) => {
//     //         const items = [];
//     //         querySnapshot.forEach((doc) => {
//     //             items.push(doc.data());
//     //         });
//     //         setSchools(items);
//     //         setLoading(false);
//     //     })
//     // }
//     // this is a constant refreshing way to get data

//     function getData2()  {
//         setLoading(true);
//         ref.get(),then((items) => {
//             const items = items.docs.map((doc) => doc.data());
//             setSchools(items);
//             setLoading(false);
//         });
//     }
//     //this is the static getData for showing

//     useEffect(() => {
//         // getData();
//         getData2();
//     }, [])

//     if(loading) {
//         return <h1>Loading...</h1>;
//     }

//     return (
//     <div>
//         <h1>Schools</h1>
//         {schools.map((school) => (
//             <div key={school.id}>
//                 <h2>{school.title}</h2>
//                 <p>{School.decs}</p>
//             </div>
//             ))}
//     </div>
//     );
    
// }

// export default App;