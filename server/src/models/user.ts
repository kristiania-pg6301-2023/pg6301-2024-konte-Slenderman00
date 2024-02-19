import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 3,
            max: 50
        },
        role: {
            type: Number,
            default: 0,
        },
        oidc: {
            provider: {
                type: String,
                required: true
            },
            sub: {
                type: String,
                required: true
            }
        },
        pictue: {
            type: String,
            default: "https://placehold.jp/150x150.png"
        }
    },
    {
        timestamps: true
    }
)

const user = mongoose.model("user", userSchema)

export default user