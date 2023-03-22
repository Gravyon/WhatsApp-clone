import { Button } from "@chakra-ui/button";
import { Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface IAuthProps {
  session: Session | null | any;
  reloadSession: () => void;
}

const Auth: React.FC<IAuthProps> = ({ session, reloadSession }) => {
  const [username, setUsername] = useState("");
  const onSubmit = async () => {
    try {
      // createUsername mutation to send username to the GraphQL API
    } catch (error: any) {
      console.log("onSubmit error", error);
    }
  };
  return (
    <div>
      <Center height="100vh">
        {/* This next line is needed due to a new bug in typescript or chakra or next, not sure */}
        <Stack spacing={8} align="center">
          {session ? (
            <>
              <Text>Create Username</Text>
              <Input
                placeholder="Enter a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button width="100%" onClick={onSubmit}>
                Save
              </Button>
            </>
          ) : (
            <>
              <Text fontSize="3xl">Whatsapp</Text>
              <Button
                onClick={() => signIn("google")}
                leftIcon={
                  <Image height="20px" src={"/images/googlelogo.png"} />
                }
              >
                Continue with Google
              </Button>
            </>
          )}
        </Stack>
      </Center>
    </div>
  );
};

export default Auth;
