import React from "react";

function Form() {

    const [formData, changeFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly : true
        }
    )



    const handleChange = (e) => {
        const {name , value, type, checked } = e.target
        changeFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)

    }



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder="comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input
                type ="checkbox"
                name = "isFriendly"
                checked = {formData.isFriendly}
                onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    )
}

export default Form