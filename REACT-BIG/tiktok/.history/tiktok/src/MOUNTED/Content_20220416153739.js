import React, { useEffect, useState } from "react";
const tabs = ["posts", "comments", "albums"];
// 1. useEffect (callback)
//- gọi call back mỗi khi component re-render
//- gọi callback sau khi component đc thêm  vào dom. tức là lúc đầu nó vẫn chạy useEFect trước nhưng để đó, sau đó xử lý để đưa ele vào dom rồi nó mới quay lại back giá trị của useEFFECT
// 2. useEffect (callback, [])
// - chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect (callback, [deps])

//---------
// 1. callback luôn luôn được gọi sau khi component mounted
// const Content = () => {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");
//   // console.log(type);
//   const [showGoToTop, setShowGoToTop] = useState(false);
//   //1 .call api ở trường hợp chỉ có callback

//   //   useEffect(() => {
//   //     //  fetch("https://jsonplaceholder.typicode.com/posts")
//   //     //    .then((response) => response.json())
//   //     //    .then((posts) => {
//   //     //      //dữ liệu được trả về được set là posts
//   //     //      setPosts(posts);
//   //     //    });

//   //   });

//   // 2. call api ở trường hợp 2 có call back và đối số thứ 2 có ràng buộc

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((response) => response.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);

//   //USEEFFECT WITH DOM EVENT
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 200) {
//         setShowGoToTop(true);
//       } else {
//         setShowGoToTop(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     console.log("add event listener");

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       console.log("remove event listener");
//     };
//   }, []);

//   return (
//     <div>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           style={
//             type === tab
//               ? {
//                   color: "#fff",
//                   backgroundColor: "#333",
//                 }
//               : {}
//           }
//           onClick={() => setType(tab)}
//         >
//           {tab}
//         </button>
//       ))}
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}> {post.title || post.name}</li>
//         ))}
//       </ul>
//       {showGoToTop && (
//         <button style={{ position: "fixed", right: 20, bottom: 20 }}>
//           go to top
//         </button>
//       )}
//     </div>
//   );
// };
//================== resize ============//
// function Content() {
//   const [width, setWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <div className="">
//       <h1>{width}</h1>
//     </div>
//   );
// }
//================= SET INTERVAL - SET TIMEOUT ===============//
// function Content() {
//   const [countDown, setCountDown] = useState(180);

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setCountDown((prevSate) => prevSate - 1);
//       console.log("countdown...");
//     }, 1000);

//     //thằng return này là clean up function nó sẽ được gọi trước khi component unmount => khi bấm toggle lần nữa để tắt thì hàm này sẽ gọi và nó sẽ clearinterval, và component mới bị unmount => hàmko gọi nữa
//     return () => {
//       clearInterval(timerId);
//     };
//   }, []);

//   // //khi mỗi lần countdown được set thì nó sẽ re-render lại 1 lần, giá trị coundown sẽ bị trừ đi 1, lấy giá trị đó đưa vào mảng dependencies, khi giá trị trong dependencies thay đổi thì nó sẽ gọi lại call back trong useEffect
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setCountDown(countDown - 1);
//   //     console.log("coundown", countDown);
//   //   }, 1000);
//   // }, [countDown]);

//   return (
//     <div className="">
//       <h1>{countDown}</h1>
//     </div>
//   );
// }
//================= USEEFFECT WITH PREVIEW AVATAR ===============//

function Content() {
  const [ava, setAva] = useState();
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    console.log(URL.createObjectURL(file));
  };
  useEffect(() => {});
  return (
    <div className="">
      <input type="file" onChange={handlePreviewAvatar} />
    </div>
    {ava && (
      <img src="" alt="" />
    )}
  );
}
export default Content;
