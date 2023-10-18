import {
  Stack,
  TextInput,
  PasswordInput,
  Group,
  Anchor,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useState } from "react";

const RegistrationForm = ({
  toggle,
  close,
}: {
  toggle: Function;
  close: () => void;
}) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (val) =>
        // only on login do we validate
        /^\S+@\S+$/.test(val) ? null : "Invalid email",
      password: (val) =>
        val.length >= 6
          ? null
          : "Password should include at least 6 characters",
      confirmPassword: (val, formValues) =>
        formValues.confirmPassword === formValues.password
          ? null
          : "Passwords don't match",
      name: (val) => (val.length > 0 ? null : "Name cannot be empty"),
    },
  });
  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        setIsLoading(true);
        // user is registering
        const registerUser = await fetch(`/api/registration`, {
          method: "POST",
          body: JSON.stringify({ ...values }),
        });

        const registeredUser: { success: boolean } = await registerUser.json();
        // user successfully logged in
        if (!registeredUser.success) {
          return alert(`We found a problem when signing you up :(`);
        }
        alert(`Successfully registered!`);
        close();
        // reload page but now with auth (log in state)
        router.reload();

        setIsLoading(false);
      })}
    >
      <Stack>
        <>
          <TextInput
            required
            label="Name"
            placeholder="Your name"
            value={form.values.name}
            onChange={(event) =>
              form.setFieldValue("name", event.currentTarget.value)
            }
            error={form.errors.name && "Name cannot be empty"}
          />

          <TextInput
            required
            label="Email"
            placeholder="johndoe@gmail.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue("email", event.currentTarget.value)
            }
            error={form.errors.email && "Invalid email"}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "Password should include at least 6 characters"
            }
          />

          <PasswordInput
            required
            label="Confirm password"
            placeholder="Confirm your password"
            value={form.values.confirmPassword}
            onChange={(event) =>
              form.setFieldValue("confirmPassword", event.currentTarget.value)
            }
            error={form.errors.confirmPassword && "Passwords don't match"}
          />
        </>
      </Stack>

      <Group position="apart" mt="xl">
        <Anchor
          component="button"
          type="button"
          color="dimmed"
          onClick={() => toggle()}
          size="xs"
        >
          Already have an account? Login
        </Anchor>
        <Button loading={isLoading} type="submit">
          {upperFirst(`register`)}
        </Button>
      </Group>
    </form>
  );
};
export default RegistrationForm;
