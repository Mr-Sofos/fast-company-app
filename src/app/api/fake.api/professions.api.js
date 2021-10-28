export const professionsObject = {
  jsdd: { _id: "67rdca3eeb7f6fgeed471818", name: "JS-разработчик" },
  java: { _id: "67rdca3eeb7f6fgeed471820", name: "Джавист" },
  hr: { _id: "67rdca3eeb7f6fgeed471814", name: "HR-менеджер" },
  engineer: { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
  actor: { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
  sisAdmin: { _id: "67rdca3eeb7f6fgeed471829", name: "Сис. админ." }
}
export const professions = [
  { _id: "67rdca3eeb7f6fgeed471818", name: "JS-разработчик" },
  { _id: "67rdca3eeb7f6fgeed471820", name: "Джавист" },
  { _id: "67rdca3eeb7f6fgeed471814", name: "HR-менеджер" },
  { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
  { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
  { _id: "67rdca3eeb7f6fgeed471829", name: "Сис. админ." }
]
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(professionsObject)
    }, 1000)
  })

export default {
  fetchAll
}
