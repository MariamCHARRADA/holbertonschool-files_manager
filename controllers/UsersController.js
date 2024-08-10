import sha1 from "sha1";

const user = await User.create({
    username,
    email,
    password,
});