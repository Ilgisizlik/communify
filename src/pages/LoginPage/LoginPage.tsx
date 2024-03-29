import React, { useState } from 'react';
//components
import PrimaryButton from '../../components/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../components/Buttons/SecondaryButton/SecondaryButton';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    });

    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors: any = {};
        if (formData.userName.trim() === "") {
            errors.userName = "Username is required";
        }
        if (formData.password.trim() === "") {
            errors.password = "Password is required";
        }
        if (Object.keys(errors).length === 0) {

            console.log("Form data:", formData);
            // Reset form data
            setFormData({ userName: "", password: "" });
        } else {
            // Update errors state
            setErrors(errors);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                    />
                    {errors.userName && <span>{errors.userName}</span>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="********"
                        required
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>

               <PrimaryButton value='Login' fontSize={14} height={'30px'} width={'200px'} onClickFunction={()=>{}} /> 
               <SecondaryButton value='Register here' fontSize={14} height={'30px'} width={'200px'} onClickFunction={()=>{}}/>
            </form>
        </div>
    );
};

export default LoginPage;
