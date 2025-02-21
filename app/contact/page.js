import { ContactForm } from "@/components/contact/ContactForm";
import ContactContent from "@/markdown/contact.mdx";

import React from "react";

const ContactPage = () => {
	return (
		<div className="wrapper">
			<h1>Contact</h1>
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
