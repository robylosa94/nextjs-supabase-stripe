import { Markdown, Html, Body } from "@react-email/components";

interface EmailProps {
  name: string;
}

export const WelcomeEmail = ({ name }: EmailProps) => {
  const content = `# Benvenuto **${name}**!`;

  return (
    <Html lang="en" dir="ltr">
      <Body className="bg-white my-auto mx-auto font-sans">
        <Markdown>{content}</Markdown>
      </Body>
    </Html>
  );
};
