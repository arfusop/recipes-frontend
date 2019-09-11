import styled from "@emotion/styled";

const Body = styled.div`
	width: 75%;
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	align-items: center;
	margin: auto;

	.formHeader {
		display: flex;
		height: 35px;
		justify-content: center;
		align-items: center;
	}

	.names {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
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
`;

export default Body;
