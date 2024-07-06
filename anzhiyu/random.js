var posts=["undefined/undefined/undefined/Hexo-anzhiyu-Github博客，启动！/","undefined/undefined/undefined/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };