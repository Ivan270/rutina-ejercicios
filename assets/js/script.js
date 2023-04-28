import Plan from './clases/Plan.js';
import generadorEjercicios from './funciones/generadorEjercicios.js';

let form = document.getElementById('inputUser');

const procesaData = (plan) => {
	let planEjercicios = generadorEjercicios(plan.totalDias());
	const diasPlan = planEjercicios;

	const mostrarConsoles = () => {
		let num = 1;
		while (num <= plan.totalDias()) {
			let mostrar = diasPlan.next().value;
			console.log(mostrar);
			num++;
		}
	};
	plan.mostrarSemanas();
	plan.mostrarDias();
	mostrarConsoles();
};

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let semanas = semanasEjercicio.value;
	let dias = diasEjercicio.value;
	let plan = new Plan(semanas, dias);
	procesaData(plan);
});
