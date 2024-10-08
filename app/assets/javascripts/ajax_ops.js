function handle_ajax(event) {
  console.log('DOM fully loaded and parsed');
  const resultsDiv = document.getElementById('results-div');
  const restOpsDiv = document.getElementById('rest-ops');

  //Users
  //list button
  const listUsersButton = document.getElementById('list-users');
  
  //create button
  const createUserButton = document.getElementById('create-user');
  const userName = document.getElementById('user-username');
  const userPassword = document.getElementById('user-password');

  //update button
  const updateUserButton = document.getElementById('update-user');
  const userID = document.getElementById('user-id');
  const userName1 = document.getElementById('user-username1');
  const userPassword1 = document.getElementById('user-password1');

  //delete button
  const deleteUserButton = document.getElementById('delete-user');
  const userDelete = document.getElementById('user-id-delete');



  //Facts
  //list button
  const listFactButton = document.getElementById('list-fact');
  const userFactList = document.getElementById('user-fact-list');

  //create button
  const createFactButton = document.getElementById('create-fact');
  const factID = document.getElementById('user-fact-id');
  const userFact = document.getElementById('user-fact');
  const userLikes = document.getElementById('user-likes');

  //update button
  const updateFactButton = document.getElementById('update-fact');
  const userFactID = document.getElementById('update-user-fact-id');
  const factIDUpdate = document.getElementById('update-fact-id');
  const userFact1 = document.getElementById('user-fact1');
  const userLikes1 = document.getElementById('user-likes1');

  //delete button
  const deleteFactButton = document.getElementById('delete-fact');
  const userFactDelete = document.getElementById('user-fact-id-delete');
  const factDelete = document.getElementById('fact-id-delete');


  
 



  //Url
  const users_path = 'http://localhost:3001/api/v1/users'

  restOpsDiv.addEventListener('click', (event) => {
    if (event.target === listUsersButton) {
      fetch(users_path).then((response) => {
        if (response.status === 200) {
          resultsDiv.innerHTML = '';
          response.json().then((data) => {
            for (let i=0; i<data.length; i++) {
              let parag = document.createElement('P');
              parag.textContent = JSON.stringify(data[i]);
              resultsDiv.appendChild(parag);
            }
          });
        } else {
          alert(`Return code ${response.status} ${response.statusText}`);
        }
      }).catch((error) => {
        console.log(error);
        alert(error);
      });
    } else if (event.target === createUserButton) {
      var dataObject = {
        username: userName.value,
        password: userPassword.value
      }
      fetch(users_path,
        { method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 201) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === updateUserButton) {
      var dataObject = {
        username: userName1.value,
        password: userPassword1.value
      }
      if (dataObject.username === "") {  // blank usernames not supported
        delete dataObject.username;
      }
      if (dataObject.password === "") { // blank passwords not supported
        delete dataObject.password;
      }
      fetch(`${users_path}/${userID.value}`,
        { method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === deleteUserButton) {
      fetch(`${users_path}/${userDelete.value}`,
        { method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === listFactButton) {
      fetch(`${users_path}/${userFactList.value}/facts`).then((response) => {
        if (response.status === 200) {
          resultsDiv.innerHTML = '';
          response.json().then((data) => {
            for (let i=0; i<data.length; i++) {
              let parag = document.createElement('P');
              parag.textContent = JSON.stringify(data[i]);
              resultsDiv.appendChild(parag);
            }
          });
        } else {
          alert(`Return code ${response.status} ${response.statusText}`);
        }
      }).catch((error) => {
        console.log(error);
        alert(error);
      });
    } else if (event.target === createFactButton) {
      var dataObject = {
        fact_text: userFact.value,
        likes: userLikes.value
      }
      fetch(`${users_path}/${factID.value}/facts`,
        { method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 201) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === updateFactButton) {
      var dataObject = {
        fact_text: userFact1.value,
        likes: userLikes1.value
      }
      if (dataObject.fact_text === "") {  // blank fact not supported
        delete dataObject.fact_text;
      }
      if (dataObject.likes === "") { // blank likes not supported
        delete dataObject.likes;
      }
      fetch(`${users_path}/${userFactID.value}/facts/${factIDUpdate.value}`,
        { method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataObject)
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    } else if (event.target === deleteFactButton) {
      fetch(`${users_path}/${userFactDelete.value}/facts/${factDelete.value}`,
        { method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        }
      ).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            resultsDiv.innerHTML = '';
            let parag = document.createElement('P');
            parag.textContent = JSON.stringify(data);
            resultsDiv.appendChild(parag);
          });
        } else {
          response.json().then((data) => {
            alert(`Return code ${response.status} ${response.statusText} ${JSON.stringify(data)}`);
          }).catch((error) => {
            console.log(error);
            alert(error);
          });
        }
      });
    }
  //end
  });
}