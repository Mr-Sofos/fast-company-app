import React, { useEffect, useState } from "react"
import { useHistry, useParams } from "react-router-dom"
import { validator } from "../../../utils/validator"
import api from "../../../api"
import TextField from "../../common/form/TextField"
import SelectField from "../../common/form/SelectField"
import RadioField from "../../common/form/RadioField"
import MultiSelectField from "../../common/form/MultiSelectField"

const EditUserPage = () => {
  const { userId } = useParams()
  const history = useHistry()
  const [isLoading, setIsLoading] = useState(false, false)
  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
    sex: "",
    qualities: []
  })
  const [professions, setProfessions] = useState([])
  const [qualities, setQualities] = useState({})
  const [errors, setErrors] = useState({})

  const getProfessions = (id) => {
    for (const prof in professions) {
      const profData = professions[prof]
      if (profData._id === id) {
        return profData
      }
    }
  }
  const getQualities = (elements) => {
    const qualitiesArray = []
    for (const elem of elements) {
      for (const qualy in qualities) {
        if (elem.value === qualities[qualy]._id) {
          qualitiesArray.push(qualities[qualy])
        }
      }
    }
    return qualitiesArray
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    const { professions, qualities } = data
    api.users
      .update(userId, {
        ...data,
        profession: getProfessionById(profession),
        qualities: getQualities(qualities)
      })
      .then((data) => history.push(`/users/${data._id}`))
    console.log(data)
  }
  useEffect(() => {
    setIsLoading(true)
    api.users.getById(userId).then(({ profession, ...data }) =>
      setData((prevState) => ({
        ...prevState,
        ...data,
        profession: profession._id
      }))
    )
    api.qualities.fetchAll().then((data) => setQualities(data))
    api.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  return null
}

export default EditUserPage
