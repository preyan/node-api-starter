CREATE OR REPLACE FUNCTION login_user(email VARCHAR, password VARCHAR)
RETURNS TABLE(user_id INT, name VARCHAR) AS $$
BEGIN
  RETURN QUERY
  SELECT id, name FROM users WHERE email = email AND password = crypt(password, password);
END;
$$ LANGUAGE plpgsql;
