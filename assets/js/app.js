//Es una Api que funciona para hacer una peticion de un usuario en especifico

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); //Aqui entiendo que lo que se busca sera con un id, por lo cual puse #name
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //Coloque el async, para que funcionara como una funcion asincrona 
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); //Aqui se utiliza awit, pero para poder utilizarlo como funcion asincrona hace falta el async
  console.log(data);
  $n.textContent = `${data.name}`; //En este pundo utilizamos el apostrofe grave, para que nos pueda realizar la interpolacion, ya que sino,nos marca como un string
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);