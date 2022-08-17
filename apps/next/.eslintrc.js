module.exports = {
  root: true,
  extends: ["next", "prettier", "plugin:react-hooks/recommended", "next/babel"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
