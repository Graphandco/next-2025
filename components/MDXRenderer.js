"use client";

import { MDXRemote } from "next-mdx-remote";

export default function MDXRenderer({ source }) {
	return (
		<div className="markdown">
			<MDXRemote {...source} />
		</div>
	);
}
