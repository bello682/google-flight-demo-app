import React, { useEffect, useState } from "react";
import Modal from "./components/reusable-modal-component/modalComponent";
import Navbar from "./pages/navbar-footer/navbar";
import HeroComponent from "./components/re-usable-hero-section-component/heroComponent";
import Footer from "./pages/navbar-footer/footer";

function App() {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	useEffect(() => {
		openModal();
	}, []);
	return (
		<div>
			<Navbar />

			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				customClass="custom-large"
			>
				<h2>Welcome!</h2>
				<p>This modal appears on page load.</p>
				<button onClick={closeModal}>Close Modal</button>
			</Modal>

			<HeroComponent />

			<Footer />
		</div>
	);
}

export default App;
