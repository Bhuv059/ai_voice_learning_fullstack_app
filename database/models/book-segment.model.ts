import { Schema, model, models, Types } from "mongoose";
import { IBookSegment } from "@/type";

const BookSegmentSchema = new Schema<IBookSegment>(
	{
		clerkId: { type: String, required: true },
		bookId: { type: Types.ObjectId, ref: "Book", required: true, index: true },
		content: { type: String, required: true },
		segmentIndex: { type: Number, required: true, index: true },
		pageNumber: { type: Number , index: true },
		wordCount: { type: Number, required: true },
	}, { timestamps: true });


//Clean Code -> atomic functions -> segments->dive deeper
// 🔥 Prevent duplicate segmentIndex per book
BookSegmentSchema.index({ bookId: 1, segmentIndex: 1 }, { unique: true });
BookSegmentSchema.index({ bookId: 1, pageNumber: 1 });
BookSegmentSchema.index({ bookId: 1, content: "text" });

const BookSegment = models.BookSegment || model<IBookSegment>("BookSegment", BookSegmentSchema);
export default BookSegment