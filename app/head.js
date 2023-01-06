import { variables } from "./Variables";

export default function Head() {
  return (
    <>
      <title>{variables.name}</title>
      <meta name="description" content={variables.description} />
      <meta name="keywords" content={variables.keywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={variables.name} />
      <meta property="og:description" content={variables.description} />
    </>
  );
}
