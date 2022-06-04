import jwt from "jsonwebtoken";
const jwtkey = process.env.JWTKEY;

const tokenGen = (id) => {
  return jwt.sign({ id }, jwtkey, {
    expiresIn: "5d",
  });
};

export default tokenGen;
