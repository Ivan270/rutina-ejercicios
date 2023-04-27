export default function* generadorEjercicios(dias) {
	let num = 1;
	while (num <= dias) {
		yield `Dia ${num}: sentadilla`;
		num++;
		yield `Dia ${num}: banco`;
		num++;
		yield `Dia ${num}: peso muerto`;
		num++;
		yield `Dia ${num}: prensa`;
		num++;
	}
}
