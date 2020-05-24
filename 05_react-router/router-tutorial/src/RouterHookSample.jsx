import useReactRouter from "use-react-router";

const RouterHookSample = () => {
  const { history, locstion, match } = useReactRouter();
  console.log({ history, locstion, match });
  return null;
};

export default RouterHookSample;
