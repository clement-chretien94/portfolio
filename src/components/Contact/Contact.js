import {useForm} from 'react-hook-form';
import styles from './Contact.module.scss';
import sendIcon from "../../assets/images/paper-plane-regular.svg";

function Contact() {
    const {register, handleSubmit, formState: {errors},} = useForm({
        defaultValues: {
            name: "",
            email:"",
            message:"",
        },
    });

    function submit(values) {
        console.log(values);
    }

    return (
        <>
            <h1 className={styles.inConstruction2}>En construction</h1>
            <section id='contact' className={styles.contact}>
                <div className={styles.textForm}>
                    <h1 className={styles.title}>Un projet en tête ?</h1>
                    <p>Utilisez le formulaire pour me donner le plus de détails possible et je vous répondrai dès que possible.</p>
                </div>

                <form onSubmit={handleSubmit(submit)}>
                    <div className={styles.field}>
                        <label htmlFor='name'>Votre Nom</label>
                        <input {...register("name", {
                            maxLength: {
                                value: 30,
                                message: "Votre nom est trop long"
                            },
                            required: {
                                value: true,
                                message: "Le champ est obligatoire"
                            }
                        })} id='name' type="text" placeholder="Nom" disabled/>
                        {errors?.name && <p>{errors.name.message}</p>}
                    </div>

                    <div className={styles.field}>
                        <label htmlFor='email'>Votre adresse e-mail</label>
                        <input {...register("email", {
                            validate(value) {
                                if(/\S+@\S+\.\S+/.test(value)) {
                                    return true;
                                } else {
                                    return "Veillez renseigner une adresse email valide"
                                }
                            },
                            required : {
                                value: true,
                                message: "Le champ est obligatoire"
                            }
                        })} id='email' type="text" placeholder="Adresse e-mail" disabled/>
                        {errors?.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className={`${styles.field} ${styles.textArea}`}>
                        <label htmlFor='message'>Votre message</label>
                        <textarea {...register("message", {
                            maxLength: {
                                value: 500,
                                message: "Votre message est trop long"
                            },
                            required: {
                                value: true,
                                message: "Le champ est obligatoire"
                            }
                        })} className={styles.textArea} id='message' type="text" placeholder="Message" disabled/>
                        {errors?.message && <p>{errors.message.message}</p>}
                    </div>

                    <button disabled>
                        <span>Envoyer le message</span>
                        <img width="24px" src={sendIcon} alt="sendIcon"/>
                    </button>
                </form>
            </section>
        </>
    )
}

export default Contact;