import { Resend } from "resend";
import { ContactForm } from "@/app/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";
import ContactContent from "@/markdown/contact.mdx";
import EmailTemplate from "@/components/email-template";

const ContactPage = async () => {
	async function handleSendEmail() {
		"use server";

		const resend = new Resend(process.env.RESEND_API_KEY);

		const { data } = await resend.emails.send({
			from: "Site Graph and Co <contact@graphandco.com>",
			to: ["contact@graphandco.com"],
			subject: "Nouveau message de votre site",
			// react: EmailTemplate({ firstName: "John" }),
			html: "<strong>It works!</strong>",
		});

		console.log(data);
	}
	return (
		<div className="wrapper">
			<Reveal>
				<h1>Contact</h1>
			</Reveal>
			{/* TEST HN */}
			{/* <div>
			<h2 className="py-7">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				exercitationem!
			</h2>
			<h3 className="py-7">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				exercitationem!
			</h3>
			<h4 className="py-7">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				exercitationem!
			</h4>
			<h5 className="py-7">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				exercitationem!
			</h5>
			<h6 className="py-7">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
				exercitationem!
			</h6>
         </div> */}
			<div className="markdown">
				<ContactContent />
			</div>
			<ContactForm handleSendEmail={handleSendEmail} />
		</div>
	);
};

export default ContactPage;
