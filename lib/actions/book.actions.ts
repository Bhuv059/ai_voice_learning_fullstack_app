'use server'
import {connectToDatabase} from "@/database/mongoose";
import {generateSlug, serializeData} from "@/lib/utils";
import {CreateBook, TextSegment} from "@/type";
import {Book} from "@/database/models/book.model";
import BookSegment from "@/database/models/book-segment.model";


export const checkBookExists = async (title: string) =>{
	try{
		await connectToDatabase()
		const slug =  generateSlug(title);
		const existingBook = await Book.findOne({slug}).lean()
		if(existingBook){
			return { exists: true, book: serializeData(existingBook)}
		}
		return {exists: false}
	} catch (e){
		console.error('Error: Book does not exists', e);
		return { exists: false, error: e };
	}
}

export const createBook = async (data: CreateBook)=>{
	try{
		await connectToDatabase()
		const slug = generateSlug(data.title)
		const existingBook = await  Book.findOne({slug}).lean()
		/*if(existingBook){
			return {success: true, alreadyExists: true, data: serializeData(existingBook)};
		}*/
		if(existingBook){
			return { success: true, alreadyExists: true, book: serializeData(existingBook) };
		}
		//Todo: check subscription limits before creating a book

		const book = await Book.create({...data, slug, totalSegments:0})
		return {success: true, book: JSON.parse(JSON.stringify(book)) };
	}
	catch(e){
		console.error('Error creating a book',e);
		return{ success: false , error: e };
	}
}

export const  saveBookSegments = async (bookId: string, clerkId: string, segments: TextSegment[])=>{
	try{
		await connectToDatabase()
		console.log("Saving book segments...")

		const segmentsToInsert = segments.map(({text, segmentIndex, pageNumber, wordCount}) => ({
			clerkId, bookId, content: text, segmentIndex, pageNumber, wordCount
		}))
		//await BookSegment.insertMany(segmentsToInsert)
		const BATCH_SIZE = 500;

		for (let i = 0; i < segmentsToInsert.length; i += BATCH_SIZE) {
			const batch = segmentsToInsert.slice(i, i + BATCH_SIZE);
			await BookSegment.insertMany(batch);
		}
		await Book.findByIdAndUpdate(bookId, {totalSegments: segments.length})
		return {success: true, data:{segmentsCreated: segments.length}}

	}catch(e){
		console.error('Error saving a book',e);
		await BookSegment.deleteMany({bookId})
		await Book.findByIdAndDelete(bookId)
		console.log('Deleted book segments and book due to failure to save segments')
		return { success: false, error: e };
	}
}

export const getAllBooks = async () => {

	try {
		await connectToDatabase()
		const books = await Book.find()
								.sort({ createdAt: -1 })
								.lean()
		return {success: true, books: serializeData(books) };
	}catch(e){
		console.error('Error getting all books...', e)
		return { success: false, error: e };
	}
}
