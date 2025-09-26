CREATE
OR REPLACE FUNCTION public.create.profile() RETURNS TRIGGER AS $$ BEGIN
VALUES
    (
        NEW.id
        NEW.email
    );
RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;