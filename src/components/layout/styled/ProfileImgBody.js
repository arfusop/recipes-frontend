import styled from "@emotion/styled";

const ProfileBody = styled.div`
  .profilePictureContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;
    justify-content: center;
    align-items: center;
  }

  h4 {
    text-align: center;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 200px;
  }

  .profileImgPlaceholder {
    font-size: 10em;
  }
`;

export default ProfileBody;
