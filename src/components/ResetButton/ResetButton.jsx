// eslint-disable-next-line react/prop-types
export default function ResetButton({ resetBtnHandler }) {
	return (
		<p>
			<button type="button" onClick={resetBtnHandler}>
				Reset
			</button>
		</p>
	);
}
