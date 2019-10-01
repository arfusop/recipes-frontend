import styled from "@emotion/styled";

const AuthBody = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  margin: auto;

  .formHeader {
    display: flex;
    /* height: 35px; */
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding-bottom: 10px;
  }

  .registerForm {
    border: 2px solid #1890ff;
    padding: 20px;
    border-radius: 4px;
  }

  .names {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .registerHeader {
    font-size: 22px;
    text-align: center;
  }

  .form {
    display: grid;
    width: 100%;
    grid-gap: 10px;
  }

  .registerLoginRow {
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .routeLink {
    padding-left: 3px;
  }
`;

export default AuthBody;
