import styled from "@emotion/styled";

const ProfileBody = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;

  .profileBody {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .profileLeftSide {
  }
`;

export default ProfileBody;
