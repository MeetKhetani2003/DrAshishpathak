import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const ServiceSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'LucideIcon' },
  features: [{ type: String }]
}, {
  timestamps: true
});

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);
