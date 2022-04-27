window.addEventListener('load', () => {
    const input = document.getElementById('search');
    const main = document.getElementById('main');
    const form = document.getElementById('form');
    const apiUrl = 'https://api.github.com/users/';


    function getUser(username) {
        fetch (apiUrl + username)
            .then(response => {return response.json()})
            .then(data => createUserCard(data))
            .catch(err => console.log(err))
    }

    function createUserCard (user) {
        main.innerHTML = `
        <section  class="section-form-pro">
        <div class="div-image">
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            <div class="div-img-text">
                <h2>User Name: ${user.name ? user.name : 'No tiene nombre'}</h2>
                <p> Bio: ${user.bio ? user.bio : 'No tiene bio'} </p>
                <p>Followers: ${user.followers? user.followers : 'No tiene Followers'} </p>
                <p>Followings: ${user.followings? user.followings : 'No tiene Followings'} </p>
                <p>Public repos: ${user.public_repos ? user.public_repos : 'No tiene repositorios publicos'} </p>
            </div>
        </div>    
    </section>
        `
    }

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        let user = input.value;
        if (user) {
            getUser(user);
            input.value = ''
        }
    })
})

