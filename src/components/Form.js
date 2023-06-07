import { useState } from "react"
const Form = (props) => {
    const bosData = {
        firstname: "",
        lastname: "",
        email: "",
        position: ""
    }

    const [uye, setUye] = useState(bosData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUye({ ...uye, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const yeniUye = {...uye, id:props.uyeler.length}
        props.setUyeler([...props.uyeler, yeniUye ]);
        setUye(bosData)
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label >Name:
                    <input
                        type="text" name="firstname" placeholder="Adınızı Giriniz..." onChange={handleChange} value={uye.firstname} />
                </label>

                <label >Surname:
                    <input
                        type="text" name="lastname" placeholder="Soyadınızı Giriniz..." onChange={handleChange} value={uye.lastname} />
                </label>

                <label >Email:
                    <input
                        type="text" name="email" placeholder="Email Giriniz..." onChange={handleChange} value={uye.email} />
                </label>

                <label >Position:
                    <input
                        type="text" name="position" placeholder="Position..." onChange={handleChange} value={uye.position} />
                </label>

                <button type="submit" value="submit">
                    Gönder
                </button>

            </div>
        </form>
    )

    }

export default Form;