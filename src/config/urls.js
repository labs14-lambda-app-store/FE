export const backendUrl =
  process.env.NODE_ENV === "development" &&
  process.env.REACT_APP_TESTING_LOCAL_BACKEND === "yespls"
    ? "http://localhost:5000"
    : // : 'https://halg-backend.herokuapp.com'; This was the original URL
      "https://lambdaappstore.herokuapp.com/";
export const frontendUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : // : 'https://hirelambdastudents.com'; This was the original URL
      "https://angry-hermann-981c04.netlify.com/";
