import { professionsObject as professions } from "./professions.api"
const qualities = {
  tedious: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "Нудила",
    color: "primary"
  },
  strange: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "Странный",
    color: "secondary"
  },
  buller: {
    _id: "67rdca3eeb7f6fgeed4711012",
    name: "Троль",
    color: "success"
  },
  alcoholic: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "Алкоголик",
    color: "danger"
  },
  handsome: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Красавчик",
    color: "info"
  },
  uncertain: {
    _id: "67rdca3eeb7f6fgeed471103",
    name: "Неуверенный",
    color: "dark"
  }
}

const users = [
  {
    _id: "67rdca3eeb7f6fgeed471815",
    name: "Мухаммад Тазбиев",
    profession: professions.jsdd,
    qualities: [qualities.strange],
    completedMeetings: 36,
    rate: 5,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    name: "Висхан Музагов",
    profession: professions.jsdd,
    qualities: [qualities.buller, qualities.handsome, qualities.strange],
    completedMeetings: 15,
    rate: 5,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    name: "Лилия Зилюкина",
    profession: professions.jsdd,
    qualities: [qualities.buller],
    completedMeetings: 247,
    rate: 5,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed471818",
    name: "Геннадий Магомаев",
    profession: professions.jsdd,
    qualities: [qualities.uncertain],
    completedMeetings: 148,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed471819",
    name: "Мария Балакина",
    profession: professions.hr,
    qualities: [qualities.strange, qualities.tedious],
    completedMeetings: 37,
    rate: 4,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed471820",
    name: "Алексей Иванов",
    profession: professions.java,
    qualities: [qualities.strange, qualities.uncertain],
    completedMeetings: 147,
    rate: 3,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed471821",
    name: "Ислам Музагов",
    profession: professions.jsdd,
    qualities: [qualities.strange, qualities.tedious],
    completedMeetings: 72,
    rate: 4.5,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed471822",
    name: "Адольф Гитлер",
    profession: professions.engineer,
    qualities: [qualities.tedious, qualities.buller],
    completedMeetings: 72,
    rate: 1,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed471823",
    name: "Гомер Симпсон",
    profession: professions.actor,
    qualities: [qualities.strange, qualities.uncertain],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed471824",
    name: "Сайтама",
    profession: professions.actor,
    qualities: [qualities.handsome, qualities.buller],
    completedMeetings: 17,
    rate: 4.5,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed47181f",
    name: "Геральд из Ривии",
    profession: professions.actor,
    qualities: [qualities.uncertain, qualities.strange],
    completedMeetings: 434,
    rate: 3.5,
    bookmark: false
  },
  {
    _id: "67rdca3eeb7f6fgeed47181r",
    name: "Михаил Данилов",
    profession: professions.sisAdmin,
    qualities: [qualities.handsome],
    completedMeetings: 434,
    rate: 5,
    bookmark: false
  }
]
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users))
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("users")))
    }, 2000)
  })

const update = (id, data) =>
  new Promise((resolve) => {
    const users = JSON.parse(localStorage.getItem("users"))
    const userIndex = users.findIndex((u) => u._id === id)
    users[userIndex] = { ...users[userIndex], ...data }
    localStorage.setItem("users", JSON.stringify(users))
    resolve(users[userIndex])
  })

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("users")).find(
          (user) => user._id === id
        )
      )
    }, 1000)
  })

export default {
  fetchAll,
  getById,
  update
}
