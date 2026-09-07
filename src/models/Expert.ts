import mongoose, { Schema, Document } from 'mongoose';

export interface IExpert extends Document {
  expertId: string;
  name: string;
  role: string;
  experience: string;
  initials: string;
  qualifications: string[];
  jurisdiction: string;
  practiceAreas: string[];
  image: string;
  bio: string[];
}

const ExpertSchema: Schema = new Schema({
  expertId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },
  initials: { type: String, required: true },
  qualifications: [{ type: String }],
  jurisdiction: { type: String, required: true },
  practiceAreas: [{ type: String }],
  image: { type: String, required: true },
  bio: [{ type: String }]
}, {
  timestamps: true
});

export default mongoose.models.Expert || mongoose.model<IExpert>('Expert', ExpertSchema);
