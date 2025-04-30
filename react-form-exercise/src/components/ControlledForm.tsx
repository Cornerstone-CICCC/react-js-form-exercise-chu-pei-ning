import { ChangeEvent, useState } from "react"

type FormData = {
  firstname: string,
  lastname: string,
  age: number,
  favoriteFoods: string[]
}

const ControlledForm = () => {
  const [isShow, setIsShow] = useState<Boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    age: 0,
    favoriteFoods: [],
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prevState => {
      const updateFavoriteFoods = checked ? [...prevState.favoriteFoods, value] : prevState.favoriteFoods.filter(food => food !== value)
      return {
        ...prevState,
        favoriteFoods: updateFavoriteFoods
      }
    })
  }

  const handleDisplay = () => {
    setIsShow(true)
  }

  const handleClean = () => {
    setFormData({
      firstname: '',
      lastname: '',
      age: 0,
      favoriteFoods: []
    })
  }

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input 
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              checked={formData.favoriteFoods.includes("Chicken")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input 
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              checked={formData.favoriteFoods.includes("Beef")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input
              type="checkbox" 
              id="vegetables" 
              name="favoriteFoods" 
              value="Vegetables" 
              checked={formData.favoriteFoods.includes("Vegetables")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              id="dessert" 
              name="favoriteFoods" 
              value="Dessert" 
              checked={formData.favoriteFoods.includes("Dessert")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              id="pork" 
              name="favoriteFoods" 
              value="Pork" 
              checked={formData.favoriteFoods.includes("Pork")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleDisplay}>Display User</button>
      <button onClick={handleClean}>Clear</button>

      <div className="output">
      {isShow 
            ? `Hello ${formData.firstname} ${formData.lastname}. You are ${formData.age} years old and your favorite foods are: ${formData.favoriteFoods.join(',')}.`
            : ''}
      </div>
    </div>
  )
}

export default ControlledForm