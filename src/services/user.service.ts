// @ts-ignore
import sequelize from '../config/db';

export const registerUser = async (
  email: string,
  password: string,
  name: string,
) => {
  const result = await sequelize.query(
    'SELECT register_user(:email, :password, :name)',
    {
      replacements: { email, password, name },
      type: sequelize.QueryTypes.SELECT,
    },
  );
  return result;
};

export const loginUser = async (email: string, password: string) => {
  const result = await sequelize.query(
    'SELECT * FROM login_user(:email, :password)',
    {
      replacements: { email, password },
      type: sequelize.QueryTypes.SELECT,
    },
  );
  return result;
};
