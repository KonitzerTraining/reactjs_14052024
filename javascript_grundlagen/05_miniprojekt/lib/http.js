export const http = {
/*      get (url) {

        // ES6
        return fetch(url, { method: 'GET'}) // gibt ein Promise zurück
            .then((response) => {
                console.log(response);
                return response.json(); // gibt auch ein Promise zurück
            });
    }, */
    post: function () {},

    // ES 8
    async get (url) {
        const response = await fetch(url);
        console.log(response);
        return response.json();  // gibt ein Promise zurück
    }
}

// const info = 234;