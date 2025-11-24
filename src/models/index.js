
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
let sequelize;

// If DATABASE_URL exists (Render)
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  });
} else {
  // Local development
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      dialect: "postgres",
      logging: false,
    }
  );
}


import UserModel from "./User.js";
import FarmModel from "./Farm.js";
import AnimalModel from "./Animal.js";

export const User = UserModel(sequelize);
export const Farm = FarmModel(sequelize);
export const Animal = AnimalModel(sequelize);

User.hasMany(Farm, { foreignKey: "userId", onDelete: "CASCADE" });
Farm.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Animal, { foreignKey: "userId", onDelete: "CASCADE" });
Animal.belongsTo(User, { foreignKey: "userId" });

Farm.hasMany(Animal, { foreignKey: "farmId", onDelete: "CASCADE" });
Animal.belongsTo(Farm, { foreignKey: "farmId" });
export { sequelize };
export default { sequelize, User, Farm, Animal };
