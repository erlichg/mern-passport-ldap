const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  // Authentication
  auth: {
    ldapUrl: 'ldap://app.corp.emc.com:3268',
    baseDN: 'dc=emc,dc=com',
  },
};

export default config;
