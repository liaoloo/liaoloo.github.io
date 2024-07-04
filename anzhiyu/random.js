var posts=["2024/07/03/Hexo-anzhiyu-Github博客，启动！/","2024/07/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };