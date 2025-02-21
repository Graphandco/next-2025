"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import MagnetButton from "../ui/MagnetButton";
import Image from "next/image";

export const ContactForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<section id="contact-form" className="contact-form mt-12">
			<form>
				<div className="form-title">
					<h3>Nous écrire</h3>
				</div>
				<div className="relative z-0 w-full mb-5 group form-group">
					<input
						type="text"
						name="username"
						id="username"
						className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-primary appearance-none  focus:outline-none focus:ring-0 focus:border-white peer"
						placeholder=" "
						required
						{...register("name", { required: true, minLength: 2 })}
					/>
					<label
						htmlFor="username"
						className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Votre nom
					</label>
					{errors.name && (
						<div className="form-error">
							Le champ nom est requis
						</div>
					)}
				</div>
				<div className="relative z-0 w-full mb-5 group form-group">
					<input
						type="email"
						name="useremail"
						id="useremail"
						className="block py-2.5 px-0 w-full text-white bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
						placeholder=" "
						required
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
								message: "Invalid email address",
							},
						})}
					/>
					<label
						htmlFor="useremail"
						className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Votre adresse e-mail
					</label>
					{errors.email && (
						<div className="form-error">
							Le champ email est requis
						</div>
					)}
				</div>
				<div className="relative z-0 w-full mb-5 group form-group">
					<input
						type="text"
						name="floatinuserobjectg_object"
						id="userobject"
						className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-primary appearance-none text-white focus:outline-none focus:ring-0 focus:border-white peer"
						placeholder=" "
						required
						{...register("object", {
							required: true,
							minLength: 2,
						})}
					/>
					<label
						htmlFor="userobject"
						className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Objet du message
					</label>
					{errors.object && (
						<div className="form-error">
							Le champ objet est requis
						</div>
					)}
				</div>
				<div className="relative z-0 w-full mb-5 group form-group">
					<label htmlFor="message" className="block mb-2 font-medium">
						Votre message
					</label>
					<textarea
						id="message"
						rows="4"
						className="block p-2.5 w-full bg-transparent text-white rounded-lg border-2 border-primary focus:white focus:border-white "
						placeholder=" "
						required
						{...register("message", {
							required: true,
							minLength: 2,
						})}
					></textarea>
					{errors.message && (
						<div className="form-error">
							Le champ message est requis
						</div>
					)}
				</div>

				{/* <div className="flex items-center relative z-0 w-full mb-5 group form-group rgpd">
                    <div className="flex items-center">
                        <input id="link-checkbox" type="checkbox" value="" className="rounded-full w-4 h-4 mr-2 text-white bg-gray-100 border-none" />

                        <label for="link-checkbox">
                            En cochant cette case, vous acceptez d’être recontacté par email, conformément à notre{' '}
                            <Link href="">Politique de Confidentialité</Link>
                        </label>
                    </div>
                </div> */}

				<div className="me-4 w-full form-group rgpd">
					<label className="rounded-checkbox centered" htmlFor="rgpd">
						<input
							type="checkbox"
							id="rgpd"
							required
							{...register("rgpd", { required: true })}
						/>
						<span className="rounded-checkbox__outer cursor-pointer">
							<span className="rounded-checkbox__inner"></span>
						</span>
						<span>
							En cochant cette case, vous acceptez d’être
							recontacté par email, conformément à notre{" "}
							<Link href="politique-confidentialite">
								Politique de Confidentialité
							</Link>
						</span>
					</label>
					{errors.rgpd && (
						<div className="form-error">
							Merci d'accepter les termes de la politique de
							confidentialité
						</div>
					)}
				</div>

				<MagnetButton
					title="Envoyer"
					onClick={handleSubmit(onSubmit)}
				/>
			</form>
			<Image
				aria-hidden
				src="/contact.svg"
				alt="Contact"
				width={400}
				height={600}
			/>
		</section>
	);
};
