import styled from "@emotion/styled";

const DashboardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.25fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100%;

  .header {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
  }

  .headerOptions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  /* LEFT SIDE OF HEADER */
  .left {
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .title {
    font-size: 28px;
    font-style: italic;
    font-weight: bold;
    color: ${props => props.theme.blue};
  }

  .addNew {
    display: flex;
    flex-direction: column;
    margin-left: 1.5em;
    justify-content: center;
    align-items: center;
  }

  .filterOptions {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  /* RIGHT SIDE OF HEADER */
  .right {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* RECIPES */
  .recipesContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;
  }
`;

export default DashboardBody;
