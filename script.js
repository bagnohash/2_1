(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", async function () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();

    let result = "<ul>";

    json.map(post => {
        result += `<li id='${post.id}'>${post.title}: ${post.body}</li>`
    })

    result += "</ul>";

    answer.innerHTML = result;
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
