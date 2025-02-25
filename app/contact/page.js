import { ContactForm } from "@/app/contact/ContactForm";
import Reveal from "@/components/ui/Reveal";
import ContactContent from "@/markdown/contact.mdx";

const ContactPage = () => {
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
			<ContactForm />
		</div>
	);
};

export default ContactPage;
