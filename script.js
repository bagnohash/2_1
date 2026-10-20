(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')
  const select = document.getElementById('select')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", async function () {
    answer.textContent = 'Loading...';
    
    const selectValue = select.value;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${selectValue}`);
    const json = await response.json();

    let result = `<h3 id='${json.id}'>${json.title}</h3> <p>${json.body}</p>`;
    
    answer.innerHTML = result;
  })

  cw2.addEventListener("click", function () {
    //TODO
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
