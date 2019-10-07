import styled from "@emotion/styled";

const DashboardBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  padding-bottom: 10px;

  .header {
    /* height: 100%; */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 75px);
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
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    grid-gap: 20px;
  }

  .cardBody {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
  }

  .cardLeft {
    display: grid;
    grid-template-rows: 1fr repeat(2, 40px);
  }

  .recipeTitle {
    color: ${props => props.theme.blue};
  }
`;

export default DashboardBody;
