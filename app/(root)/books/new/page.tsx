"use client";

import { useState } from "react";
import Image from "next/image";
import UploadForm from "@/components/UploadForm";

const AddNewBook = () => {
	const [gender, setGender] = useState<"male" | "female">("female");

	return (


			<main className="wrapper container">
				<div className="mx-auto max-w-180 space-y-10">
					<section className="flex flex-col gap-5">
						<h1 className="page-title-xl">Add a new Book</h1>
						<p className="subtitle">Upload a PDF to generate your interactive interview</p>

						<UploadForm />
					</section>

				</div>

			</main>

	);
};

export default AddNewBook;