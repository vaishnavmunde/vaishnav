import { useForm } from "react-hook-form";

function Services() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSubmit1 = (data) => {
        console.log(data);
    }
    return (
        <>
            <p>service</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ margin: 100, display: "flex", width: 500, backgroundColor: "rgba(9, 166, 238, 0.52)", justifyContent: "center", alignItems: "center", boxShadow: '3px 3px 10px', padding: 30 }}>
                    <form onSubmit={handleSubmit(handleSubmit1)} style={{ margin: 10 }}>
                        <input className="input-group-text"
                            {...register("fname", { required: true })}
                        /><br /><br />

                        <input className="input-group-text"
                            {...register("lname", { required: 'Please enter last name' })}
                        />
                        {errors.lname && <span style={{ color: "red" }}>{errors.lname.message}</span>}
                        <br /> <br />


                        <input className="input-group-text"
                            {...register("email", {
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: 'Should be in correct form'
                                }
                            })}
                        />
                        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

                        <br /><br />


                        <input className="input-group-text"
                            {...register("password", {
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: 'Should be in correct form'
                                }
                            })}
                        /><br /><br />

                        <input className="input-group-text"
                            {...register("age",{min:{
                                value:18,
                                message:'Age must be greater than 18'
                            },
                            max:{
                                value:65,
                                message:'Age must be less than 65'
                            }
                        },
                            {
                            
                            }
                        )}
                        />{errors.age && <span style={{ color: "red" }}>{errors.age.message}</span>}
<br /><br />

                        <input type="checkbox"
                            {...register("subscribe")}
                        /><br /><br />
                        <button className="btn btn-primary" style={{ height: 40, width: 200, marginLeft: 1 }}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Services;