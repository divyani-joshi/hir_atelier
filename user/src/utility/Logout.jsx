import cookie from "js-cookie"

function Logout() {

    try {

        cookie.remove("token");
        alert("Logout successfull...")
        window.location.href = "/login";
    } catch (e) {
        window.location.href = "/";
    }
}
export default Logout;