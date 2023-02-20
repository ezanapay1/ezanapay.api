export default {
    port: process.env.PORT || 3000,
    dbURL: process.env.DATABASE_URL,
    logLevel: "info",
    accessTokenPrivateKey: "",
    refreshTokenPrivateKey: "",
    smtp: {
      user: "icqskc5mxzf3bwct@ethereal.email",
      pass: "mVSU79SbF3WmvGqy4V",
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
    },
  };