import styled from "@emotion/styled";

const Nav = styled.div`
	display: flex;
	justify-content: space-between;
  align-items: center;
  height: 30px;

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
  }
  
  li {
    width: 80px;
    text-align: center;
  }
`;

export default Nav;
