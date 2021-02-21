
const nposts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  ];

  const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  ];



  function getPostById(id){
    return new Promise((resolve, reject) => {
        const post = nposts.find(post => post.id == id);

        if(post){
            resolve(post);
        }else{
            rejects(Error("post yok"))
        }
    })
  }

  getPostById(2)
  .then(post => {
      console.log(post)
  })