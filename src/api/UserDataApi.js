import { Chance } from "chance";

const chance = Chance();
export const getUserData = () => {
  // console.log(chance.name({ middle: true }));
  return chance.name({
    middle: true,
  });
};

// getUserData();
