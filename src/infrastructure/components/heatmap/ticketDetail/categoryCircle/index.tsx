import Image from "next/image";

const texts = ["Persistencia", "Objetivo", "Usuario", "Sistemas", "HTTPS", "Tus acciones", "Nuestras acciones"];
const images=  [
	"/img/clave 1.png",
	"/img/bomba 1.png",
	"/img/acceso 2.png",
	"/img/el-malware 2.png",
	"/img/seguridad-informatica 2.png",
	"/img/charlar 1.png",
	"/img/logo-sentria.png",
]

export default function CategoryCircle({onClick} : CategoryCircleProps) {

	return (
		<button onClick={onClick} className="flex flex-col gap-2 justify-center items-center">
			<h5 className="text-sm text-center">{texts[Math.floor(Math.random() * texts.length)]}</h5>
			<Image src={images[Math.floor(Math.random() * images.length)]} alt="key-icon" width={33} height={33}/>
		</button>
	);
};



interface CategoryCircleProps {
	onClick?: () => void;
}
