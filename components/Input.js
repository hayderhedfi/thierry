export const Input = ({ label=false, type="text", text="username", cb}) => {
    return (
			<div className="mb-4">
				{label ? (
					<label
						className="container px-5 block text-white-700 text-sm font-bold mb-5"
						htmlFor={text}>
						{text}
					</label>
				) : null}
				<input
					onChange={cb}
					className="container shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id={text}
					type={type}
					placeholder={text}
				/>
			</div>
		);
  }