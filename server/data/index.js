import mongoose from "mongoose";

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: "6424269f4e833e9e6494f018",
    firstName: "Abhineeth",
    lastName: "Babu",
    location: "Kerala, India",
    description: "Athirappilly Waterfall #beauty",
    picturePath: "abhi_1.jpg",
    userPicturePath: "IMG_9713.jpg",
    likes: new Map([]),
    comments: [
      "Wow, Just awesome",
      "What a view!",
      "OMG This place is just MIND BLOWING!",
    ],
  },
];
