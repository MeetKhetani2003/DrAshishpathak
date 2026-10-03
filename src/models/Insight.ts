import mongoose from 'mongoose';

const InsightSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  date: { type: String, required: true },
  readingTime: { type: String, required: true },
  image: { type: String, required: true },
  kind: { 
    type: String, 
    required: true,
    enum: ["Concept Note", "Practice Brief", "Documentation Guide", "Insight"]
  },
  body: [{ type: String }],
  takeaways: [{ type: String }],
}, { timestamps: true });

export default mongoose.models.Insight || mongoose.model('Insight', InsightSchema);
