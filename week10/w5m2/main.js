import { CookieUtil } from "./cookieUtil.js"

// console.log(document.cookie)
// document.cookie=`theme=dark;expiers=${new Date(2025,9,15)}`
// console.log(document.cookie)

// document.cookie = "font-size=14px;max-age=60"
// console.log(document.cookie)
// document.cookie = "theme=light"
// document.cookie = "color=warm"
// console.log(document.cookie)

// console.log(CookieUtil.get("theme=light"))
// console.log(CookieUtil.get("color=warm"))

// CookieUtil.set('cardID','abc123',new Date(2025,9,20))
// console.log(CookieUtil.get("cardID"))
// console.log(document.cookie)

// CookieUtil.unset("color")
// console.log(document.cookie)

//localStorage
let counter = localStorage.getItem("count")
if(counter === null) localStorage.setItem("count",1)
else localStorage.setItem("count",++counter)
alert(counter)