import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Anchor,
  Modal,
} from "@mantine/core";
import React, { useState } from "react";
import { useRouter } from "next/router";
import RegistrationForm from "./registration-form";

const LoginModal = ({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) => {
  // @ts-expect-error
  const [type, toggle]: [type: "login" | "register", toggle: any] = useToggle([
    "login",
    "register",
  ]);

  return (
    <Modal withCloseButton={false} opened={opened} onClose={close}>
      <Paper radius="md" p="md">
        <Text size="lg" align="center" weight={500}>
          Welcome to Nexty articles
        </Text>

        <Divider label="Continue with email" labelPosition="center" my="lg" />
        {type === "login" ? (
          <LoginForm toggle={toggle} close={close} />
        ) : (
          <RegistrationForm toggle={toggle} close={close} />
        )}
      </Paper>
    </Modal>
  );
};

const LoginForm = ({
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
      password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(async (values) => {
        setIsLoading(true);
        // user is logging in
        const loginUser = await fetch(`/api/login`, {
          method: "POST",
          body: JSON.stringify({ ...values }),
        });

        const user: { success: boolean } = await loginUser.json();
        // user successfully logged in
        if (!user.success) {
          return alert(`We found a problem when logging you in`);
        }

        alert(`Successfully logged in!`);
        close();
        // reload page but now with auth (log in state)
        router.reload();

        setIsLoading(false);
      })}
    >
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
        mt={5}
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
      <Group position="apart" mt="xl">
        <Anchor
          component="button"
          type="button"
          color="dimmed"
          onClick={() => toggle()}
          size="xs"
        >
          Don't have an account? Register
        </Anchor>
        <Button loading={isLoading} type="submit">
          {upperFirst(`login`)}
        </Button>
      </Group>
    </form>
  );
};

export default LoginModal;
