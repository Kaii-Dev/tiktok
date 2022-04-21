import React, { useEffect, useState } from "react";
const tabs = [ 'posts', 'comments', 'albums' ]
// 1. useEffect (callback)
//- gọi call back mỗi khi component re-render
//- gọi callback sau khi component đc thêm  vào dom. tức là lúc đầu nó vẫn chạy useEFect trước nhưng để đó, sau đó xử lý để đưa ele vào dom rồi nó mới quay lại back giá trị của useEFFECT
// 2. useEffect (callback, [])
// - chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect (callback, [deps])

//---------
// 1. callback luôn luôn được gọi sau khi component mounted
const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  //1 .call api ở trường hợp chỉ có callback

  //   useEffect(() => {
  //     //  fetch("https://jsonplaceholder.typicode.com/posts")
  //     //    .then((response) => response.json())
  //     //    .then((posts) => {
  //     //      //dữ liệu được trả về được set là posts
  //     //      setPosts(posts);
  //     //    });

  //   });

  // 2. call api ở trường hợp 2 có call back và đối số thứ 2

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  //3. dùng đối số thứ 2 có dependencies

  return (
    <div>
    {tabs.map()}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
