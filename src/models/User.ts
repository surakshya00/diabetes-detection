import mongoose from "mongoose";

export interface Users extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  diabetesResult: {
    hasDiabetes: boolean;
    timestamp: string;
  };
}

const UserSchema = new mongoose.Schema<Users>({
  firstName: {
    type: String,
    required: [true, "Please provide a first name for this user"],
    maxlength: [60, "First name cannot be more than 60 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide the last name for this user"],
    maxlength: [60, "Last name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide the email for this user"],
  },
  passwordHash: {
    type: String,
    required: [true, "Please provide the password hash for this user"],
  },
  diabetesResult: {
    hasDiabetes: {
      type: Boolean,
    },
    timestamp: {
      type: String,
    },
  },
});

export default mongoose.models.User ||
  mongoose.model<Users>("User", UserSchema);
