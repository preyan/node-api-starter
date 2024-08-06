CREATE OR REPLACE FUNCTION register_user(email VARCHAR, password VARCHAR, name VARCHAR)
RETURNS VOID AS $$
BEGIN
  INSERT INTO users (email, password, name) VALUES (email, crypt(password, gen_salt('bf')), name);
END;
$$ LANGUAGE plpgsql;


