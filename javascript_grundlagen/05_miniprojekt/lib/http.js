export const http = {
    /* get: function (url) {
        return fetch(url)
            .then((response) => {
                console.log(response);
                return response.json();
            });
    } */
    get: async function (url) {
        const response = await fetch(url);
        console.log(response);
        return response.json();
    }
}

const info = 234;