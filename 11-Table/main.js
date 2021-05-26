function fetchdata() {
    fetch("https://reqres.in/api/users/").then(resp => resp.json()).then(data => {
        const html = data.data.map(user => {
            return (
                `<tr>
                <td class="srno">${user.id}</td>
                <td  class="brand">${user.first_name}</td>
                <td class="cat">${user.last_name}</td>
                <td class="prod">${user.first_name}</td>
                <td class="mobno">${user.email}</td>
                </tr>`)
            }).join("");
        document.querySelector(".tab").insertAdjacentHTML("beforeend", html);
    })
}

fetchdata();

const btn = document.querySelector(".btn");
const cont = document.querySelector(".container");
btn.addEventListener("click", () => {
    cont.classList.toggle("darkmode");
})