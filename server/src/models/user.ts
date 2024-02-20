import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 50,
    },
    hash: {
      type: String,
      required: true,
    },
    uuid: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    picture: {
      type: String,
      default: "https://placehold.jp/150x150.png",
    },
    bio: {
        type: String,
        default: '',
        max: 500,
    }
  },
  {
    timestamps: true,
  }
);

export const user = mongoose.model("user", userSchema);

export function getUserByName(username: String) {
  return user
    .findOne({ name: username })
    .then((user: any) => user)
    .catch((error) => {
      throw error;
    });
}

export function getUserByUUID(uuid: String) {
    return user
      .findOne({ uuid: uuid })
      .then((user: any) => user)
      .catch((error) => {
        throw error;
      });
  }
  