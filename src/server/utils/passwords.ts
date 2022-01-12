import * as bcrypt from "bcrypt";

const userPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(12);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

const comparePasswords = async (password: string, hashed: string) => {
  const passwordValidation = await bcrypt.compare(password, hashed);
  return passwordValidation;
};

export const security = {
  userPassword,
  verify: comparePasswords,
};
